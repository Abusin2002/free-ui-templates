import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Bell, Shield, Palette, Globe, Database } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { useTheme } from '../hooks/useTheme'

export default function Settings() {
  const { darkMode } = useTheme()
  const [settings, setSettings] = useState({
    shopName: 'GoldNest Jewellery',
    email: 'contact@goldnest.com',
    phone: '+91 98765 43210',
    address: '123, Jewellery Street, Mumbai',
    notifications: true,
    autoUpdate: false,
    language: 'english'
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <nav className="space-y-2">
              {[
                { icon: Globe, label: 'General' },
                { icon: Bell, label: 'Notifications' },
                { icon: Shield, label: 'Security' },
                { icon: Palette, label: 'Appearance' },
                { icon: Database, label: 'Data' },
              ].map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gold-500/10 transition-colors text-left"
                >
                  <item.icon size={20} className="text-gray-400" />
                  <span className="font-medium text-luxury-dark dark:text-white">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-6">
              General Settings
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Shop Name
                </label>
                <input
                  type="text"
                  value={settings.shopName}
                  onChange={(e) => setSettings(prev => ({ ...prev, shopName: e.target.value }))}
                  className="input-luxury"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={settings.phone}
                    onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                    className="input-luxury"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address
                </label>
                <textarea
                  value={settings.address}
                  onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
                  rows={3}
                  className="input-luxury resize-none"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-luxury-dark dark:text-white">Preferences</h4>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-luxury-dark dark:text-white">Notifications</p>
                    <p className="text-sm text-gray-500">Receive email notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => setSettings(prev => ({ ...prev, notifications: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold-500/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-luxury-dark dark:text-white">Auto Update Rates</p>
                    <p className="text-sm text-gray-500">Automatically update gold rates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.autoUpdate}
                      onChange={(e) => setSettings(prev => ({ ...prev, autoUpdate: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold-500/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-200/20 dark:border-gold-500/10">
                <Button icon={Save}>
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}