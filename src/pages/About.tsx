import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, Users, MapPin, Calendar, Heart, Target } from 'lucide-react'
import Card from '../components/Card'
import CTASection from '../components/CTASection'
import { COMPANY_INFO, TEAM, CERTIFICATIONS, STATS, VALUES } from '../utils/constants'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              À Propos d'ADELEC83
            </h1>
            <p className="text-xl text-gray-200">
              {COMPANY_INFO.tagline} - Une histoire familiale au service de votre confort
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Notre Histoire</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Fondée en <strong className="text-adelec-blue">{COMPANY_INFO.founded}</strong> par <strong>Daniel Alehause</strong> à {COMPANY_INFO.location}, 
                  <strong className="text-adelec-blue"> ADELEC83</strong> est née d'une passion pour l'électricité et d'un engagement envers l'excellence.
                </p>
                <p>
                  Depuis plus de <strong>20 ans</strong>, nous accompagnons particuliers et professionnels dans leurs projets électriques, 
                  de climatisation et d'énergies renouvelables. Notre expertise s'est construite au fil des années, 
                  projet après projet, toujours avec le même souci du détail et de la satisfaction client.
                </p>
                <p>
                  Aujourd'hui, la nouvelle génération a rejoint l'entreprise avec <strong>Maxence Alehause</strong>, 
                  spécialiste en énergie solaire photovoltaïque, apportant un regard neuf et des compétences pointues 
                  sur les nouvelles technologies énergétiques.
                </p>
                <p>
                  Notre équipe de <strong>10 professionnels qualifiés</strong> partage les mêmes valeurs : 
                  qualité, réactivité, et engagement pour un avenir énergétique durable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <div className="text-4xl font-bold text-adelec-blue mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-adelec-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Notre Équipe</h2>
            <p className="section-subtitle">Une équipe familiale et passionnée à votre service</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-adelec-blue to-adelec-deep-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-adelec-blue font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">Ce qui guide notre travail au quotidien</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-adelec-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {index === 0 && <Heart size={28} className="text-adelec-blue" />}
                    {index === 1 && <Award size={28} className="text-adelec-blue" />}
                    {index === 2 && <Target size={28} className="text-adelec-blue" />}
                    {index === 3 && <Calendar size={28} className="text-adelec-blue" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-adelec-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Nos Certifications</h2>
            <p className="section-subtitle">Des labels reconnus pour votre tranquillité</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <Award size={48} className="text-adelec-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <MapPin size={48} className="text-adelec-blue mx-auto mb-6" />
            <h2 className="section-title">Zone d'Intervention</h2>
            <p className="text-lg text-gray-700 mb-6">
              Nous intervenons dans tout le <strong className="text-adelec-blue">Var (83)</strong> et les départements limitrophes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Var (83)', 'Bouches-du-Rhône (13)', 'Alpes-Maritimes (06)'].map((area, index) => (
                <span 
                  key={index}
                  className="bg-adelec-blue text-white px-6 py-3 rounded-full font-semibold"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default About
