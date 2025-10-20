import { useState, useEffect } from 'react'

interface HomeContent {
  hero: {
    title: string
    subtitle: string
    buttonText: string
    backgroundImage?: string
  }
  about: {
    title: string
    description: string
  }
  stats: Array<{
    value: string
    label: string
  }>
}

interface GeneralSettings {
  companyName: string
  tagline: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    postalCode: string
    region: string
  }
  hours: {
    weekdays: string
    weekend: string
  }
  social: {
    facebook: string
    instagram: string
    linkedin: string
  }
}

interface BlogPost {
  title: string
  date: string
  author: string
  image: string
  description: string
  category: string
  tags: string[]
  body: string
  published: boolean
  slug: string
}

interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  photo?: string
  service: string
  date: string
  featured: boolean
}

// Hook pour charger le contenu de la page d'accueil
export const useHomeContent = () => {
  const [content, setContent] = useState<HomeContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/content/pages/home.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load home content')
        return res.json()
      })
      .then(data => {
        setContent(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading home content:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { content, loading, error }
}

// Hook pour charger les paramètres généraux
export const useGeneralSettings = () => {
  const [settings, setSettings] = useState<GeneralSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/content/settings/general.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load settings')
        return res.json()
      })
      .then(data => {
        setSettings(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading settings:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { settings, loading, error }
}

// Hook pour charger les articles de blog
export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // En production, vous devrez générer un index des articles
    // Pour l'instant, on retourne un tableau vide
    // TODO: Implémenter la génération d'index des articles au build
    setLoading(false)
  }, [])

  return { posts, loading, error }
}

// Hook pour charger les témoignages
export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // TODO: Implémenter la génération d'index des témoignages au build
    setLoading(false)
  }, [])

  return { testimonials, loading, error }
}
