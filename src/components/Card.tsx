import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

const Card = ({ children, className = '', hover = true, gradient = false }: CardProps) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg p-6 border border-gray-100'
  const hoverClasses = hover ? 'hover:shadow-2xl transition-all duration-300' : ''
  const gradientClasses = gradient ? 'bg-gradient-to-br from-white to-adelec-gray' : ''
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
