# Portfolio Braharim

Portfolio personnel et blog MDX de Braharim (braharim.dev), en français.

## Stack

- **Language / Runtime**: TypeScript 5 (strict), React 19.2, Bun en CI et dans le Dockerfile
- **Framework**: Next.js 16 (App Router, React Server Components)
- **Key dependencies**: Tailwind CSS 4, shadcn (style `base-nova`, bâti sur `@base-ui/react`, pas Radix), nuqs (état dans l'URL), next-mdx-remote + Shiki (articles), zod + gray-matter (frontmatter)
- **Package manager**: bun (`bun.lock` est le seul lockfile)

## Build approach

<TBD, set by /scope>

## Commands

```bash
# Install
bun install --frozen-lockfile

# Dev server
bun dev

# Build
bun run build

# Lint et format (écrit les corrections dans ./src)
bun run lint

# Ce que la CI vérifie (bloquant)
bunx biome check ./src && bunx tsc --noEmit

# Test
# aucun test pour l'instant
```

## Specs

Stored in `docs/specs/`. Format: `docs/specs/NNNN-title.md`.

## Rules

- Imports via l'alias `@/*` (vers `src/*`). Fichiers en kebab case, composants exportés par nom (sauf les `page.tsx` et `layout.tsx`, exportés par défaut).
- Server Components par défaut. Mets `"use client"` seulement sur le composant qui a besoin d'interactivité. Les composants client propres à une route vivent dans `_components/` (voir `src/app/blog/_components/`).
- Composants UI: ajoute les avec `bunx shadcn add`, ne les réécris pas à la main. Biome ignore `src/components/ui`. Base UI compose avec la prop `render` (pas `asChild`); ajoute `nativeButton={false}` quand un `Button` rend un `Link`.
- Classes Tailwind: combine avec `cn()` de `@/lib/utils`. Biome impose l'ordre des classes (`useSortedClasses`), donc lance `bun run lint` avant de pousser.
- Couleurs via les tokens shadcn (`bg-background`, `text-muted-foreground`, `text-primary`), définis dans `src/app/globals.css`. Le mode sombre passe par la classe `.dark` (next-themes).
- Filtres du blog dans l'URL avec nuqs et `shallow: false`, pour que la page serveur se recalcule. Quand un filtre change, remets `page` à 1.
- Les parsers nuqs existent deux fois: dans `src/lib/search-params.ts` (serveur) et dans chaque composant client. Garde les mêmes clés et valeurs par défaut des deux côtés.
- URL publique du site: `process.env.NEXT_PUBLIC_SITE_URL`, avec repli `https://braharim.dev`.
- Dates affichées avec `formatDate()` (locale `fr-FR` par défaut).

## Agent skills

Declined: Agent Skills et serveurs MCP pour next.js, tailwindcss, shadcn, base-ui, nuqs, mdx, biome, vercel

## Context files

- [contents/AGENTS.md](contents/AGENTS.md): écrire et publier un article de blog (frontmatter, nommage, images, code)

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
