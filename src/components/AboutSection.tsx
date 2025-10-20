import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, MapPin, ArrowRight } from 'lucide-react'
import Button from './Button'
import { COMPANY_INFO, VALUES } from '../utils/constants'

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              {COMPANY_INFO.tagline}
            </h2>
            <p className="section-subtitle">
              Une expertise familiale au service de votre confort et de vos économies d'énergie
            </p>

            <div className="space-y-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Fondée en <strong className="text-adelec-blue">{COMPANY_INFO.founded}</strong> à {COMPANY_INFO.location}, 
                <strong className="text-adelec-blue"> {COMPANY_INFO.name}</strong> est une entreprise familiale spécialisée 
                dans l'électricité, la climatisation et les énergies renouvelables.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Dirigée par <strong>Daniel Alehause</strong> et rejointe par la nouvelle génération avec <strong>Maxence Alehause</strong>, 
                notre équipe de <strong>10 professionnels qualifiés</strong> intervient dans tout le Var et les départements limitrophes.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 bg-adelec-gray p-4 rounded-lg">
                  <Award className="text-adelec-blue flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-gray-900">RGE QualiPV</div>
                    <div className="text-xs text-gray-600">Certifié</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-adelec-gray p-4 rounded-lg">
                  <Award className="text-adelec-blue flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-gray-900">IRVE</div>
                    <div className="text-xs text-gray-600">Qualifié</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-adelec-gray p-4 rounded-lg">
                  <Award className="text-adelec-blue flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-gray-900">QualiClimafroid</div>
                    <div className="text-xs text-gray-600">Certifié</div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/a-propos">
              <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                Découvrir notre histoire
              </Button>
            </Link>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Valeurs</h3>
            
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-adelec-gray rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-adelec-blue mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-adelec-blue to-adelec-deep-blue text-white rounded-xl p-6"
            >
              <div className="flex items-start space-x-3">
                <MapPin size={24} className="text-adelec-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Zone d'intervention</h4>
                  <p className="text-sm text-gray-200">
                    Var (83) • Bouches-du-Rhône (13) • Alpes-Maritimes (06)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
