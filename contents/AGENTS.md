# Articles du blog

## Overview

Chaque fichier `.mdx` de ce dossier est un article du blog. `src/lib/posts.ts` lit le dossier au build, valide le frontmatter avec zod, et `src/app/blog/[slug]/page.tsx` rend l'article avec next-mdx-remote et Shiki.

## Key files

| File | Owns |
|---|---|
| `src/lib/posts.ts` | lecture, schéma du frontmatter, tri par date, filtre `published` |
| `src/app/blog/[slug]/page.tsx` | rendu MDX, plugins remark et rehype, pages statiques |
| `src/components/mdx/pre.tsx` | blocs de code avec bouton copier |
| `src/components/mdx/mdx-image.tsx` | images via `next/image` |

## Conventions

- Nom de fichier: `NNN-slug.mdx` (ex: `003-mon-article.mdx`). Le préfixe numérique est retiré, l'URL devient `/blog/mon-article`. Deux fichiers avec le même slug: un seul reste accessible (un avertissement s'affiche).
- Frontmatter attendu:
  - `title`: entre 24 et 45 caractères
  - `description`: au moins 65 caractères
  - `date`: `AAAA-MM-JJ`
  - `published`: `true` pour publier (faux par défaut)
  - `category`: tableau de chaînes libres, ex `["DevOps", "Docker"]`
- Rédige en français. Le GFM marche (tableaux, cases à cocher).
- Surlignage dans les blocs de code avec les notations Shiki: `// [!code highlight]` et `// [!code word:mot]`.

## Gotchas

- Un frontmatter invalide ne casse pas le build: l'article disparaît en silence, avec juste un `console.error` dans les logs. Si un article manque, regarde la sortie du build.
- Un article avec `published: false` reste visible avec `bun dev`, mais pas en production.
- Les images passent par `next/image` en mode `fill`. Une image externe exige une entrée `images.remotePatterns` dans `next.config.ts` (vide pour l'instant); place sinon l'image dans `public/` et utilise un chemin `/mon-image.png`.
- Il n'y a pas de liste fixe de catégories: le filtre du blog les tire des articles eux mêmes.

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
