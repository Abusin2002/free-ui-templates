import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Clock, CheckCircle, Users, MessageCircle } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { SAMPLE_CUSTOMERS } from '../utils/constants'

export default function WhatsAppBroadcast() {
  const [selectedCustomers, setSelectedCustomers] = useState([])
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const toggleCustomer = (id) => {
    setSelectedCustomers(prev =>
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    )
  }

  const handleSend = async () => {
    setSending(true)
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSending(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
          WhatsApp Broadcast
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Send messages to your customers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Customer Selection */}
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
              Select Customers
            </h3>
            
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {SAMPLE_CUSTOMERS.map((customer) => (
                <motion.div
                  key={customer.id}
                  whileHover={{ scale: 1.01 }}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${
                    selectedCustomers.includes(customer.id)
                      ? 'bg-gold-500/10 border border-gold-500'
                      : 'hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent'
                  }`}
                  onClick={() => toggleCustomer(customer.id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.id)}
                    onChange={() => {}}
                    className="rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-luxury-dark dark:text-white">
                      {customer.name}
                    </p>
                    <p className="text-sm text-gray-500">{customer.phone}</p>
                  </div>
                  <span className="text-sm text-gray-400">{customer.city}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gold-200/20 dark:border-gold-500/10">
              <p className="text-sm text-gray-500">
                Selected: <span className="font-bold text-gold-600">{selectedCustomers.length}</span> customers
              </p>
            </div>
          </Card>
        </div>

        {/* Message Composer */}
        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
              Compose Message
            </h3>
            
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={6}
              className="input-luxury resize-none"
            />

            <div className="mt-4 space-y-3">
              <Button
                icon={Send}
                className="w-full"
                onClick={handleSend}
                disabled={sending || selectedCustomers.length === 0}
              >
                {sending ? 'Sending...' : 'Send Now'}
              </Button>
              
              <Button
                variant="secondary"
                icon={Clock}
                className="w-full"
              >
                Schedule
              </Button>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card>
            <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
              Delivery Stats
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Delivered</span>
                </div>
                <span className="font-bold text-green-500">245</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Pending</span>
                </div>
                <span className="font-bold text-yellow-500">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total Reach</span>
                </div>
                <span className="font-bold text-blue-500">890</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}