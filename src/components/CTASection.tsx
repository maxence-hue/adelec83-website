import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import Button from './Button'
import { COMPANY_INFO } from '../utils/constants'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-adelec-blue via-adelec-deep-blue to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
              Notre équipe d'experts est à votre écoute pour concrétiser vos projets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/contact">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<ArrowRight size={20} />}
                className="min-w-[250px]"
              >
                Demander un Devis Gratuit
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button 
                variant="outline" 
                size="lg" 
                icon={<Phone size={20} />}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-adelec-blue min-w-[250px]"
              >
                Appeler Maintenant
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Phone size={32} className="text-adelec-orange mx-auto mb-3" />
              <h3 className="font-bold mb-2">Appelez-nous</h3>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm hover:text-adelec-orange transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Mail size={32} className="text-adelec-orange mx-auto mb-3" />
              <h3 className="font-bold mb-2">Écrivez-nous</h3>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-adelec-orange transition-colors break-all">
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <ArrowRight size={32} className="text-adelec-orange mx-auto mb-3" />
              <h3 className="font-bold mb-2">Devis en ligne</h3>
              <p className="text-sm text-gray-200">
                Réponse sous 24h
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-sm text-gray-300"
          >
            Intervention rapide dans le Var (83), Bouches-du-Rhône (13) et Alpes-Maritimes (06)
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default CTASection
