import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Wind, BatteryCharging, Sun, ArrowRight } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { SERVICES } from '../utils/constants'

const iconMap = {
  Zap: Zap,
  Wind: Wind,
  BatteryCharging: BatteryCharging,
  Sun: Sun
}

const ServicesSection = () => {
  return (
    <section className="py-20 bg-adelec-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Solutions complètes en électricité, climatisation et énergies renouvelables pour particuliers et professionnels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const colorClass = service.color === 'orange' ? 'text-adelec-orange bg-adelec-orange/10' : 'text-adelec-blue bg-adelec-blue/10'
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 rounded-xl ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.shortDesc}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-adelec-orange mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/services#${service.id}`}
                    className="text-adelec-blue font-semibold flex items-center space-x-2 hover:space-x-3 transition-all duration-300 group"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              Découvrir tous nos services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
