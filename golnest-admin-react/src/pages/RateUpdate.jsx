import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, RefreshCw } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function RateUpdate() {
  const [rates, setRates] = useState({
    gold22K: '6450',
    gold24K: '6950',
    silver: '78'
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleChange = (field, value) => {
    setRates(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
          Update Rates
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage gold and silver rates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gold 22K */}
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-gold flex items-center justify-center">
              <span className="text-2xl font-bold text-white">22K</span>
            </div>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
              Gold 22 Karat
            </h3>
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gold-500">₹</span>
              <input
                type="number"
                value={rates.gold22K}
                onChange={(e) => handleChange('gold22K', e.target.value)}
                className="input-luxury text-center text-2xl font-bold pl-10"
              />
            </div>
            <p className="text-sm text-gray-500">per gram</p>
          </div>
        </Card>

        {/* Gold 24K */}
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-gold flex items-center justify-center">
              <span className="text-2xl font-bold text-white">24K</span>
            </div>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
              Gold 24 Karat
            </h3>
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gold-500">₹</span>
              <input
                type="number"
                value={rates.gold24K}
                onChange={(e) => handleChange('gold24K', e.target.value)}
                className="input-luxury text-center text-2xl font-bold pl-10"
              />
            </div>
            <p className="text-sm text-gray-500">per gram</p>
          </div>
        </Card>

        {/* Silver */}
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Ag</span>
            </div>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
              Silver
            </h3>
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500">₹</span>
              <input
                type="number"
                value={rates.silver}
                onChange={(e) => handleChange('silver', e.target.value)}
                className="input-luxury text-center text-2xl font-bold pl-10"
              />
            </div>
            <p className="text-sm text-gray-500">per gram</p>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button icon={Save} onClick={handleSave}>
          {saved ? 'Saved!' : 'Save Rates'}
        </Button>
        <Button variant="secondary" icon={RefreshCw}>
          Reset
        </Button>
      </div>

      {/* Preview */}
      <div className="luxury-card p-6">
        <h2 className="text-xl font-display font-bold text-luxury-dark dark:text-white mb-4">
          Live Preview
        </h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500 mb-1">Gold 22K</p>
            <p className="text-2xl font-bold text-gold-600">₹{parseInt(rates.gold22K).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Gold 24K</p>
            <p className="text-2xl font-bold text-gold-600">₹{parseInt(rates.gold24K).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Silver</p>
            <p className="text-2xl font-bold text-gray-600">₹{parseInt(rates.silver).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}