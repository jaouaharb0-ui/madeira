export type ActivityType = 'surf' | 'rando' | 'restaurant' | 'viewpoint' | 'swim' | 'village'
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

  // ── Villages ──────────────────────────────────────────────────────────────

  {
    slug: 'camara-de-lobos',
    name: 'Câmara de Lobos',
    type: 'village',
    shortDescription: "Le village de pêcheurs que Churchill aimait peindre : bateaux colorés, poncha et falaises dramatiques.",
    longDescription: `À deux pas de Funchal, Câmara de Lobos est resté étonnamment authentique malgré sa célébrité. Winston Churchill venait y planter son chevalet face à la baie, fasciné par la lumière atlantique et les barques peintes en rouge et bleu. Aujourd'hui encore, les pêcheurs préparent leurs filets sur le même quai.

Le village est aussi la capitale officieuse de la poncha, l'alcool de canne à sucre local — quelques bars anciens la servent à la main dans une céramique traditionnelle. En remontant vers les hauteurs, les ruelles dévoilent une vue sur les falaises de Cabo Girão qui ferment la baie à l'ouest.`,
    photos: [
      'https://images.unsplash.com/photo-1570135009025-ad8fb5a54aa3?w=1200&q=80',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80',
    ],
    coordinates: { lat: 32.6503, lng: -16.9775 },
    duration: '1–2h',
    bestTime: "Matin (marché aux poissons) ou fin d'après-midi",
    estimatedCost: 'Gratuit',
    address: 'Câmara de Lobos',
  },

  {
    slug: 'ponta-do-sol',
    name: 'Ponta do Sol',
    type: 'village',
    shortDescription: "Le village le plus ensoleillé de Madère, niché entre falaises et mer, avec les meilleurs couchers de soleil de l'île.",
    longDescription: `Ponta do Sol porte bien son nom : c'est le coin le plus clément de Madère en termes d'ensoleillement, protégé au nord par ses falaises, ouvert au sud sur l'Atlantique. Le village est tranquille, presque hors du temps, avec ses ruelles pavées qui descendent jusqu'à une plage de galets noirs.

En fin d'après-midi, quand la lumière rasante dore les maisons blanches et que le soleil disparaît derrière les falaises à l'horizon, c'est une des vues les plus belles de la côte sud. Le front de mer est calme, les quelques restaurants servent du poisson frais et les locaux jouent aux cartes en terrasse.`,
    photos: [
      'https://images.unsplash.com/photo-1573126617899-41f1dffb196c?w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
    ],
    coordinates: { lat: 32.6800, lng: -17.1017 },
    duration: '1–2h',
    bestTime: "Fin d'après-midi (coucher de soleil)",
    estimatedCost: 'Gratuit',
    address: 'Ponta do Sol',
  },

  {
    slug: 'jardim-do-mar',
    name: 'Jardim do Mar',
    type: 'village',
    shortDescription: "Village côtier suspendu au-dessus de l'Atlantique, spot de surf world-class et terrasses au coucher du soleil.",
    longDescription: `Jardim do Mar signifie "jardin de la mer" — et l'endroit est à la hauteur du nom. Accroché à une corniche de la côte ouest, ce minuscule village de quelques dizaines d'habitants a une promenade en bord de mer et des ruelles fleuries qui se terminent en belvédères sur l'océan.

C'est aussi l'un des meilleurs spots de longboard de Madère, avec une vague gauche longue qui déferle sur les rochers noirs en hiver. Le bar Pukiki, le seul tiki bar de l'île, est posé au bout de la promenade — c'est là qu'on finit les journées.`,
    photos: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    ],
    coordinates: { lat: 32.7406, lng: -17.2297 },
    duration: '1–2h',
    bestTime: "Fin d'après-midi",
    estimatedCost: 'Gratuit',
    address: 'Jardim do Mar, Calheta',
  },

  {
    slug: 'ribeira-da-janela',
    name: 'Ribeira da Janela',
    type: 'village',
    shortDescription: "Village isolé de la côte nord-ouest, face aux îlots volcaniques et à une cascade qui plonge dans la mer.",
    longDescription: `Ribeira da Janela est l'un de ces endroits que peu de touristes atteignent — et c'est précisément ce qui le rend précieux. La côte nord-ouest de Madère y est à son état le plus brut : falaises verticales, houle puissante, végétation dense qui descend jusqu'à la mer.

Face au village, trois îlots volcaniques émergent des vagues. En arrière-plan, la rivière dévale la montagne en une cascade visible depuis la route. Le village lui-même est calme, presque vide, avec une demi-douzaine de maisons et un bar qui sert la soupe du jour.`,
    photos: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
    ],
    coordinates: { lat: 32.8658, lng: -17.1797 },
    duration: '30min–1h',
    bestTime: 'En route vers Porto Moniz',
    estimatedCost: 'Gratuit',
    address: 'Ribeira da Janela, Porto Moniz',
  },

  {
    slug: 'santana',
    name: 'Santana',
    type: 'village',
    shortDescription: "Les maisons triangulaires au toit de chaume descendant jusqu'au sol — l'image la plus iconique de Madère.",
    longDescription: `Santana est célèbre pour ses palheiros — ces maisons traditionnelles dont le toit de chaume descend en triangle presque jusqu'au sol, mi-grange mi-lutin. Quelques-unes sont encore habitées, d'autres ont été restaurées en musées ou gîtes. Le village est dans une vallée verdoyante de la côte nord, où il pleut souvent et où la végétation est d'un vert profond.

L'atmosphère y est différente du reste de l'île : plus fraîche, plus rurale, plus authentique. C'est aussi le point de départ du sentier vers Queimadas et la Levada do Caldeirão Verde.`,
    photos: [
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    ],
    coordinates: { lat: 32.7944, lng: -16.8878 },
    duration: '1–2h',
    bestTime: 'Matin (lumière sur les palheiros)',
    estimatedCost: 'Gratuit',
    address: 'Santana',
  },

  // ── Viewpoints ────────────────────────────────────────────────────────────

  {
    slug: 'cabo-girao',
    name: 'Miradouro Cabo Girão',
    type: 'viewpoint',
    shortDescription: "Le mirador en verre suspendu à 580m au-dessus de l'Atlantique — la plus haute falaise marine d'Europe.",
    longDescription: `Cabo Girão est vertigineux. Le promontoire volcanique plonge à 580 mètres directement dans l'océan Atlantique, formant l'une des plus hautes falaises marines d'Europe. Un mirador en verre transparent s'avance au-dessus du vide : debout dessus, on voit ses pieds et 580m de roche noire en dessous.

En bas, sur les terrasses en culture, des agriculteurs travaillent encore leurs lopins accessibles uniquement par câble depuis le bord de falaise. Ce contraste — la modernité du plancher de verre, les vignes centenaires en contrebas — résume bien Madère. Meilleures lumières en fin de matinée, avant la brume de l'après-midi.`,
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
    slug: 'veu-da-noiva',
    name: 'Miradouro Véu da Noiva',
    type: 'viewpoint',
    shortDescription: "La cascade 'voile de la mariée' qui dévale 100m de falaise directement dans la mer, visible depuis la route.",
    longDescription: `À quelques kilomètres de Seixal sur la route côtière nord, une cascade spectaculaire jaillit du sommet de la falaise et tombe en filaments dans l'Atlantique. Son nom — voile de la mariée — lui va parfaitement : par vent fort, l'eau se disperse en brume avant même de toucher les rochers.

Le mirador est accessible depuis la route en quelques mètres à pied seulement. C'est un des spectacles les plus saisissants de la côte nord, et pourtant souvent désert hors saison. On peut combiner avec la plage de Seixal juste en contrebas.`,
    photos: [
      'https://images.unsplash.com/photo-1580135649950-0d9bc7f1c023?w=1200&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
    ],
    coordinates: { lat: 32.8186, lng: -17.1114 },
    duration: '30min',
    bestTime: 'Après fortes pluies (cascade plus puissante)',
    estimatedCost: 'Gratuit',
    address: 'ER101, Seixal',
  },

  {
    slug: 'achadas-da-cruz',
    name: 'Achadas da Cruz — Téléphérique',
    type: 'viewpoint',
    shortDescription: "Le téléphérique le plus vertigineux de Madère : 450m de descente à pic vers un plateau agricole au bord des falaises.",
    longDescription: `Le téléphérique d'Achadas da Cruz est l'un des plus impressionnants de l'île : en moins de 3 minutes, la cabine plonge 450 mètres le long d'une falaise abrupte pour rejoindre un plateau agricole isolé où quelques familles cultivent encore leurs parcelles au bord du vide.

En bas : une plage de galets noirs, une eau limpide turquoise et le silence absolu. La montée offre une perspective encore plus vertigineuse sur la paroi volcanique. C'est un des endroits les plus insolites de l'île — presque personne ne le fait.`,
    photos: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    ],
    coordinates: { lat: 32.8647, lng: -17.1853 },
    duration: '1h30–2h (aller-retour)',
    bestTime: 'Matin (éviter la chaleur en bas)',
    estimatedCost: '3–5€ aller-retour',
    address: 'Achadas da Cruz, Porto Moniz',
  },

  {
    slug: 'bar-barreirinha',
    name: 'Bar Barreirinha',
    type: 'viewpoint',
    shortDescription: "Le bar de plage de Funchal avec la meilleure terrasse sur mer — piscine naturelle, poncha et couchers de soleil.",
    longDescription: `Barreirinha est l'endroit où les Funchalenses viennent se baigner et boire un verre en fin de journée. Accroché à la falaise à l'est du vieux Funchal, le complexe comprend une piscine naturelle taillée dans le basalte, un bar en plein air et une terrasse avec vue directe sur l'Atlantique.

C'est informel, animé et authentiquement local — bien loin des piscines d'hôtels. Le meilleur moment : en fin d'après-midi, quand la lumière descend sur l'eau et que la poncha commence à circuler.`,
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80',
    ],
    coordinates: { lat: 32.6481, lng: -16.8964 },
    duration: '2–4h',
    bestTime: "Fin d'après-midi",
    estimatedCost: 'Gratuit (piscine) — consommations',
    address: 'Rua do Gorgulho, Funchal',
  },

  // ── Swim ──────────────────────────────────────────────────────────────────

  {
    slug: 'praia-porto-seixal',
    name: 'Praia do Porto do Seixal',
    type: 'swim',
    shortDescription: "Plage de sable noir volcanique encadrée de falaises vertes — la plus belle plage sauvage de la côte nord.",
    longDescription: `La plage de Seixal est une des rares plages de sable de Madère, et son sable est noir, volcanique, presque irréel. Elle est encadrée de falaises couvertes de végétation dense et d'une petite cascade qui tombe directement sur la plage. L'eau est plus froide que sur la côte sud — mais limpide et d'un bleu profond.

Hors saison, la plage est quasi déserte et le cadre est saisissant. En été, elle attire les connaisseurs — les touristes de passage préfèrent généralement Porto Moniz. Il y a un café simple en haut des escaliers.`,
    photos: [
      'https://images.unsplash.com/photo-1548784487-4b56a81b1e61?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ],
    coordinates: { lat: 32.8222, lng: -17.1139 },
    duration: 'Demi-journée',
    bestTime: "Matin (avant l'arrivée des groupes)",
    estimatedCost: 'Gratuit',
    address: 'Praia do Seixal, Seixal',
  },

  {
    slug: 'porto-moniz-piscines',
    name: 'Piscines Naturelles de Porto Moniz',
    type: 'swim',
    shortDescription: "Piscines volcaniques naturelles creusées dans la lave noire, alimentées par les vagues de l'Atlantique.",
    longDescription: `À Porto Moniz, au bout de la côte nord-ouest, la mer a sculpté dans les coulées de lave des bassins naturels d'une beauté étrange. L'eau, turquoise et cristalline, est renouvelée à chaque marée. Il y a deux complexes de piscines (un municipal, un privé), quelques restaurants de poisson frais sur les rochers, et un village tranquille derrière.

À prévoir : chaussures d'eau (le basalte est coupant à l'entrée), crème solaire à index élevé (pas d'ombre), et une journée complète pour profiter du lieu sans se presser. Le trajet depuis Funchal par la route côtière nord vaut déjà le voyage.`,
    photos: [
      'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ],
    coordinates: { lat: 32.8694, lng: -17.1667 },
    duration: 'Demi-journée à journée',
    difficulty: 'easy',
    bestTime: 'Après-midi (eau réchauffée), mer calme',
    estimatedCost: '2–3€ entrée piscines municipales',
    address: 'Piscinas Naturais, Porto Moniz',
  },

  {
    slug: 'piscines-seixal',
    name: 'Piscines Naturelles de Seixal',
    type: 'swim',
    shortDescription: "Les piscines volcaniques sauvages de Seixal — moins fréquentées que Porto Moniz, plus brutes et plus belles.",
    longDescription: `À deux pas de la plage de Seixal, des bassins naturels se forment dans les coulées de lave entre les rochers. Moins aménagées et moins connues que celles de Porto Moniz, elles ont un côté plus sauvage et plus immersif. Les vagues entrent dans les bassins à marée haute — ça brasse, ça mousse, c'est vivant.

Un spot pour ceux qui préfèrent la nature brute aux piscines balisées. L'accès est libre, sans ticket ni barrière. À combiner avec la plage de sable noir juste à côté et le miradouro du Véu da Noiva sur la route.`,
    photos: [
      'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200&q=80',
      'https://images.unsplash.com/photo-1548784487-4b56a81b1e61?w=1200&q=80',
    ],
    coordinates: { lat: 32.8219, lng: -17.1078 },
    duration: '2–4h',
    bestTime: 'Journée ensoleillée, mer calme',
    estimatedCost: 'Gratuit',
    address: 'Seixal, Porto Moniz',
  },

  {
    slug: 'praia-prainha',
    name: 'Praia da Prainha',
    type: 'swim',
    shortDescription: "La seule plage de sable naturel de Madère, cachée au pied des falaises de Caniçal.",
    longDescription: `Prainha est une anomalie géologique sur une île de côtes rocheuses : une petite baie de sable brun naturel, abritée entre deux falaises, avec une eau turquoise et peu profonde qui se réchauffe vite l'été.

Elle est souvent citée comme la meilleure plage de Madère — ce qui veut dire qu'elle peut être bondée en juillet-août. Hors saison, c'est un endroit calme et magnifique, à deux pas de la presqu'île de São Lourenço. Les rochers environnants permettent de bonnes sessions de snorkeling.`,
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    ],
    coordinates: { lat: 32.7367, lng: -16.7208 },
    duration: 'Demi-journée',
    bestTime: 'Matin (hors juillet-août)',
    estimatedCost: 'Gratuit',
    address: 'Praia da Prainha, Caniçal',
  },

  {
    slug: 'garajau-snorkeling',
    name: 'Réserve Marine de Garajau',
    type: 'swim',
    shortDescription: "Réserve marine aux eaux cristallines : barracudas, mérous et tortues dans les eaux chaudes de la côte sud.",
    longDescription: `La réserve marine de Garajau, à 10 minutes de Funchal, est le meilleur site de snorkeling de Madère. Protégées depuis 1986, les eaux ont reconstitué une vie sous-marine remarquable : bancs de barracudas, mérous géants, murènes cachées dans les rochers, et si on a de la chance, des tortues caouannes qui passent en majesté.

L'accès se fait depuis la plage de Garajau (téléphérique depuis la route ou descente à pied). La visibilité est souvent excellente (15–20m). On loue masques et tubas sur place ou on peut organiser une sortie guidée avec une école de plongée locale.`,
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

  {
    slug: 'faja-dos-padres',
    name: 'Fajã dos Padres',
    type: 'swim',
    shortDescription: "Domaine viticole inaccessible par la route, rejoignable uniquement en téléphérique privé — l'endroit le plus confidentiel de la côte sud.",
    longDescription: `Fajã dos Padres est l'un des secrets les mieux gardés de Madère. Ce domaine agricole — vin, limons, fruits exotiques — est coincé entre une falaise de 300m et la mer, accessible uniquement par un téléphérique privé qui part du bord de la route côtière.

En bas : une plage de galets, une eau limpide, un restaurant de poisson grillé et le silence. On peut passer la journée à nager, manger et ne rien faire. C'est l'endroit le plus étrange et le plus beau de la côte sud — à réserver à l'avance car l'accès est limité.`,
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200&q=80',
    ],
    coordinates: { lat: 32.6639, lng: -17.0642 },
    duration: 'Demi-journée à journée',
    bestTime: 'Toute la journée (réserver le téléphérique)',
    estimatedCost: '5€ téléphérique A/R',
    address: 'Fajã dos Padres, Câmara de Lobos',
  },

  // ── Rando ─────────────────────────────────────────────────────────────────

  {
    slug: 'pico-arieiro',
    name: 'Pico do Arieiro',
    type: 'rando',
    shortDescription: "Le troisième plus haut sommet de Madère à 1818m — souvent au-dessus des nuages au lever du soleil.",
    longDescription: `Pico do Arieiro est le point de départ le plus spectaculaire de l'île. On monte en voiture jusqu'à 1818m, souvent au-dessus de la couverture nuageuse, pour un panorama sur les crêtes volcaniques et les îles au loin. Au lever du soleil, la mer de nuages en dessous des pieds est un spectacle à part entière.

C'est aussi le départ officiel du PR1, la grande traversée vers Pico Ruivo. Quelques minutes de marche depuis le parking suffisent pour atteindre le belvédère principal. Prévoir des couches — il peut faire 10°C au sommet quand il fait 28°C sur le littoral.`,
    photos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    ],
    coordinates: { lat: 32.7222, lng: -16.9282 },
    duration: '30min–1h (miradouro seul)',
    difficulty: 'easy',
    bestTime: 'Lever du soleil ou tôt le matin',
    estimatedCost: 'Gratuit',
    address: 'Pico do Arieiro, 9200-050 Madère',
  },

  {
    slug: 'pico-ruivo',
    name: 'Pico Ruivo',
    type: 'rando',
    shortDescription: "Le toit de Madère à 1862m — accessible depuis Achada do Teixeira pour un aller-retour de 2h.",
    longDescription: `Pico Ruivo est le point culminant de l'île. Depuis le parking d'Achada do Teixeira, le sentier monte 45 minutes à travers la bruyère et les affleurements rocheux jusqu'au sommet. Par beau temps, la vue embrasse toute l'île — côte nord, côte sud, Pico do Arieiro en face.

La maison d'abri au sommet permet de pique-niquer à l'abri du vent. C'est aussi l'arrivée du PR1 depuis Arieiro — si on fait la traversée dans ce sens, on redescend depuis ici en taxi ou navette via Achada do Teixeira.`,
    photos: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    ],
    coordinates: { lat: 32.7539, lng: -16.9144 },
    duration: '1h30–2h (aller-retour depuis Achada do Teixeira)',
    difficulty: 'easy',
    bestTime: 'Tôt le matin (avant la brume)',
    estimatedCost: 'Gratuit — taxi depuis Santana ~20€',
    address: 'Achada do Teixeira, Santana',
  },

  {
    slug: 'pr1-vereda-areeiro',
    name: 'PR1 — Vereda do Areeiro',
    type: 'rando',
    shortDescription: "La plus belle randonnée de Madère : 11km de crêtes volcaniques entre les deux plus hauts sommets de l'île.",
    longDescription: `La traversée Arieiro → Ruivo (PR1) est la randonnée emblématique de Madère. On longe des crêtes vertigineuses à plus de 1700m, on traverse des tunnels taillés dans la roche, on marche dans les nuages ou au-dessus d'eux selon la météo. La vue à 360° sur l'île est constante pendant 11km.

Prévoir 3–4h dans le sens Arieiro → Ruivo, un taxi ou navette pour le retour depuis Achada do Teixeira, des couches (il peut faire 10°C au sommet), de bonnes chaussures et suffisamment d'eau — aucun point de ravitaillement sur le sentier.`,
    photos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    ],
    coordinates: { lat: 32.7222, lng: -16.9282 },
    duration: '3–4h (sens unique Arieiro → Ruivo)',
    difficulty: 'medium',
    bestTime: 'Tôt le matin (avant les nuages)',
    estimatedCost: 'Gratuit — taxi retour ~25€',
    address: 'Pico do Arieiro (départ), Madère',
  },

  {
    slug: 'levada-caldeirao-verde',
    name: 'Levada do Caldeirão Verde',
    type: 'rando',
    shortDescription: "Forêt laurisylve UNESCO, tunnels creusés à la main et cascade cachée au fond d'un cirque volcanique.",
    longDescription: `La Levada do Caldeirão Verde est l'une des randonnées les plus envoûtantes de Madère. On longe un canal d'irrigation à flanc de montagne à travers la forêt laurisylve — une forêt primaire du tertiaire, classée UNESCO, couverte de fougères géantes et de mousses. Le sentier traverse quatre tunnels creusés dans la roche volcanique (lampe frontale obligatoire).

Au bout, une cascade tombe dans un bassin naturel entouré de parois couvertes de végétation tropicale. Le retour se fait par le même chemin — mais la lumière change et c'est comme deux randonnées.`,
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
    slug: 'levada-25-fontes',
    name: 'Levada das 25 Fontes + Risco',
    type: 'rando',
    shortDescription: "Double cascade au fond d'une forêt sauvage — la rando des cascades depuis le plateau de Rabaçal.",
    longDescription: `Depuis le plateau de Rabaçal, deux randonnées s'embranchent : la Levada do Risco mène à une cascade de 100m qui tombe dans un bassin, la Levada das 25 Fontes à un amphithéâtre rocheux où vingt-cinq sources surgissent simultanément de la paroi. On peut faire les deux en une demi-journée.

La forêt de lauriers et de bruyères géantes qui les entoure est une des plus belles de l'île. Le sentier est plat et bien balisé — c'est une des randonnées les plus accessibles pour un résultat parmi les plus spectaculaires de Madère.`,
    photos: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    ],
    coordinates: { lat: 32.7681, lng: -17.0797 },
    duration: '3h–4h (boucle Risco + 25 Fontes)',
    difficulty: 'easy',
    bestTime: 'Matin',
    estimatedCost: 'Gratuit — navette Rabaçal recommandée',
    address: 'Plateau de Rabaçal, Calheta',
  },

  {
    slug: 'vereda-balcoes',
    name: 'Vereda dos Balcões',
    type: 'rando',
    shortDescription: "La rando la plus facile de Madère : 30 minutes pour un panorama sur les plus hauts sommets de l'île.",
    longDescription: `Vereda dos Balcões est le sentier idéal pour ceux qui veulent de la montagne sans effort. Depuis le parking de Ribeiro Frio, on suit une levada à plat pendant 30 minutes à travers une forêt de lauriers et d'hortensias, jusqu'à un belvédère avec vue directe sur les sommets de Pico Ruivo et Pico do Arieiro.

Des pinsons des neiges de Madère viennent souvent manger dans la main au belvédère — un moment étonnant. C'est court, facile et magnifique. À combiner avec le vivier à truites de Ribeiro Frio juste à côté.`,
    photos: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    ],
    coordinates: { lat: 32.7355, lng: -16.8863 },
    duration: '1h (aller-retour)',
    difficulty: 'easy',
    bestTime: 'Matin (oiseaux plus actifs)',
    estimatedCost: 'Gratuit',
    address: 'Ribeiro Frio, Santana',
  },

  {
    slug: 'foret-fanal',
    name: 'Forêt de Fanal',
    type: 'rando',
    shortDescription: "Une forêt de lauriers centenaires dans la brume — l'atmosphère la plus mystérieuse de l'île.",
    longDescription: `Fanal est une clairière perdue dans les montagnes du nord-ouest, à plus de 1000m d'altitude, où poussent des tilleuls géants vieux de plusieurs centaines d'années. Quand la brume atlantique enveloppe les troncs tordus et les racines mousseues, l'atmosphère est franchement surnaturelle — à mi-chemin entre Tolkien et un tableau flamand.

Plusieurs sentiers partent de là. Le plus simple est une boucle d'une heure dans la forêt elle-même. Le matin tôt, avant que la brume ne se lève, est le moment le plus magique — et le plus souvent vide de touristes.`,
    photos: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80',
    ],
    coordinates: { lat: 32.8314, lng: -17.1108 },
    duration: '1h–2h',
    difficulty: 'easy',
    bestTime: 'Tôt le matin (brume)',
    estimatedCost: 'Gratuit',
    address: 'Fanal, Porto Moniz',
  },

  {
    slug: 'ponta-sao-lourenco',
    name: 'Ponta de São Lourenço — PR8',
    type: 'rando',
    shortDescription: "La presqu'île orientale de Madère : rando sur des crêtes entre deux mers, avec vue sur Porto Santo par temps clair.",
    longDescription: `La Ponta de São Lourenço est l'extrémité orientale de Madère — une presqu'île de basalte rouge et noir qui s'avance dans l'Atlantique. Le PR8 longe la crête entre l'Atlantique nord et la mer du sud sur 8km aller-retour. Le paysage est radicalement différent du reste de l'île : presque désertique, minéral, sans végétation haute.

Par temps clair, on voit Porto Santo à l'horizon. Vent fort assuré — et c'est ce qui rend la rando grisante. À faire tôt le matin pour éviter la chaleur et la foule.`,
    photos: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
    ],
    coordinates: { lat: 32.7408, lng: -16.7053 },
    duration: '3h–4h (aller-retour)',
    difficulty: 'medium',
    bestTime: 'Tôt le matin (éviter la chaleur)',
    estimatedCost: 'Gratuit',
    address: 'Caniçal (parking PR8)',
  },

  // ── Surf ──────────────────────────────────────────────────────────────────

  {
    slug: 'porto-da-cruz-surf',
    name: 'Surf à Porto da Cruz',
    type: 'surf',
    shortDescription: "Le seul spot de surf régulier de Madère, avec une école accessible aux débutants et un village de pêcheurs authentique.",
    longDescription: `Porto da Cruz est le village de surf de Madère. La plage de galets noirs s'ouvre sur une vague gauche qui convient aussi bien aux débutants qu'aux riders intermédiaires. L'école locale propose des cours en petit groupe (max 6 personnes) avec du matériel récent. La vague est propre le matin, plus agitée l'après-midi avec la brise atlantique.

Le village derrière mérite une balade : maisons colorées, bar à jus de canne à sucre, terrasse avec vue sur l'Aigle — le rocher emblématique qui garde l'entrée de la baie.`,
    photos: [
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=80',
      'https://images.unsplash.com/photo-1455264745730-cb3b76250d08?w=1200&q=80',
    ],
    coordinates: { lat: 32.7736, lng: -16.8413 },
    duration: '2–3h (cours) / toute la journée',
    difficulty: 'easy',
    bestTime: 'Matin (avant 11h)',
    estimatedCost: '45–60€ cours débutant',
    address: 'Praia de Porto da Cruz, Porto da Cruz',
  },

  {
    slug: 'paul-do-mar-surf',
    name: 'Surf à Paul do Mar',
    type: 'surf',
    shortDescription: "Le spot secret de la côte ouest — une vague puissante de classe mondiale, loin des foules.",
    longDescription: `Paul do Mar était jusqu'aux années 2000 l'un des spots de surf les plus secrets de l'Atlantique. La vague de gauche qui déferle sur les rochers noirs est longue, puissante et régulière — certains jours de houle d'hiver, elle compte parmi les meilleures vagues d'Europe.

Le village, accessible par un tunnel creusé dans la falaise, est calme et un peu hors du monde. À réserver aux surfeurs avec un minimum d'expérience. En été, la houle est plus faible mais la vague reste propre et bien formée.`,
    photos: [
      'https://images.unsplash.com/photo-1531722569936-825d4eee6812?w=1200&q=80',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=80',
    ],
    coordinates: { lat: 32.7639, lng: -17.2083 },
    duration: '2–4h',
    difficulty: 'medium',
    bestTime: 'Hiver pour la houle — été pour apprendre',
    estimatedCost: 'Gratuit',
    address: 'Paul do Mar, Calheta',
  },

  // ── Restaurants ───────────────────────────────────────────────────────────

  {
    slug: 'o-polar',
    name: 'Restaurante O Polar',
    type: 'restaurant',
    shortDescription: "L'espetada de bœuf sur broche de laurier comme on ne la fait plus qu'ici — une institution de Câmara de Lobos.",
    longDescription: `O Polar est l'adresse incontournable pour l'espetada madeirense : de grands morceaux de bœuf marinés, embrochés sur une branche de laurier et cuits sur braise. La présentation est spectaculaire — la brochette est suspendue verticalement à un crochet au-dessus de la table, et on grignote directement dessus.

La salle est simple, les prix raisonnables, la viande irréprochable. C'est le genre d'endroit où les locaux emmènent leurs familles le week-end. Réservation recommandée.`,
    photos: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    ],
    coordinates: { lat: 32.6503, lng: -16.9775 },
    duration: '1h30–2h',
    bestTime: 'Déjeuner ou dîner (réserver le week-end)',
    estimatedCost: '15–25€ par personne',
    address: 'Rua do Pico da Torre 26, Câmara de Lobos',
  },

  {
    slug: 'casa-de-pedra',
    name: 'Restaurante Casa de Pedra',
    type: 'restaurant',
    shortDescription: "Petiscos généreux, patron ronchon et vue sur la mer — une adresse de caractère à Madalena do Mar.",
    longDescription: `Casa de Pedra est le genre d'endroit qu'on ne trouve que par le bouche-à-oreille. La carte est courte — quelques petiscos du marché, du poisson frais, du fromage local — et le patron sert ce qu'il veut dans l'ordre qu'il veut. Ce n'est pas pour tout le monde.

Mais pour ceux que le caractère amuse, c'est une des tables les plus mémorables de la côte sud-ouest. La terrasse donne sur la mer et les falaises. Il vaut mieux ne pas arriver avec une idée précise de ce qu'on veut manger.`,
    photos: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    ],
    coordinates: { lat: 32.7156, lng: -17.1286 },
    duration: '1h30–2h',
    bestTime: 'Déjeuner',
    estimatedCost: '15–20€ par personne',
    address: 'Av. 1º de Fevereiro 42, Madalena do Mar',
  },

  {
    slug: 'pasto-justiniano',
    name: 'Casa de Pasto Justiniano',
    type: 'restaurant',
    shortDescription: "Poisson grillé et légumes du jardin dans un cadre de montagne sauvage, entre São Vicente et Porto Moniz.",
    longDescription: `Justiniano est caché dans le hameau de Chão da Ribeira, au fond d'une gorge verdoyante que peu de touristes visitent. C'est une maison de pasto au sens littéral — un repas simple, honnête, cuisiné avec ce que le jardin et la mer donnent ce jour-là.

L'espada noire grillée au beurre et les légumes du potager font partie des meilleures choses qu'on puisse manger sur l'île. Le cadre est sauvage, l'accueil chaleureux, les prix dérisoires. À ne pas confondre avec le restaurant touristique du même nom à Funchal.`,
    photos: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    ],
    coordinates: { lat: 32.8408, lng: -17.1097 },
    duration: '1h30–2h',
    bestTime: 'Déjeuner',
    estimatedCost: '10–18€ par personne',
    address: 'Chão da Ribeira, Seixal',
  },

  {
    slug: 'venda-do-andre',
    name: 'Venda do André',
    type: 'restaurant',
    shortDescription: "Le bar à poncha le plus authentique de Madère, dans une épicerie-bar de 1950 à Quinta Grande.",
    longDescription: `À Venda do André, le décor n'a pas changé depuis les années 1950 : vitrines en bois, photos sépia, bancs rustiques. La poncha — alcool de canne à sucre, miel de bruyère, citron — est préparée à la commande dans une céramique traditionnelle avec un bâton en bois appelé caralhinho.

C'est une des adresses les plus appréciées des locaux sur toute la côte sud-ouest. On y vient pour la poncha, on y reste pour l'ambiance. À quelques minutes de Câmara de Lobos, en montant vers les hauteurs.`,
    photos: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    ],
    coordinates: { lat: 32.6697, lng: -17.0064 },
    duration: '1–2h',
    bestTime: "Fin d'après-midi",
    estimatedCost: '3–6€ par verre',
    address: 'Estrada João Gonçalves Zarco, Quinta Grande',
  },

  {
    slug: 'pukiki',
    name: 'Bar Pukiki',
    type: 'restaurant',
    shortDescription: "Le seul tiki bar de Madère, dans le village de surf de Jardim do Mar — rhum, cocktails et coucher de soleil.",
    longDescription: `Pukiki célèbre un lien historique méconnu : les émigrants de Madère qui partaient travailler dans les plantations de canne d'Hawaï au 19e siècle, et qui ont laissé une empreinte culturelle là-bas. "Pukiki" est le surnom que les Hawaïens leur donnaient.

Le bar est coloré, décontracté, avec la plus grande collection de rhums de l'île — plus de 100 références. L'happy hour au coucher du soleil depuis la terrasse, avec vue sur la vague de Jardim do Mar, est un des moments les plus plaisants de la côte ouest.`,
    photos: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80',
      'https://images.unsplash.com/photo-1573126617899-41f1dffb196c?w=1200&q=80',
    ],
    coordinates: { lat: 32.7419, lng: -17.2272 },
    duration: '1–3h',
    bestTime: 'Coucher de soleil',
    estimatedCost: '8–14€ par cocktail',
    address: 'Jardim do Mar, Calheta',
  },

  {
    slug: 'manifattura-di-gelato',
    name: 'Manifattura di Gelato',
    type: 'restaurant',
    shortDescription: "Pizza napolitaine et glaces artisanales à la marina de Calheta — la meilleure pizza de l'île, de l'avis général.",
    longDescription: `Dans le cadre improbable d'une marina de plaisance sur la côte ouest de Madère, Manifattura di Gelato sert une pizza napolitaine authentique — pâte fine, cuisson au feu de bois, ingrédients italiens — et des glaces artisanales qui finissent chaque repas en beauté.

La terrasse donne sur les bateaux et l'Atlantique. C'est simple, régulier et toujours bon — une adresse qu'on recommande depuis des années aux voyageurs qui passent par Calheta. Ouvert tous les jours de 12h à 22h.`,
    photos: [
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=80',
      'https://images.unsplash.com/photo-1578374173703-5f1e4d45ef8f?w=1200&q=80',
    ],
    coordinates: { lat: 32.7183, lng: -17.1706 },
    duration: '1h–1h30',
    bestTime: 'Déjeuner ou dîner',
    estimatedCost: '12–20€ par personne',
    address: 'Marina da Calheta, Av. D. Manuel I, Calheta',
  },

]

export function getActivity(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug)
}

export function getActivitiesByType(type: ActivityType): Activity[] {
  return activities.filter((a) => a.type === type)
}
