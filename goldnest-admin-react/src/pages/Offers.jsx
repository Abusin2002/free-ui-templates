import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Calendar, Tag, Clock, Edit2, Trash2 } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Modal from '../components/common/Modal'

export default function Offers() {
  const [offers, setOffers] = useState([
    { id: 1, title: 'Diwali Special', discount: '20% Off', type: 'Making Charges', validTill: '2024-11-15', status: 'Active' },
    { id: 2, title: 'Wedding Collection', discount: '15% Off', type: 'Gold Jewellery', validTill: '2024-02-28', status: 'Active' },
    { id: 3, title: 'New Year Bonanza', discount: '₹500 Off', type: 'Silver Items', validTill: '2024-01-31', status: 'Expired' },
    { id: 4, title: 'Valentine Special', discount: '10% Off', type: 'Diamond Jewellery', validTill: '2024-02-14', status: 'Scheduled' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [editingOffer, setEditingOffer] = useState(null)

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-500/10 text-green-500'
      case 'Expired': return 'bg-red-500/10 text-red-500'
      case 'Scheduled': return 'bg-blue-500/10 text-blue-500'
      default: return 'bg-gray-500/10 text-gray-500'
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
            Offers & Campaigns
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your promotional offers
          </p>
        </div>
        <Button icon={Plus} onClick={() => setShowModal(true)}>
          New Offer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Active Offers', value: '3', color: 'text-green-500' },
          { label: 'Scheduled', value: '1', color: 'text-blue-500' },
          { label: 'Expired', value: '2', color: 'text-red-500' },
        ].map((stat) => (
          <Card key={stat.label}>
            <div className="text-center">
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(offer.status)}`}>
                      {offer.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                      <Edit2 size={16} className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 size={16} className="text-red-400" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-luxury-dark dark:text-white mb-2">
                  {offer.title}
                </h3>
                
                <div className="text-3xl font-bold text-gold-600 mb-4">
                  {offer.discount}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Tag size={16} />
                    <span>{offer.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>Valid till: {offer.validTill}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}