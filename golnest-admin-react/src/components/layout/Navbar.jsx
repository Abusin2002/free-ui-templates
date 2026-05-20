import { Bell, Search } from 'lucide-react'
import ThemeToggle from '../common/ThemeToggle'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-luxury-dark/80 backdrop-blur-xl border-b border-gold-200/20 dark:border-gold-500/10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-luxury-charcoal border border-transparent focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 dark:text-white"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-gold-200/20 dark:border-gold-500/10">
            <div className="w-9 h-9 rounded-xl bg-gradient-gold flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-luxury-dark dark:text-white">Admin</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}