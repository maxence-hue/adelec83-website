import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { COMPANY_INFO, NAV_LINKS, CERTIFICATIONS, COVERAGE_AREAS } from '../utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-adelec-blue to-adelec-deep-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A83</span>
              </div>
              <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-adelec-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-adelec-orange transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-adelec-orange transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.region}
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Horaires :</p>
              <p className="text-sm text-gray-300">{COMPANY_INFO.hours.weekdays}</p>
            </div>
          </div>

          {/* Certifications & Coverage */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 mb-6">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.name} className="text-sm">
                  <span className="text-adelec-orange font-semibold">✓</span>{' '}
                  <span className="text-gray-300">{cert.name}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-2">Zone d'intervention</h4>
            <p className="text-sm text-gray-400">
              {COVERAGE_AREAS.join(' • ')}
            </p>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a 
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-adelec-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-adelec-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-adelec-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <Link to="/mentions-legales" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                  Mentions légales
                </Link>
                <span className="text-gray-700">•</span>
                <Link to="/politique-confidentialite" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
