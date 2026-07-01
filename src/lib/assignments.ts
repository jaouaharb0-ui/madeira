import { supabase } from './supabase'
import type { Day } from '../data/trip'

export type Assignment = {
  activity_slug: string
  day: Day | null
  done: boolean
  updated_at: string
}

// Store mémoire : slug → assignment
export const store = new Map<string, Assignment>()

export async function getAssignments(): Promise<Map<string, Assignment>> {
  const { data, error } = await supabase
    .from('assignments')
    .select('*')

  if (error) { console.error('[assignments] getAssignments:', error); return store }

  store.clear()
  for (const row of data as Assignment[]) {
    store.set(row.activity_slug, row)
  }
  return store
}

export async function setDay(slug: string, day: Day | null): Promise<void> {
  const { error } = await supabase
    .from('assignments')
    .upsert({ activity_slug: slug, day }, { onConflict: 'activity_slug' })

  if (error) { console.error('[assignments] setDay:', error); return }

  const existing = store.get(slug)
  store.set(slug, { activity_slug: slug, day, done: existing?.done ?? false, updated_at: new Date().toISOString() })
}

export async function toggleDone(slug: string): Promise<void> {
  const current = store.get(slug)
  const newDone = !(current?.done ?? false)

  const { error } = await supabase
    .from('assignments')
    .upsert({ activity_slug: slug, done: newDone }, { onConflict: 'activity_slug' })

  if (error) { console.error('[assignments] toggleDone:', error); return }

  store.set(slug, { activity_slug: slug, day: current?.day ?? null, done: newDone, updated_at: new Date().toISOString() })
}

type ChangeCallback = (updated: Assignment) => void

export function subscribeToChanges(callback: ChangeCallback): () => void {
  const channel = supabase
    .channel('assignments-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'assignments' },
      payload => {
        const row = payload.new as Assignment
        store.set(row.activity_slug, row)
        callback(row)
      }
    )
    .subscribe()

  return () => { supabase.removeChannel(channel) }
}
