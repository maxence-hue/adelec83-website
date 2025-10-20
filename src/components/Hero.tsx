import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Zap, Award } from 'lucide-react'
import Button from './Button'
import { COMPANY_INFO } from '../utils/constants'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-adelec-blue via-adelec-deep-blue to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-adelec-orange opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white opacity-5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Award size={20} className="text-adelec-orange" />
              <span className="text-sm font-medium">Certifié RGE QualiPV • IRVE • QualiClimafroid</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Votre Expert en{' '}
              <span className="text-adelec-orange">Électricité</span>,{' '}
              <span className="text-adelec-orange">Climatisation</span> et{' '}
              <span className="text-adelec-orange">Énergie Solaire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
            >
              {COMPANY_INFO.tagline} - Spécialiste de l'installation, rénovation et maintenance dans le Var et départements limitrophes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
                  Demander un Devis Gratuit
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button variant="outline" size="lg" icon={<Phone size={20} />} className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-adelec-blue">
                  {COMPANY_INFO.phone}
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6 text-sm"
            >
              <div className="flex items-center space-x-2">
                <Zap size={20} className="text-adelec-orange" />
                <span>Intervention rapide</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={20} className="text-adelec-orange" />
                <span>Garantie qualité</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats/Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { value: '2005', label: 'Année de création', icon: '🏢' },
              { value: '10+', label: 'Collaborateurs', icon: '👥' },
              { value: '1000+', label: 'Clients satisfaits', icon: '⭐' },
              { value: '3', label: 'Départements', icon: '📍' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-adelec-orange mb-1">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
