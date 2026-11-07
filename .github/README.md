# Configuration CI/CD - Portfolio

Ce projet utilise GitHub Actions pour automatiser les workflows de déploiement et de qualité du code.

## Workflows Configurés

### 1. CI/CD Pipeline (`ci.yml`)
Exécuté à chaque push et pull request sur `master`/`main`.

**Jobs:**
- **Lint & Type Check**: Vérifie la qualité du code avec Biome et TypeScript
- **Build**: Compile le projet Next.js
- **SEO Check**: Vérifie l'accessibilité du sitemap.xml et robots.txt
- **Notify**: Notification de succès

### 2. Deploy to Production (`deploy.yml`)
Déploiement automatique sur Vercel à chaque push sur `master`/`main`.

**Prérequis:**
Ajouter les secrets suivants dans GitHub → Settings → Secrets and variables → Actions:
- `VERCEL_TOKEN`: Token d'API Vercel
- `VERCEL_ORG_ID`: ID de votre organisation Vercel
- `VERCEL_PROJECT_ID`: ID du projet Vercel

## Obtenir les secrets Vercel

1. **VERCEL_TOKEN**:
   ```bash
   npx vercel login
   npx vercel whoami
   # Dans les settings Vercel → Tokens
   ```

2. **VERCEL_ORG_ID et VERCEL_PROJECT_ID**:
   ```bash
   npx vercel link
   cat .vercel/project.json
   ```

## Configuration locale

Pour tester en local avant le déploiement:

```bash
# Installer les dépendances
bun install --frozen-lockfile

# Vérifier le code
bun run lint

# Build
bun run build

# Démarrer le serveur
bun run start
```

## Variables d'environnement

Créer un fichier `.env.local` pour le développement local:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

En production, cette variable est définie dans les workflows GitHub Actions et dans Vercel.

## Status Badges

Ajouter ces badges au README principal pour montrer le status des workflows:

```markdown
![CI/CD Pipeline](https://github.com/Raharimanana-BJD/portfolio/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/Raharimanana-BJD/portfolio/actions/workflows/deploy.yml/badge.svg)
```
