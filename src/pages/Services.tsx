import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Wind, BatteryCharging, Sun, Check, ArrowRight } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import { SERVICES } from '../utils/constants'

const iconMap = {
  Zap: Zap,
  Wind: Wind,
  BatteryCharging: BatteryCharging,
  Sun: Sun
}

const Services = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

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
              Nos Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Solutions complètes en électricité, climatisation et énergies renouvelables pour particuliers et professionnels dans le Var
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                        service.color === 'orange' 
                          ? 'bg-adelec-orange/10 text-adelec-orange' 
                          : 'bg-adelec-blue/10 text-adelec-blue'
                      }`}>
                        <IconComponent size={32} />
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-6">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Check className={`flex-shrink-0 mt-1 ${
                              service.color === 'orange' ? 'text-adelec-orange' : 'text-adelec-blue'
                            }`} size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact">
                        <Button 
                          variant={service.color === 'orange' ? 'secondary' : 'primary'}
                          size="lg"
                          icon={<ArrowRight size={20} />}
                        >
                          Demander un Devis
                        </Button>
                      </Link>
                    </div>

                    {/* Image Placeholder */}
                    <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                      <Card className="aspect-square bg-gradient-to-br from-adelec-gray to-white flex items-center justify-center">
                        <IconComponent size={120} className={
                          service.color === 'orange' ? 'text-adelec-orange opacity-20' : 'text-adelec-blue opacity-20'
                        } />
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-adelec-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Pourquoi Choisir ADELEC83 ?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Certifications RGE',
                description: 'QualiPV, IRVE, QualiClimafroid pour votre sérénité',
                icon: '🏆'
              },
              {
                title: 'Intervention Rapide',
                description: 'Délai d\'intervention sous 48h dans tout le Var',
                icon: '⚡'
              },
              {
                title: 'Garantie Qualité',
                description: 'Travaux garantis et matériel de marques premium',
                icon: '✓'
              },
              {
                title: 'Devis Gratuit',
                description: 'Étude personnalisée et devis détaillé sans engagement',
                icon: '📋'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default Services
