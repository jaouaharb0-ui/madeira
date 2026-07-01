export type PlanningActivity = {
  activitySlug: string
  time?: string
  notes?: string
}

export type PlanningDay = {
  day: number
  date: string
  title: string
  activities: PlanningActivity[]
}

export const planningDays: PlanningDay[] = [
  {
    day: 1,
    date: '2026-07-25',
    title: 'Arrivée & Funchal',
    activities: [
      {
        activitySlug: 'casa-velha-restaurante',
        time: '20h00',
        notes: "Premier dîner pour fêter l'arrivée — réserver à l'avance.",
      },
    ],
  },
  {
    day: 2,
    date: '2026-07-26',
    title: 'Crêtes volcaniques',
    activities: [
      {
        activitySlug: 'vereda-areeiro',
        time: '07h00',
        notes: "Partir tôt pour être au sommet avant les nuages. Taxi depuis Funchal ~30min.",
      },
    ],
  },
  {
    day: 3,
    date: '2026-07-27',
    title: 'Côte nord & Surf',
    activities: [
      {
        activitySlug: 'porto-da-cruz-surf',
        time: '09h00',
        notes: "Cours de surf le matin (réserver la veille). Après-midi : village et poncha.",
      },
    ],
  },
  {
    day: 4,
    date: '2026-07-28',
    title: 'Journée libre',
    activities: [],
  },
  {
    day: 5,
    date: '2026-07-29',
    title: 'Journée libre',
    activities: [],
  },
  {
    day: 6,
    date: '2026-07-30',
    title: 'Journée libre',
    activities: [],
  },
  {
    day: 7,
    date: '2026-07-31',
    title: 'Journée libre',
    activities: [],
  },
  {
    day: 8,
    date: '2026-08-01',
    title: 'Départ',
    activities: [],
  },
]
