import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { NAV_ITEMS } from '../../utils/constants'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-white dark:bg-luxury-matte shadow-lg"
      >
        {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-luxury-dark border-r border-gold-200/20 dark:border-gold-500/10 z-40 overflow-y-auto"
          >
            {/* Logo */}
            <div className="p-6 border-b border-gold-200/20 dark:border-gold-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Icons.Gem size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-display font-bold text-luxury-dark dark:text-white">
                    GoldNest
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Jewellery Admin</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = Icons[item.icon]
                const isActive = location.pathname === item.path
                
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-gold text-white shadow-gold'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gold-500/10'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                        />
                      )}
                    </motion.div>
                  </NavLink>
                )
              })}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gold-200/20 dark:border-gold-500/10">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Icons.User size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-luxury-dark dark:text-white truncate">
                    Admin User
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    admin@goldnest.com
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}