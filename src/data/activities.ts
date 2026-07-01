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
    address: 'Caminho do Palheiro 23, São Gonçalo, Funchal',
  },
  {
    slug: 'cabo-girao',
    name: 'Cabo Girão',
    type: 'viewpoint',
    shortDescription: "Le mirador en verre suspendu à 580m au-dessus de l'Atlantique — la plus haute falaise d'Europe.",
    longDescription: `Cabo Girão est vertigineux. Le promontoire volcanique plonge à 580 mètres directement dans l'océan Atlantique, formant l'une des plus hautes falaises marines d'Europe. Un mirador en verre transparent s'avance au-dessus du vide : debout dessus, on voit ses pieds et 580m de roche noire en dessous.

En bas, sur les terrasses en culture, les agriculteurs travaillent encore leurs lopins de terre accessibles uniquement par câble depuis le bord de falaise. Ce contraste — la modernité du mirador de verre, les vignes centenaires en contrebas — résume bien Madère.

Le site est accessible en voiture ou en taxi depuis Funchal (25 minutes). Entrée gratuite. Meilleures lumières en fin de matinée, avant que la brume de l'après-midi ne bouche la vue vers l'est.`,
    photos: [
      'https://images.unsplash.com/photo-1548784487-4b56a81b1e61?w=1200&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
    ],
    coordinates: { lat: 32.6497, lng: -17.0450 },
    duration: '1h–1h30',
    difficulty: 'easy',
    bestTime: 'Matin (10h–12h)',
    estimatedCost: 'Gratuit',
    address: 'Miradouro Cabo Girão, Câmara de Lobos',
  },
  {
    slug: 'levada-caldeirae-verde',
    name: 'Levada do Caldeirão Verde',
    type: 'rando',
    shortDescription: "Forêt laurisylve UNESCO, tunnels taillés dans la roche et cascade cachée au cœur du parc naturel.",
    longDescription: `La Levada do Caldeirão Verde est l'une des randonnées les plus magiques de Madère. On longe un canal d'irrigation creusé à flanc de montagne à travers la forêt laurisylve — une forêt primaire du tertiaire, classée patrimoine mondial UNESCO, qui couvre les hauteurs de l'île de ses fougères géantes et de ses mousses.

Le sentier traverse quatre tunnels creusés à la main dans la roche volcanique (prévoir une lampe frontale), puis débouche sur une cascade qui tombe dans un bassin naturel entouré de falaises couvertes de végétation tropicale. Le retour se fait par le même chemin — mais la lumière change et c'est comme deux randonnées.

Départ depuis Queimadas (accessible en taxi ou voiture de location). Le sentier est bien balisé, plat pour l'essentiel, mais les tunnels sont humides et parfois bas de plafond. Lampe frontale obligatoire.`,
    photos: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    ],
    coordinates: { lat: 32.7897, lng: -16.8953 },
    duration: '4h (aller-retour)',
    difficulty: 'easy',
    bestTime: 'Matin',
    estimatedCost: 'Gratuit — taxi Queimadas ~20€ depuis Santana',
    address: 'Queimadas, Santana',
  },
  {
    slug: 'porto-moniz-piscines',
    name: 'Piscines de Porto Moniz',
    type: 'swim',
    shortDescription: "Piscines volcaniques naturelles creusées dans la lave noire, alimentées par les vagues de l'Atlantique.",
    longDescription: `À Porto Moniz, au bout de la côte nord-ouest de Madère, la mer a sculpté dans les coulées de lave des bassins naturels d'une beauté étrange. L'eau, turquoise et cristalline, est renouvelée à chaque marée et tempère à ~22°C en été.

Il y a deux complexes de piscines naturelles (l'un municipal, l'autre privé), quelques restaurants de poisson frais sur les rochers, et un village paisible derrière. C'est à 1h30 de Funchal par la route côtière nord — le trajet lui-même est spectaculaire, avec des tunnels creusés dans la falaise et des vues sur les vagues du large.

À prévoir : chaussures d'eau (le basalte est coupant à l'entrée), crème solaire à index élevé (pas d'ombre), et une journée complète pour profiter du lieu sans se presser. Le coucher du soleil depuis les piscines est mémorable.`,
    photos: [
      'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ],
    coordinates: { lat: 32.8694, lng: -17.1667 },
    duration: 'Demi-journée à journée',
    difficulty: 'easy',
    bestTime: 'Après-midi (eau réchauffée), météo calme',
    estimatedCost: '2–3€ entrée piscines municipales',
    address: 'Piscinas Naturais, Porto Moniz',
  },
  {
    slug: 'mercado-lavradores',
    name: 'Mercado dos Lavradores',
    type: 'other',
    shortDescription: "Fleurs exotiques, fruits tropicaux et poisson frais : le marché couvert de Funchal, âme de la ville.",
    longDescription: `Le Mercado dos Lavradores (marché des travailleurs) est le cœur populaire de Funchal depuis 1940. Le bâtiment en azulejos colorés abrite trois niveaux : au rez-de-chaussée, les étals de fleurs de paradis, d'orchidées et d'anthuriums ; à l'étage, les fruits tropicaux — maracujas, papayes, maçanetas (petites bananes sucrées) ; en sous-sol, le marché aux poissons avec l'impressionnante espada noire, poisson abyssal typique de Madère.

Les vendeurs sont expressifs, parfois insistants, toujours colorés. Arriver le matin (avant 10h) pour la meilleure ambiance et les prix les plus frais. On peut picorer des fruits coupés, goûter une poncha dans le bar du marché, emporter des épices et des fleurs séchées.

Le marché est à 5 minutes à pied du centre de Funchal. Ouvert du lundi au samedi.`,
    photos: [
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80',
    ],
    coordinates: { lat: 32.6510, lng: -16.9027 },
    duration: '1h–2h',
    bestTime: 'Matin (8h–11h)',
    estimatedCost: 'Gratuit (entrée) — budget fruits/épices à volonté',
    address: 'Rua Brigadeiro Oudinot, Funchal',
  },
  {
    slug: 'garajau-snorkeling',
    name: 'Snorkeling à Garajau',
    type: 'swim',
    shortDescription: "Réserve marine aux eaux cristallines : barracudas, raies et tortues dans les eaux chaudes de la côte sud.",
    longDescription: `La réserve marine de Garajau, à 10 minutes de Funchal, est l'un des meilleurs sites de snorkeling de Madère. Les eaux sont protégées depuis 1986 et la vie sous-marine s'y est reconstituée remarquablement : bancs de barracudas, raies, murènes cachées dans les rochers, et si on a de la chance, des tortues caouannes qui passent en majesté.

L'accès se fait depuis la plage de Garajau (téléférique depuis la route ou descente à pied). L'eau est propre et la visibilité souvent excellente (15–20m). On loue masques et tubas sur place ou on peut organiser une sortie guidée avec une école de plongée locale.

Meilleure période : juillet-août (eau à 22–24°C, mer généralement calme côté sud). Éviter après de fortes pluies qui troublent l'eau côtière. On peut combiner avec le téléférique de Garajau pour descendre vers la plage.`,
    photos: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    ],
    coordinates: { lat: 32.6336, lng: -16.8461 },
    duration: '2–3h',
    difficulty: 'easy',
    bestTime: 'Matin (eau calme avant la brise)',
    estimatedCost: 'Gratuit (snorkeling libre) / ~30€ sortie guidée',
    address: 'Praia do Garajau, Caniço',
  },
]

export function getActivity(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug)
}

export function getActivitiesByType(type: ActivityType): Activity[] {
  return activities.filter((a) => a.type === type)
}
