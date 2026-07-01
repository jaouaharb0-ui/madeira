# CLAUDE.md — Madère 2026

Site voyage statique : planification collaborative d'un trip à Madère
(25 juillet – 1er août 2026) pour 2 personnes. Déployé sur GitHub Pages.

## Stack

- **Astro v5** — site statique, pas d'adaptateur SSR
- **Tailwind CSS v4** — via plugin Vite `@tailwindcss/vite`, config dans `src/styles/globals.css` avec `@theme {}`. **Pas de `tailwind.config.ts`**
- **Supabase** (`@supabase/supabase-js`) — persistance et realtime côté client uniquement
- **Leaflet 1.9.4** — chargé via CDN (`is:inline`), pas via npm
- **TypeScript strict**

## Commandes

```bash
npm run dev      # http://localhost:4321/madeira/
npm run build    # build dans dist/
npm run preview  # preview du build
```

## Déploiement

GitHub Actions → GitHub Pages. Repo : `jaouaharb0-ui/madeira`.
Push sur `main` déclenche le workflow `.github/workflows/deploy.yml`.

**Secrets GitHub requis** (Settings → Secrets → Actions) :
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

URL prod : `https://jaouaharb0-ui.github.io/madeira/`

## Variables d'environnement

Fichier `.env` (gitignored) — voir `.env.example` :
```
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
```
Préfixe `PUBLIC_` obligatoire pour l'exposition navigateur via `import.meta.env`.

## Architecture — règles importantes

### Site statique uniquement
Tous les appels Supabase sont **côté client**, dans des `<script>` Vite-processed (module scripts). Jamais dans le frontmatter Astro (build time).

### Base URL
`astro.config.mjs` : `base: '/madeira/'` (slash final obligatoire).
`import.meta.env.BASE_URL` retourne `/madeira/`. Sans le slash final, `${base}map/` devient `/madeiramap/`.

### CSS scoping
Le CSS dans `<style>` est scopé par Astro (hash sur les éléments). Les éléments injectés via `innerHTML` en JS **ne reçoivent pas ce hash** → utiliser `:global(.classe)` pour les styles de ces éléments. Ne pas utiliser `<style is:global>` (fuite vers toutes les pages).

### Leaflet (map.astro)
Trois scripts distincts :
1. `<link>` CDN + `<script src="..." is:inline>` — charge `window.L`
2. `<script define:vars={...}>` — logique carte + filtres (inline, pas d'`import`)
3. `<script>` module — Supabase ; communique via `CustomEvent('assignments-ready')` + `CustomEvent('assignment-updated')`

## Données

### `src/data/trip.ts`
- `Day` : union de 8 string literals (`'sat-25'` … `'sat-01'`)
- `dayLabels: Record<Day, DayLabel>` avec `{ short, long, date, dayNumber }`
- `orderedDays: Day[]`

### `src/data/activities.ts`
- 9 activités. **`day` n'est plus dans ce type** — il est dans Supabase `assignments`.
- Types : `surf | rando | restaurant | viewpoint | swim | other`

### Supabase — table `assignments`
```sql
activity_slug text PRIMARY KEY
day           text        -- Day | null
done          boolean     -- default false
updated_at    timestamptz -- auto-updated via trigger
```
RLS ouverte (anon, pas d'auth). Realtime activé.

### `src/lib/assignments.ts`
Store mémoire `Map<slug, Assignment>` + fonctions :
- `getAssignments()` — charge depuis Supabase, hydrate le store
- `setDay(slug, day | null)` — upsert
- `toggleDone(slug)` — upsert
- `subscribeToChanges(callback)` — realtime postgres_changes

## Pages

| Page | Rôle |
|------|------|
| `index.astro` | Hero + grille 9 activités (flip cards + day picker) + agenda J1–J8 |
| `activities/index.astro` | Liste filtrée par type |
| `activities/[slug].astro` | Fiche détail |
| `map.astro` | Carte Leaflet plein écran, filtres type + jour, badges pins |
| `planning.astro` | Planning J1–J8 depuis Supabase, checkboxes fait, réassignation jour |

## Design system

Palette **Brume Atlantique** — variables clés dans `src/styles/globals.css` :
- `--color-ocean` `#1E4A6B` — bleu principal
- `--color-basalt` `#161A1D` — texte foncé
- `--color-stone` `#E8E4DD` — fond clair
- `--color-paradise` `#E06B2C` — accent orange
- `--color-laurel` `#3B6B45` — vert (checkboxes "fait")
- Fonts : Cormorant Garamond (display) + Plus Jakarta Sans (body)
