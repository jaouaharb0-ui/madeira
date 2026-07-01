# Madère 2026

Site de planification de voyage à Madère — 25 juillet au 1er août 2026.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:4321/madeira/

## Ajouter des activités

Édite `src/data/activities.ts` en suivant le modèle existant. Pour les photos, place les images dans `public/images/activities/[slug]/` et référence-les dans le champ `photos`.

## Mettre à jour le planning

Édite `src/data/planning.ts` en ajoutant des entrées `{ activitySlug, time, notes }` dans le champ `activities` de chaque jour.

---

## Déployer sur GitHub Pages

### 1. Créer le dépôt GitHub

```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/jaouaharb0-ui/madeira.git
git push -u origin main
```

### 2. Activer GitHub Pages

1. Va dans ton dépôt → **Settings** → **Pages**
2. Dans **Source**, sélectionne **GitHub Actions**
3. Sauvegarde

Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement à chaque push sur `main` et déploie le site sur :

**https://jaouaharb0-ui.github.io/madeira/**

### 3. Si tu changes le nom du dépôt

Mets à jour ces deux lignes dans `astro.config.mjs` :

```js
site: 'https://jaouaharb0-ui.github.io',
base: '/NOM-DU-NOUVEAU-REPO',
```

Puis commit et push — le déploiement se relance automatiquement.

---

## Stack

- [Astro](https://astro.build) — framework statique
- [Tailwind CSS v4](https://tailwindcss.com) — styles utilitaires
- [Leaflet](https://leafletjs.com) + OpenStreetMap — carte interactive gratuite
- GitHub Pages — hébergement gratuit
