export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export const sendContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Option 1: Netlify Forms (recommandé)
    const formData = new FormData()
    formData.append('form-name', 'contact')
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du formulaire')
    }

    return {
      success: true,
      message: 'Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.'
    }
  } catch (error) {
    console.error('Error sending form:', error)
    return {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.'
    }
  }
}

// Option 2: Netlify Function (pour email personnalisé)
export const sendEmailViaFunction = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Erreur lors de l\'envoi')
    }

    return {
      success: true,
      message: result.message || 'Message envoyé avec succès !'
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer.'
    }
  }
}

// Analytics tracking
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    })
  }
}
