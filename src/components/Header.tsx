import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, COMPANY_INFO } from '../utils/constants'
import Button from './Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/uploads/capture-d'écran-2022-01-15-à-15.01.53.png" 
              alt={COMPANY_INFO.name}
              className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">{COMPANY_INFO.name}</h1>
              <p className="text-xs text-gray-600">{COMPANY_INFO.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-adelec-blue ${
                  location.pathname === link.path
                    ? 'text-adelec-blue border-b-2 border-adelec-blue pb-1'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-adelec-blue transition-colors"
            >
              <Phone size={16} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <Link to="/contact">
              <Button variant="primary" size="sm">
                Devis Gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-adelec-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 pt-6 pb-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-medium transition-colors duration-200 hover:text-adelec-blue ${
                      location.pathname === link.path
                        ? 'text-adelec-blue'
                        : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-adelec-blue transition-colors"
                  >
                    <Phone size={16} />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-adelec-blue transition-colors"
                  >
                    <Mail size={16} />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                  <Link to="/contact" className="block">
                    <Button variant="primary" size="md" fullWidth>
                      Devis Gratuit
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
