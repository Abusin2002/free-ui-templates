import { motion } from 'framer-motion'

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  ...props 
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'px-6 py-3 rounded-xl text-gold-600 dark:text-gold-400 hover:bg-gold-500/10 transition-all duration-300',
    danger: 'px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all duration-300',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  )
}