import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  fullWidth?: boolean
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  
  const variantClasses = {
    primary: 'bg-adelec-blue hover:bg-adelec-deep-blue text-white',
    secondary: 'bg-adelec-orange hover:bg-orange-500 text-white',
    outline: 'border-2 border-adelec-blue text-adelec-blue hover:bg-adelec-blue hover:text-white'
  }
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  }

  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  )
}

export default Button
