import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, Send, Upload, Palette, Type, Image } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function PosterGenerator() {
  const [posterData, setPosterData] = useState({
    title: 'Exclusive Collection',
    subtitle: 'Festive Offer',
    offerText: '20% OFF',
    description: 'On Making Charges',
    backgroundColor: '#111111',
    textColor: '#D4AF37',
    image: null
  })
  const posterRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPosterData(prev => ({ ...prev, image: e.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
          Poster Generator
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Create stunning jewellery posters
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
              Poster Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={posterData.title}
                  onChange={(e) => setPosterData(prev => ({ ...prev, title: e.target.value }))}
                  className="input-luxury"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={posterData.subtitle}
                  onChange={(e) => setPosterData(prev => ({ ...prev, subtitle: e.target.value }))}
                  className="input-luxury"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Offer Text
                </label>
                <input
                  type="text"
                  value={posterData.offerText}
                  onChange={(e) => setPosterData(prev => ({ ...prev, offerText: e.target.value }))}
                  className="input-luxury text-2xl font-bold text-gold-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={posterData.description}
                  onChange={(e) => setPosterData(prev => ({ ...prev, description: e.target.value }))}
                  className="input-luxury"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Background
                  </label>
                  <input
                    type="color"
                    value={posterData.backgroundColor}
                    onChange={(e) => setPosterData(prev => ({ ...prev, backgroundColor: e.target.value }))}
                    className="w-full h-10 rounded-xl cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Text Color
                  </label>
                  <input
                    type="color"
                    value={posterData.textColor}
                    onChange={(e) => setPosterData(prev => ({ ...prev, textColor: e.target.value }))}
                    className="w-full h-10 rounded-xl cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jewellery Image
                </label>
                <div className="border-2 border-dashed border-gold-300 dark:border-gold-700 rounded-xl p-8 text-center hover:border-gold-500 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Click to upload image</p>
                  </label>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex gap-4">
            <Button icon={Download}>
              Download Poster
            </Button>
            <Button variant="secondary" icon={Send}>
              Send WhatsApp
            </Button>
          </div>
        </div>

        {/* Preview */}
        <div className="lg:sticky lg:top-24">
          <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
            Live Preview
          </h3>
          <div
            ref={posterRef}
            className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative"
            style={{ backgroundColor: posterData.backgroundColor }}
          >
            {/* Decorative Border */}
            <div className="absolute inset-4 border-2 border-gold-500/30 rounded-xl"></div>
            
            {/* Content */}
            <div className="absolute inset-8 flex flex-col items-center justify-center text-center">
              {posterData.image && (
                <img
                  src={posterData.image}
                  alt="Jewellery"
                  className="w-48 h-48 object-cover rounded-full mb-6 shadow-2xl"
                />
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <p className="text-sm uppercase tracking-widest" style={{ color: posterData.textColor }}>
                  {posterData.subtitle}
                </p>
                <h2
                  className="text-3xl font-display font-bold"
                  style={{ color: posterData.textColor }}
                >
                  {posterData.title}
                </h2>
                <div
                  className="text-5xl font-bold"
                  style={{ color: '#D4AF37' }}
                >
                  {posterData.offerText}
                </div>
                <p className="text-lg" style={{ color: posterData.textColor }}>
                  {posterData.description}
                </p>
              </motion.div>
            </div>

            {/* Bottom Branding */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-sm" style={{ color: posterData.textColor }}>
                GoldNest Jewellery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}