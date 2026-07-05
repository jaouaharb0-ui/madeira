// Source unique de vérité pour les types d'activité :
// libellés, couleurs et icônes Lucide (tracés SVG inline).
// Icônes Lucide v1.23.0 (licence ISC) — inlinées pour rester self-contained.

export const typeLabels: Record<string, string> = {
  surf: 'Surf',
  rando: 'Randonnée',
  restaurant: 'Restaurant',
  viewpoint: 'Point de vue',
  swim: 'Baignade',
  village: 'Village',
}

export const typeColors: Record<string, string> = {
  surf: '#1E4A6B',
  rando: '#3B6B45',
  restaurant: '#E06B2C',
  viewpoint: '#7FA8BE',
  swim: '#3A7599',
  village: '#8B6F47',
}

// Tracés internes des icônes Lucide (le <svg> englobant est ajouté par typeIconSvg)
export const typeIconPaths: Record<string, string> = {
  surf:       '<path d="M2 12q2.5 2 5 0t5 0 5 0 5 0" /><path d="M2 19q2.5 2 5 0t5 0 5 0 5 0" /><path d="M2 5q2.5 2 5 0t5 0 5 0 5 0" />',
  rando:      '<path d="m8 3 4 8 5-5 5 15H2L8 3z" />',
  restaurant: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />',
  viewpoint:  '<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" /><path d="m13.56 11.747 4.332-.924" /><path d="m16 21-3.105-6.21" /><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" /><path d="m6.158 8.633 1.114 4.456" /><path d="m8 21 3.105-6.21" /><circle cx="12" cy="13" r="2" />',
  swim:       '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />',
  village:    '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />',
}

// Retourne un SVG Lucide inline complet pour un type donné.
// color par défaut = currentColor (hérite de la couleur du texte environnant).
export function typeIconSvg(
  type: string,
  { size = 16, color = 'currentColor' }: { size?: number; color?: string } = {},
): string {
  const paths = typeIconPaths[type] ?? ''
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}">${paths}</svg>`
}
