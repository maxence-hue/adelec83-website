# ADELEC83 - Site Web Officiel

Site web moderne et performant pour ADELEC83, entreprise familiale spécialisée en électricité, climatisation et panneaux solaires photovoltaïques dans le Var.

## 🚀 Technologies Utilisées

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Déploiement**: Netlify

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🎨 Identité Visuelle

### Palette de Couleurs
- **Bleu électrique**: `#0640fb`
- **Bleu profond**: `#003afb`
- **Orange solaire**: `#ffa323`
- **Blanc**: `#ffffff`
- **Gris neutre**: `#f5f5f5`

### Typographie
- **Font principale**: Inter (Google Fonts)

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── TestimonialsSection.tsx
│   └── CTASection.tsx
├── pages/              # Pages principales
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── utils/              # Utilitaires
│   ├── constants.ts    # Données de l'entreprise
│   └── api.ts         # Appels API
├── styles/
│   └── globals.css    # Styles globaux
├── App.tsx            # Composant principal
└── main.tsx           # Point d'entrée
```

## 🌟 Fonctionnalités

### Pages
- ✅ **Accueil**: Hero, services, présentation, témoignages, CTA
- ✅ **Services**: Détail des 4 services principaux
- ✅ **À propos**: Histoire, équipe, valeurs, certifications
- ✅ **Contact**: Formulaire, coordonnées, carte
- ✅ **404**: Page d'erreur personnalisée

### Optimisations
- ✅ SEO optimisé (meta tags, Open Graph, Schema.org)
- ✅ Mobile-first responsive
- ✅ Animations fluides (Framer Motion)
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Performance optimisée

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local` à la racine :

```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_CONTACT_EMAIL=contact@adelec83.fr
```

### Netlify Forms

Le formulaire de contact utilise Netlify Forms. Pour l'activer :

1. Ajouter `data-netlify="true"` au formulaire (déjà fait)
2. Déployer sur Netlify
3. Les soumissions apparaîtront dans le dashboard Netlify

### Google Analytics

Ajouter dans `index.html` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🚀 Déploiement sur Netlify

### Option 1: Via GitHub

1. Pusher le code sur GitHub
2. Connecter le repo à Netlify
3. Configuration automatique via `netlify.toml`

### Option 2: Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Déployer
netlify deploy --prod
```

### Configuration Netlify

Le fichier `netlify.toml` est déjà configuré avec :
- Build command: `npm run build`
- Publish directory: `dist`
- Redirections SPA
- Headers de sécurité
- Cache optimisé

## 📝 Personnalisation

### Modifier les Informations de l'Entreprise

Éditer `src/utils/constants.ts` :

```typescript
export const COMPANY_INFO = {
  name: 'ADELEC83',
  phone: '+33 X XX XX XX XX',  // ⚠️ À MODIFIER
  email: 'contact@adelec83.fr',
  address: {
    street: 'Adresse exacte',  // ⚠️ À MODIFIER
    city: 'Solliès-Pont',
    // ...
  }
}
```

### Ajouter des Services

Dans `src/utils/constants.ts`, ajouter dans l'array `SERVICES` :

```typescript
{
  id: 'nouveau-service',
  title: 'Nouveau Service',
  shortDesc: 'Description courte',
  icon: 'IconName',
  color: 'blue',
  features: ['Feature 1', 'Feature 2']
}
```

### Modifier les Couleurs

Dans `tailwind.config.js` :

```javascript
colors: {
  'adelec-blue': '#0640fb',
  'adelec-deep-blue': '#003afb',
  'adelec-orange': '#ffa323',
  // Ajouter d'autres couleurs
}
```

## 🎯 TODO / Améliorations Futures

- [ ] Ajouter les vraies coordonnées téléphoniques
- [ ] Intégrer Google Maps avec l'adresse exacte
- [ ] Ajouter des images réelles (photos de chantiers, équipe)
- [ ] Créer une section Blog/Actualités
- [ ] Ajouter un système de prise de rendez-vous en ligne
- [ ] Intégrer WhatsApp Business
- [ ] Ajouter des études de cas / réalisations
- [ ] Créer des landing pages par service
- [ ] Ajouter un chatbot
- [ ] Implémenter le multilingue (FR/EN)

## 📊 Performance

Objectifs Lighthouse :
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔒 Sécurité

- Headers de sécurité configurés (CSP, X-Frame-Options, etc.)
- HTTPS forcé via Netlify
- Validation des formulaires côté client et serveur
- Protection CSRF

## 📱 Support Navigateurs

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)
- Mobile: iOS Safari, Chrome Android

## 📞 Support

Pour toute question technique :
- Email: dev@adelec83.fr
- Documentation: Ce README

## 📄 Licence

© 2025 ADELEC83. Tous droits réservés.
