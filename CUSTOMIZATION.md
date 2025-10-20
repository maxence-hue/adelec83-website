# 🎨 Guide de Personnalisation ADELEC83

## Informations à Modifier

### 1. Coordonnées de l'Entreprise

**Fichier**: `src/utils/constants.ts`

```typescript
export const COMPANY_INFO = {
  name: 'ADELEC83',
  phone: '+33 X XX XX XX XX', // ⚠️ À REMPLACER
  email: 'contact@adelec83.fr',
  address: {
    street: 'Adresse exacte', // ⚠️ À REMPLACER
    city: 'Solliès-Pont',
    postalCode: '83210',
    region: 'Var',
    country: 'France'
  },
  // ...
}
```

### 2. Réseaux Sociaux

**Fichier**: `src/utils/constants.ts`

```typescript
social: {
  facebook: 'https://www.facebook.com/adelec83', // ⚠️ Vérifier l'URL
  instagram: 'https://www.instagram.com/adelec83', // ⚠️ Vérifier l'URL
  linkedin: 'https://www.linkedin.com/company/adelec83' // ⚠️ Vérifier l'URL
}
```

### 3. Google Analytics

**Fichier**: `index.html` (avant `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // ⚠️ Remplacer par votre ID
</script>
```

## Ajouter du Contenu

### Ajouter un Service

**Fichier**: `src/utils/constants.ts`

```typescript
export const SERVICES = [
  // ... services existants
  {
    id: 'nouveau-service',
    title: 'Nouveau Service',
    shortDesc: 'Description courte du service',
    icon: 'IconName', // Zap, Wind, BatteryCharging, Sun, etc.
    color: 'blue', // ou 'orange'
    features: [
      'Fonctionnalité 1',
      'Fonctionnalité 2',
      'Fonctionnalité 3',
      // ...
    ]
  }
]
```

### Ajouter un Témoignage

**Fichier**: `src/utils/constants.ts`

```typescript
export const TESTIMONIALS = [
  // ... témoignages existants
  {
    name: 'Prénom N.',
    location: 'Ville',
    rating: 5,
    text: 'Texte du témoignage...'
  }
]
```

### Ajouter un Membre de l'Équipe

**Fichier**: `src/utils/constants.ts`

```typescript
export const TEAM = [
  // ... membres existants
  {
    name: 'Prénom Nom',
    role: 'Poste',
    description: 'Description du rôle'
  }
]
```

## Modifier le Design

### Changer les Couleurs

**Fichier**: `tailwind.config.js`

```javascript
colors: {
  'adelec-blue': '#0640fb',      // Bleu principal
  'adelec-deep-blue': '#003afb', // Bleu foncé
  'adelec-orange': '#ffa323',    // Orange
  'adelec-gray': '#f5f5f5',      // Gris clair
}
```

Puis utiliser dans les composants:
```jsx
<div className="bg-adelec-blue text-white">...</div>
```

### Modifier les Polices

**Fichier**: `index.html`

Changer le lien Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=VotrePolice:wght@300;400;600;700&display=swap" rel="stylesheet">
```

**Fichier**: `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['VotrePolice', 'system-ui', 'sans-serif'],
}
```

### Modifier les Animations

**Fichier**: `tailwind.config.js`

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  // Ajouter vos animations
}
```

## Ajouter des Images

### Logo de l'Entreprise

1. Placer le logo dans `public/logo.png`
2. Modifier `src/components/Header.tsx`:

```tsx
<img src="/logo.png" alt="ADELEC83" className="h-12" />
```

### Images de Services

1. Placer les images dans `public/images/services/`
2. Modifier `src/pages/Services.tsx`:

```tsx
<img 
  src="/images/services/electricite.jpg" 
  alt="Électricité"
  className="w-full h-full object-cover rounded-xl"
/>
```

### Favicon

Remplacer `public/favicon.svg` par votre propre favicon.

## Ajouter des Pages

### Créer une Nouvelle Page

1. **Créer le composant**: `src/pages/NouvellePages.tsx`

```tsx
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const NouvellePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="pt-32 pb-20">
      <div className="container-custom">
        <h1 className="section-title">Titre de la Page</h1>
        {/* Contenu */}
      </div>
    </section>
  )
}

export default NouvellePage
```

2. **Ajouter la route**: `src/App.tsx`

```tsx
import NouvellePage from './pages/NouvellePage'

// Dans les Routes:
<Route path="/nouvelle-page" element={<NouvellePage />} />
```

3. **Ajouter au menu**: `src/utils/constants.ts`

```typescript
export const NAV_LINKS = [
  // ... liens existants
  { path: '/nouvelle-page', label: 'Nouvelle Page' }
]
```

## Formulaire de Contact

### Changer le Service Email

**Option 1: Netlify Forms** (actuel, gratuit)
- Déjà configuré
- Les soumissions apparaissent dans Netlify Dashboard

**Option 2: Service Email Externe**

1. Créer un compte sur [SendGrid](https://sendgrid.com) ou [Brevo](https://brevo.com)
2. Créer une Netlify Function: `netlify/functions/send-email.js`

```javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async (event) => {
  const data = JSON.parse(event.body)
  
  const msg = {
    to: 'contact@adelec83.fr',
    from: 'noreply@adelec83.fr',
    subject: `Nouveau message de ${data.name}`,
    text: data.message,
    html: `<p><strong>De:</strong> ${data.name}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Téléphone:</strong> ${data.phone}</p>
           <p><strong>Service:</strong> ${data.service}</p>
           <p><strong>Message:</strong></p>
           <p>${data.message}</p>`
  }
  
  await sgMail.send(msg)
  return { statusCode: 200, body: 'OK' }
}
```

3. Modifier `src/utils/api.ts` pour utiliser la fonction

## Google Maps

### Intégrer la Carte

1. Obtenir une API Key sur [Google Cloud Console](https://console.cloud.google.com)

2. Modifier `src/pages/Contact.tsx`:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

Pour obtenir l'URL:
- Aller sur Google Maps
- Chercher votre adresse
- Cliquer sur "Partager" > "Intégrer une carte"
- Copier le code iframe

## SEO

### Modifier les Meta Tags

**Fichier**: `index.html`

```html
<title>Votre Titre | ADELEC83</title>
<meta name="description" content="Votre description optimisée SEO" />
<meta property="og:title" content="Votre Titre" />
<meta property="og:description" content="Votre description" />
```

### Ajouter des Pages au Sitemap

**Fichier**: `public/sitemap.xml`

```xml
<url>
  <loc>https://adelec83.fr/nouvelle-page</loc>
  <lastmod>2025-01-20</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

## Styles Personnalisés

### Ajouter des Classes CSS Personnalisées

**Fichier**: `src/styles/globals.css`

```css
@layer components {
  .ma-classe-custom {
    @apply bg-blue-500 text-white p-4 rounded-lg;
  }
}
```

Utilisation:
```tsx
<div className="ma-classe-custom">Contenu</div>
```

## Composants Réutilisables

### Créer un Nouveau Composant

**Fichier**: `src/components/MonComposant.tsx`

```tsx
import { ReactNode } from 'react'

interface MonComposantProps {
  title: string
  children: ReactNode
}

const MonComposant = ({ title, children }: MonComposantProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  )
}

export default MonComposant
```

Utilisation:
```tsx
<MonComposant title="Mon Titre">
  <p>Contenu du composant</p>
</MonComposant>
```

## Checklist de Personnalisation

- [ ] Remplacer le numéro de téléphone
- [ ] Remplacer l'adresse complète
- [ ] Vérifier/Ajouter les URLs des réseaux sociaux
- [ ] Ajouter le logo de l'entreprise
- [ ] Ajouter des photos réelles (équipe, chantiers)
- [ ] Configurer Google Analytics
- [ ] Intégrer Google Maps
- [ ] Personnaliser les témoignages
- [ ] Vérifier les horaires d'ouverture
- [ ] Ajouter des certifications/labels si manquants
- [ ] Personnaliser les couleurs si souhaité
- [ ] Tester tous les liens
- [ ] Vérifier l'orthographe et la grammaire
