import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/Button'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-adelec-blue to-adelec-deep-blue text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold text-adelec-orange mb-6"
          >
            404
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Page Non Trouvée
          </h1>

          <p className="text-xl text-gray-200 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="secondary" size="lg" icon={<Home size={20} />}>
                Retour à l'accueil
              </Button>
            </Link>
            <button onClick={() => window.history.back()}>
              <Button 
                variant="outline" 
                size="lg" 
                icon={<ArrowLeft size={20} />}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-adelec-blue"
              >
                Page précédente
              </Button>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-sm text-gray-300"
          >
            <p>Besoin d'aide ? Contactez-nous :</p>
            <a href="tel:+33XXXXXXXXX" className="text-adelec-orange hover:underline">
              +33 X XX XX XX XX
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound
