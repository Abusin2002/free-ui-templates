import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`luxury-card p-6 ${hover ? 'hover-lift cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )
}