# 🚀 Guide de Déploiement ADELEC83

## Déploiement sur Netlify

### Option 1: Déploiement via GitHub (Recommandé)

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Site ADELEC83"
   git branch -M main
   git remote add origin https://github.com/votre-username/adelec83-website.git
   git push -u origin main
   ```

2. **Connecter à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer sur "Add new site" > "Import an existing project"
   - Choisir GitHub et sélectionner votre repository
   - Configuration automatique détectée via `netlify.toml`
   - Cliquer sur "Deploy"

3. **Configuration du domaine**
   - Dans Netlify Dashboard > Domain settings
   - Ajouter votre domaine personnalisé (adelec83.fr)
   - Suivre les instructions pour configurer les DNS

### Option 2: Déploiement via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialiser le site
netlify init

# Build local
npm run build

# Déployer en production
netlify deploy --prod
```

### Option 3: Drag & Drop

1. Build le projet localement:
   ```bash
   npm run build
   ```

2. Aller sur [app.netlify.com/drop](https://app.netlify.com/drop)

3. Glisser-déposer le dossier `dist/`

## Configuration Post-Déploiement

### 1. Variables d'Environnement

Dans Netlify Dashboard > Site settings > Environment variables:

```
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_CONTACT_EMAIL=contact@adelec83.fr
```

### 2. Netlify Forms

Le formulaire de contact est déjà configuré. Les soumissions apparaîtront dans:
- Netlify Dashboard > Forms

Pour recevoir des notifications email:
- Forms > Form notifications > Add notification
- Choisir "Email notification"

### 3. Domaine Personnalisé

1. Dans Netlify Dashboard > Domain management
2. Add custom domain: `adelec83.fr`
3. Configurer les DNS chez votre registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: votre-site.netlify.app
   ```

### 4. SSL/HTTPS

- Netlify active automatiquement HTTPS via Let's Encrypt
- Attendre quelques minutes après la configuration DNS

### 5. Google Analytics

1. Créer une propriété GA4 sur [analytics.google.com](https://analytics.google.com)
2. Copier l'ID de mesure (G-XXXXXXXXXX)
3. Ajouter dans les variables d'environnement Netlify
4. Redéployer le site

## Optimisations Production

### Performance

Le site est déjà optimisé avec:
- ✅ Code splitting automatique (Vite)
- ✅ Minification CSS/JS
- ✅ Compression Gzip/Brotli (Netlify)
- ✅ Cache headers configurés
- ✅ Lazy loading images

### SEO

Vérifier après déploiement:
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Vérifier les meta tags avec [metatags.io](https://metatags.io)
- [ ] Tester avec Lighthouse (Chrome DevTools)
- [ ] Vérifier la vitesse avec [PageSpeed Insights](https://pagespeed.web.dev)

### Monitoring

1. **Google Search Console**
   - Ajouter la propriété adelec83.fr
   - Soumettre le sitemap: `https://adelec83.fr/sitemap.xml`

2. **Netlify Analytics** (optionnel, payant)
   - Dashboard > Analytics > Enable

3. **Uptime Monitoring**
   - Utiliser [UptimeRobot](https://uptimerobot.com) (gratuit)
   - Ou Netlify Status (inclus)

## Mises à Jour

### Workflow de développement

```bash
# Créer une branche
git checkout -b feature/nouvelle-fonctionnalite

# Faire vos modifications
# ...

# Commit
git add .
git commit -m "Description des changements"

# Push
git push origin feature/nouvelle-fonctionnalite

# Créer une Pull Request sur GitHub
# Netlify créera automatiquement un deploy preview

# Après validation, merger dans main
# Le site sera automatiquement déployé en production
```

### Deploy Previews

Netlify crée automatiquement des previews pour:
- Chaque Pull Request
- Chaque branche

URL format: `https://deploy-preview-XX--votre-site.netlify.app`

## Rollback

En cas de problème:

1. **Via Netlify Dashboard**
   - Deploys > Cliquer sur un deploy précédent
   - "Publish deploy"

2. **Via CLI**
   ```bash
   netlify deploy --prod --alias=rollback
   ```

## Maintenance

### Mises à jour des dépendances

```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour
npm update

# Ou pour les mises à jour majeures
npm install react@latest react-dom@latest
```

### Backup

- Le code est sauvegardé sur GitHub
- Netlify garde l'historique des deploys (30 jours gratuit)
- Exporter régulièrement la base de données des formulaires

## Troubleshooting

### Le site ne se charge pas

1. Vérifier les logs de build: Netlify Dashboard > Deploys > Deploy log
2. Vérifier la console du navigateur (F12)
3. Vérifier que le dossier `dist/` contient bien les fichiers

### Formulaire ne fonctionne pas

1. Vérifier que `data-netlify="true"` est présent dans le form
2. Vérifier les soumissions: Dashboard > Forms
3. Tester avec un email de test

### Erreurs 404

1. Vérifier que le fichier `netlify.toml` contient les redirections
2. Vérifier que le routing React fonctionne localement

### Performance lente

1. Tester avec Lighthouse
2. Optimiser les images (WebP, compression)
3. Vérifier le cache CDN Netlify

## Support

- Documentation Netlify: [docs.netlify.com](https://docs.netlify.com)
- Support Netlify: [answers.netlify.com](https://answers.netlify.com)
- React: [react.dev](https://react.dev)
- Vite: [vitejs.dev](https://vitejs.dev)

## Checklist Pré-Déploiement

- [ ] Remplacer le numéro de téléphone dans `src/utils/constants.ts`
- [ ] Ajouter l'adresse exacte dans `src/utils/constants.ts`
- [ ] Configurer Google Analytics
- [ ] Ajouter des images réelles (logo, photos)
- [ ] Tester tous les liens
- [ ] Tester le formulaire de contact
- [ ] Vérifier le responsive mobile
- [ ] Tester sur différents navigateurs
- [ ] Configurer le domaine adelec83.fr
- [ ] Soumettre le sitemap à Google
- [ ] Configurer les notifications email pour les formulaires
