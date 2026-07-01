import type { Day } from './trip'

export type ActivityType = 'surf' | 'rando' | 'restaurant' | 'viewpoint' | 'swim' | 'other'
export type Difficulty = 'easy' | 'medium' | 'hard'

export type Activity = {
  slug: string
  name: string
  type: ActivityType
  shortDescription: string
  longDescription: string
  photos: string[]
  coordinates: { lat: number; lng: number }
  duration?: string
  difficulty?: Difficulty
  bestTime?: string
  estimatedCost?: string
  day?: Day
  address?: string
}

export const activities: Activity[] = [
  {
    slug: 'porto-da-cruz-surf',
    name: 'Surf à Porto da Cruz',
    type: 'surf',
    shortDescription: "Le seul spot de surf de Madère avec une vague régulière et une école accessible aux débutants.",
    longDescription: `Porto da Cruz est le village de surf de Madère — un endroit où les pêcheurs côtoient les surfeurs depuis des décennies. La plage de galets noirs s'ouvre sur une vague gauche qui convient aussi bien aux débutants qu'aux riders intermédiaires.

L'école locale propose des cours en petit groupe (max 6 personnes) avec du matériel récent. La vague est propre le matin, plus agitée l'après-midi avec la brise atlantique. Le village derrière la plage mérite une balade : maisons colorées, bar à jus de canne à sucre (poncha locale), terrasse avec vue sur l'Aigle — le rocher emblématique du village.

Si la houle est trop grosse pour les débutants, l'école propose parfois de rider à Ribeira da Janela, un spot plus protégé sur la côte nord.`,
    photos: [
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=80',
      'https://images.unsplash.com/photo-1455264745730-cb3b76250d08?w=1200&q=80',
      'https://images.unsplash.com/photo-1531722569936-825d4eee6812?w=1200&q=80',
    ],
    coordinates: { lat: 32.7736, lng: -16.8413 },
    duration: "2–3h (cours) / toute la journée",
    difficulty: 'easy',
    bestTime: "Matin (avant 11h), octobre à mars pour la houle",
    estimatedCost: "45–60€ cours débutant / gratuit si tu as ton propre matériel",
    day: 'mon-27',
    address: 'Praia de Porto da Cruz, Porto da Cruz',
  },
  {
    slug: 'vereda-areeiro',
    name: 'Vereda do Areeiro — Pico Ruivo',
    type: 'rando',
    shortDescription: "La plus belle randonnée de l'île : des nuages en dessous des pieds, des crêtes volcaniques à 1800m.",
    longDescription: `La traversée Pico do Areeiro → Pico Ruivo est considérée comme la rando emblématique de Madère. On part du troisième plus haut sommet de l'île (1818m), souvent au-dessus de la couverture nuageuse, et on rejoint le plus haut sommet (1862m) en longeant des crêtes vertigineuses.

Le sentier alterne entre tunnels taillés dans la roche volcanique, passerelles suspendues au-dessus du vide et points de vue à 360° sur l'île. Par beau temps, on voit jusqu'aux îles Desertas au sud. Par temps couvert, on marche littéralement dans les nuages — ce qui est encore plus spectaculaire.

Prévoir des couches (il peut faire 10°C au sommet quand il fait 28°C sur le littoral), de bonnes chaussures de randonnée, et suffisamment d'eau (aucun point d'eau sur le parcours). La route PR1.2 dure environ 3h dans le sens Areeiro → Ruivo. Retour en taxi ou navette depuis Achada do Teixeira.`,
    photos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    ],
    coordinates: { lat: 32.7222, lng: -16.9282 },
    duration: '3–4h (Areeiro → Ruivo, sens unique)',
    difficulty: 'medium',
    bestTime: 'Tôt le matin (lever de soleil depuis le sommet), mai à octobre',
    estimatedCost: 'Gratuit — taxi retour ~25€',
    day: 'sun-26',
    address: 'Pico do Areeiro, 9200-050 Madère',
  },
  {
    slug: 'casa-velha-restaurante',
    name: 'Casa Velha do Palheiro',
    type: 'restaurant',
    shortDescription: "Cuisine madérienne gastronomique dans une ancienne maison de chasse, au milieu d'un jardin botanique.",
    longDescription: `Casa Velha do Palheiro est l'une des adresses les plus singulières de l'île. Le restaurant occupe la maison de chasse du 19e siècle des comtes de Carvalhal, entourée d'un jardin botanique de 14 hectares classé d'intérêt public.

La cuisine joue sur les produits locaux : espadon de l'Atlantique, limpets grillés (lapas), espada noire (le poisson des grandes profondeurs propre à Madère), légumes des terrasses. La carte change selon la saison et les arrivages. Le vin de Madère — le madère — est évidemment à l'honneur : un verre de Verdelho en accord avec le poisson change tout.

Réservation obligatoire. Tenue correcte demandée (pas besoin de cravate, mais pas de short). Prévoir un budget dîner, pas un lunch rapide. La terrasse au coucher du soleil avec vue sur les jardins et la baie de Funchal vaut à elle seule le détour.`,
    photos: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    ],
    coordinates: { lat: 32.6531, lng: -16.8891 },
    duration: '2–3h',
    bestTime: 'Dîner (réservation obligatoire)',
    estimatedCost: '60–90€ par personne (avec vins)',
    day: 'sat-25',
    address: 'Caminho do Palheiro 23, São Gonçalo, Funchal',
  },
]

export function getActivity(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug)
}

export function getActivitiesByType(type: ActivityType): Activity[] {
  return activities.filter((a) => a.type === type)
}
