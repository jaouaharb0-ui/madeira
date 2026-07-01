export type Day =
  | 'sat-25'
  | 'sun-26'
  | 'mon-27'
  | 'tue-28'
  | 'wed-29'
  | 'thu-30'
  | 'fri-31'
  | 'sat-01'

export type DayLabel = {
  short: string
  long: string
  date: string  // YYYY-MM-DD
  dayNumber: number
}

export const trip = {
  start: '2026-07-25',
  end:   '2026-08-01',
  destination: 'Madère',
  travelers: 2,
} as const

export const dayLabels: Record<Day, DayLabel> = {
  'sat-25': { short: 'Sam.',  long: 'Samedi 25 juillet',   date: '2026-07-25', dayNumber: 1 },
  'sun-26': { short: 'Dim.',  long: 'Dimanche 26 juillet', date: '2026-07-26', dayNumber: 2 },
  'mon-27': { short: 'Lun.',  long: 'Lundi 27 juillet',    date: '2026-07-27', dayNumber: 3 },
  'tue-28': { short: 'Mar.',  long: 'Mardi 28 juillet',    date: '2026-07-28', dayNumber: 4 },
  'wed-29': { short: 'Mer.',  long: 'Mercredi 29 juillet', date: '2026-07-29', dayNumber: 5 },
  'thu-30': { short: 'Jeu.',  long: 'Jeudi 30 juillet',    date: '2026-07-30', dayNumber: 6 },
  'fri-31': { short: 'Ven.',  long: 'Vendredi 31 juillet', date: '2026-07-31', dayNumber: 7 },
  'sat-01': { short: 'Sam.',  long: 'Samedi 1er août',     date: '2026-08-01', dayNumber: 8 },
}

export const orderedDays: Day[] = [
  'sat-25', 'sun-26', 'mon-27', 'tue-28',
  'wed-29', 'thu-30', 'fri-31', 'sat-01',
]
