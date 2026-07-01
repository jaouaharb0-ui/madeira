# Direction Visuelle — Voyage à Madère

---

## ADN du site de référence (ce qui le rend non-générique)

Avant de définir notre propre direction, voici les principes qui font que le site d'Escapade *fonctionne* visuellement — les choses qu'on garde, pas les choix qu'on copie.

1. **Un héros comme source de lumière, pas comme fond d'écran.** Le dégradé simule un soleil qui irradie depuis le centre, ce qui crée de la profondeur atmosphérique au lieu d'un simple aplat de couleur.

2. **Typographie de magazine de voyage haut de gamme.** Un très grand serif expressif (176px, tracking négatif serré) avec la dernière ligne en italique — l'italique porte l'émotion, le romain porte l'information.

3. **Palette "matière naturelle".** Les tokens s'appellent `paper`, `ink`, `ochre`, `clay` — chaque couleur évoque quelque chose de tangible, pas "primary-500". C'est ce naming qui force la cohérence.

4. **Une seule couleur froide au milieu du chaud.** Le `--sea` (#2F8A86, un teal) tranche dans une palette entièrement chaude (ochre, terracotta, gold) — c'est ce contraste unique qui empêche la palette de sembler monotone.

5. **Blanc-crème au lieu de blanc pur.** Le fond `#F3E7D3` a la chaleur d'une vieille page — jamais agressif, jamais neutre.

6. **Générosité de l'espace.** Padding vertical de 108px sur les sections intro, max-width 1240px, gouttières fluides avec `clamp()` — le contenu respire.

---

## Notre direction : Madère

Madère n'est pas la Provence ni le Maroc. C'est l'Atlantique sauvage : falaises de basalte noir qui plongent dans une mer sombre et agitée, forêt laurisylve préhistorique (inscrite à l'UNESCO) où la lumière filtre comme dans une cathédrale végétale, fleurs tropicales violentes (strelitzias orange-bleu, hortensias), et une lumière atlantique qui n'est pas la lumière méditerranéenne — plus douce, plus argentée, plus mystérieuse.

**Ce qu'on garde de l'ADN :** la structure (serif display + sans-serif corps, fond "papier", espace généreux, tokens nommés par matière, le contraste inattendu chaud/froid dans la palette).

**Ce qu'on change :** tout le reste, pour que le design soit inséparable de l'île.

---

## Typographie

### Police d'affichage : **Cormorant Garamond**
*(Google Fonts, gratuit, variable avec axes optiques)*

Cormorant a la même énergie éditoriale que Fraunces (grandes tailles, beaux italiques, caractère fort) mais son origine Garamond lui donne quelque chose de plus ancré, de plus atlantique — on pense aux cartes de navigation anciennes, pas aux vitrines de mode. À grande taille avec un tracking serré, elle est spectaculaire ; en italique, elle est presque poétique. Elle n'est pas Fraunces — elle a une personnalité distincte.

### Police de corps : **Plus Jakarta Sans**
*(Google Fonts, gratuit)*

Là où Hanken Grotesk (la référence) est très géométrique et proche de l'interface, Plus Jakarta Sans a une légère personnalité — ses formes sont légèrement plus organiques, ses jambages un peu plus vifs. Elle reste parfaitement lisible pour du texte long mais elle a du caractère. Différente de Hanken sans être incompatible avec l'esprit général.

### Échelle typographique

| Rôle | Taille | Graisse | Style |
|------|--------|---------|-------|
| Titre héros | clamp(80px, 12vw, 160px) | 600 | Italic pour le dernier mot |
| Titre de section | clamp(36px, 5vw, 64px) | 500 | |
| Label de section (eyebrow) | 11px | 500 | Uppercase, tracking +0.15em |
| Corps | 17px / line-height 1.7 | 300–400 | |
| Caption / info pratique | 13px | 400 | |

---

## Deux variations de palette

---

### Variation A — "Brume Atlantique"

> L'océan vu du bord de la falaise : profond, mouvant, plus sombre que ce qu'on imaginait. La lumière n'est pas chaude — elle est argentée et légèrement brumeuse. Et puis, sur le bord du chemin, une strelitzia orange qui tranche sur le basalte gris.

**Le pari esthétique** : utiliser une palette *froide* pour un site de voyage, quand tous les sites de voyage sont chauds. Madère n'est pas le Maroc — sa lumière atlantique mérite d'être assumée.

```
/* Fonds */
--stone:        #E8E4DD    /* calcaire volcanique, fond principal — légèrement plus froid que le cream de référence */
--stone-deep:   #D8D2C8    /* fond de section secondaire */
--stone-card:   #EFEAE3    /* fond des cartes */

/* Texte */
--basalt:       #161A1D    /* basalte noir, légèrement bleuté — jamais pur #000 */
--basalt-soft:  #3A4248    /* texte corps */
--basalt-faint: #7A8A92    /* captions, labels */

/* Palette Océan */
--ocean:        #1E4A6B    /* Atlantique profond — couleur dominante des accents */
--ocean-mid:    #3A7599    /* variation claire */
--mist:         #7FA8BE    /* brume côtière — utilisé pour les états hover, les fonds légers */

/* Accents chauds (le contraste inattendu) */
--paradise:     #E06B2C    /* fleur de strelitzia orange — le rouge-orangé vif qui tranche */
--paradise-deep:#B84E1A    /* version foncée pour hover/active */

/* Nature */
--laurel:       #3B6B45    /* forêt laurisylve, utilisé avec parcimonie */
```

**Héros** : dégradé de `#0D2A3D` (minuit atlantique) → `#1E4A6B` (bleu profond) → `#3A7599` (horizon argenté) — une source de lumière froide venant du centre, comme le soleil à travers la brume.

**Énergie** : sauvage, cinématographique, hivernale-estivale à la fois. Proche de l'identité visuelle d'une compagnie maritime ou d'un guide de randonnée de prestige.

---

### Variation B — "Laurisylve"

> La forêt préhistorique, les fougères géantes, la lumière dorée qui filtre à travers le couvert végétal comme dans une cathédrale. Le basalte sombre sous les pieds, la mousse partout, l'humidité. Et en sortant de la forêt, la lumière atlantique, dorée, chaude, aveuglante.

**Le pari esthétique** : assumer un fond presqu'aussi sombre que du charbon pour les sections-clé — là où la référence reste dans le clair, on ose quelques zones profondes, comme entrer sous le couvert de la forêt.

```
/* Fonds */
--humus:        #EAE4D6    /* humus chaud, fond principal — entre cream et vert très pâle */
--humus-deep:   #D9D1C0    /* fond secondaire */
--humus-card:   #F0EBE0    /* fond des cartes */

/* Forêt profonde (les zones sombres) */
--selva:        #1A2218    /* nuit dans la forêt — presque noir avec tonalité verte */
--selva-soft:   #3A4A36    /* texte sur fond sombre */
--selva-on:     #C8D4BC    /* texte clair sur fond selva */

/* Texte sur fond clair */
--bark:         #201C15    /* écorce, pour le texte principal — très légèrement chaud */
--bark-soft:    #4D4438    /* texte corps */
--bark-faint:   #8A7D6E    /* captions */

/* Végétation */
--fern:         #4A7A52    /* fougère, accent vert principal */
--moss:         #2D5435    /* mousse, version foncée */
--lichen:       #7A9E6A    /* lichen, version claire */

/* Lumière atlantique (le contraste inattendu) */
--glow:         #C8841E    /* lumière qui perce le couvert — ambre atlantique */
--glow-deep:    #A0621A    /* version foncée */
```

**Héros** : dégradé de `#1A2218` (profond forêt) → `#2D5435` (vert sombre) → `#4A7A52` (fougère), avec un point lumineux ambre en bas-centre simulant la lumière qui sort de la forêt vers la mer.

**Énergie** : luxuriante, mystérieuse, comme un documentaire nature BBC. Ancré dans ce qui rend Madère unique (la Laurisylve est inscrite à l'UNESCO et on ne la retrouve nulle part ailleurs).

---

## Ce qui est commun aux deux variations

### Tokens de mise en page
```css
--gutter:   clamp(1.25rem, 5vw, 4rem)
--maxw:     1280px
--radius:   20px
--shadow:   0 24px 60px -30px currentColor  /* à adapter selon la variation */
```

### Composants signature

**L'eyebrow label** : texte uppercase 11px, tracking écarté, précédé d'un tiret long (—). Identifie chaque section sans recourir à des numéros (le contenu n'est pas séquentiel, donc les numéros n'encoderaient rien de vrai).

**La carte activité** : photo full-bleed avec un gradient en bas pour le texte, radius 20px, ombre profonde. Au hover : légère élévation (transform: translateY(-4px)) + l'accent couleur apparaît sur le bord gauche comme une liseré.

**La mini-carte** : intégrée dans la fiche activité avec un marker personnalisé (SVG, couleur de l'accent de la variation choisie).

---

## À choisir

**Réponds simplement "A" ou "B"** (ou "A avec telle modification" / "B mais...").

Ensuite j'enchaîne sur le plan technique complet (arborescence, dépendances, ordre de construction) → deuxième STOP avant de commencer à coder.
