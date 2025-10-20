import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import { COMPANY_INFO, SERVICES } from '../utils/constants'
import { sendContactForm, ContactFormData } from '../utils/api'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendContactForm(data)
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        reset()
      } else {
        setSubmitStatus({ type: 'error', message: result.message })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-adelec-blue to-adelec-deep-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-gray-200">
              Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Demande de Devis Gratuit
                </h2>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Le nom est requis' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-adelec-blue focus:border-transparent transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Jean Dupont"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-adelec-blue focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="jean.dupont@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { 
                        required: 'Le téléphone est requis',
                        pattern: {
                          value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
                          message: 'Numéro de téléphone invalide'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-adelec-blue focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      {...register('service', { required: 'Veuillez sélectionner un service' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-adelec-blue focus:border-transparent transition-all ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Sélectionnez un service</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Autre">Autre demande</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { required: 'Le message est requis' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-adelec-blue focus:border-transparent transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={<Send size={20} />}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par ADELEC83 concernant votre demande.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Coordonnées
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-adelec-gray transition-colors group"
                  >
                    <Phone className="text-adelec-blue flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Téléphone</div>
                      <div className="text-gray-600">{COMPANY_INFO.phone}</div>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-adelec-gray transition-colors group"
                  >
                    <Mail className="text-adelec-blue flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600 break-all">{COMPANY_INFO.email}</div>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 p-4 rounded-lg">
                    <MapPin className="text-adelec-blue flex-shrink-0" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Adresse</div>
                      <div className="text-gray-600">
                        {COMPANY_INFO.address.city}<br />
                        {COMPANY_INFO.address.postalCode}, {COMPANY_INFO.address.region}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg">
                    <Clock className="text-adelec-blue flex-shrink-0" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Horaires</div>
                      <div className="text-gray-600">
                        Lundi - Vendredi : {COMPANY_INFO.hours.weekdays}<br />
                        Week-end : {COMPANY_INFO.hours.weekend}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-adelec-blue to-adelec-deep-blue text-white">
                <h3 className="text-xl font-bold mb-4">
                  Intervention Rapide
                </h3>
                <p className="text-gray-200 mb-4">
                  Nous intervenons dans tout le Var et les départements limitrophes sous 48h.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Var (83)', 'Bouches-du-Rhône (13)', 'Alpes-Maritimes (06)'].map((area, index) => (
                    <span 
                      key={index}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Devis gratuit et sans engagement',
                    'Réponse sous 24h',
                    'Conseils personnalisés',
                    'Intervention rapide',
                    'Garantie qualité'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-adelec-orange flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-adelec-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center mb-12">Notre Localisation</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4 text-adelec-blue" />
                <p className="text-lg font-semibold">Carte Google Maps</p>
                <p className="text-sm">À intégrer avec l'adresse exacte</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact
