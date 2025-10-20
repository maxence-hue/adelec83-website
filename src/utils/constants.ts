export const COMPANY_INFO = {
  name: 'ADELEC83',
  fullName: 'ADELEC83 - Électricité, Climatisation & Panneaux Solaires',
  tagline: 'Entreprise familiale du Var depuis 2005',
  description: 'Spécialiste de l\'électricité, climatisation et énergie solaire',
  founded: 2005,
  location: 'Solliès-Pont, Var (83)',
  phone: '+33 4 94 91 27 53', // À remplacer
  email: 'contact@adelec83.com',
  address: {
    street: '1 Chemin de l enclos',
    city: 'Solliès-Pont',
    postalCode: '83210',
    region: 'Var',
    country: 'France'
  },
  hours: {
    weekdays: '8h00 - 18h00',
    weekend: 'Fermé'
  },
  social: {
    facebook: 'https://www.facebook.com/adelec83',
    instagram: 'https://www.instagram.com/adelec83',
    linkedin: 'https://www.linkedin.com/company/adelec83'
  }
}

export const SERVICES = [
  {
    id: 'electricite',
    title: 'Électricité Générale',
    shortDesc: 'Installations, rénovations, dépannages et mises aux normes',
    icon: 'Zap',
    color: 'blue',
    features: [
      'Installation électrique complète',
      'Rénovation et mise aux normes',
      'Dépannage 7j/7',
      'Tableaux électriques',
      'Éclairage intérieur et extérieur',
      'Prises et interrupteurs'
    ]
  },
  {
    id: 'climatisation',
    title: 'Climatisation Réversible',
    shortDesc: 'Systèmes split et gainables - Daikin, Mitsubishi, Atlantic',
    icon: 'Wind',
    color: 'blue',
    features: [
      'Climatisation réversible',
      'Systèmes split muraux',
      'Systèmes gainables',
      'Pompes à chaleur air/air',
      'Entretien et maintenance',
      'Marques premium (Daikin, Mitsubishi, Atlantic)'
    ]
  },
  {
    id: 'bornes-recharge',
    title: 'Bornes de Recharge IRVE',
    shortDesc: 'Installation pour véhicules électriques - Aides ADVENIR',
    icon: 'BatteryCharging',
    color: 'orange',
    features: [
      'Installation borne de recharge',
      'Certification IRVE',
      'Aides financières ADVENIR',
      'Bornes intelligentes',
      'Gestion de charge',
      'Maintenance et SAV'
    ]
  },
  {
    id: 'panneaux-solaires',
    title: 'Panneaux Solaires Photovoltaïques',
    shortDesc: 'Autoconsommation, revente totale, suivi de production',
    icon: 'Sun',
    color: 'orange',
    features: [
      'Installation photovoltaïque',
      'Autoconsommation avec batterie',
      'Revente totale ou surplus',
      'Suivi de production',
      'Certification RGE QualiPV',
      'Garanties constructeur'
    ]
  }
]

export const CERTIFICATIONS = [
  {
    name: 'RGE QualiPV',
    description: 'Reconnu Garant de l\'Environnement pour le photovoltaïque'
  },
  {
    name: 'IRVE',
    description: 'Infrastructure de Recharge pour Véhicules Électriques'
  },
  {
    name: 'QualiClimafroid',
    description: 'Qualification pour les installations de climatisation'
  }
]

export const STATS = [
  {
    value: '2005',
    label: 'Année de création'
  },
  {
    value: '10+',
    label: 'Collaborateurs'
  },
  {
    value: '1000+',
    label: 'Clients satisfaits'
  },
  {
    value: '3',
    label: 'Départements couverts'
  }
]

export const TEAM = [
  {
    name: 'Daniel Alehause',
    role: 'Fondateur & Gérant',
    description: 'Expert en électricité depuis plus de 20 ans'
  },
  {
    name: 'Maxence Alehause',
    role: 'Responsable Photovoltaïque',
    description: 'Spécialiste en énergie solaire et nouvelles technologies'
  }
]

export const COVERAGE_AREAS = [
  'Var (83)',
  'Bouches-du-Rhône (13)',
  'Alpes-Maritimes (06)'
]

export const VALUES = [
  {
    title: 'Expertise Familiale',
    description: 'Savoir-faire transmis depuis 2005, entreprise familiale à taille humaine'
  },
  {
    title: 'Qualité & Certification',
    description: 'Certifications RGE QualiPV, IRVE et QualiClimafroid pour votre sérénité'
  },
  {
    title: 'Réactivité',
    description: 'Intervention rapide et soignée dans tout le Var et départements limitrophes'
  },
  {
    title: 'Durabilité',
    description: 'Solutions économiques et écologiques pour un avenir énergétique responsable'
  }
]

export const TESTIMONIALS = [
  {
    name: 'Jean-Pierre M.',
    location: 'Toulon',
    rating: 5,
    text: 'Installation de panneaux solaires impeccable. Équipe professionnelle et à l\'écoute. Je recommande vivement ADELEC83 !'
  },
  {
    name: 'Sophie L.',
    location: 'Hyères',
    rating: 5,
    text: 'Climatisation installée rapidement et proprement. Excellent rapport qualité-prix. Merci à toute l\'équipe !'
  },
  {
    name: 'Marc D.',
    location: 'La Seyne-sur-Mer',
    rating: 5,
    text: 'Borne de recharge installée en une journée. Travail soigné et conseils précieux. Très satisfait !'
  }
]

export const NAV_LINKS = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' }
]
