import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Download, Phone, MapPin, Calendar } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { SAMPLE_CUSTOMERS } from '../utils/constants'

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('table') // 'table' or 'cards'

  const filteredCustomers = SAMPLE_CUSTOMERS.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.city.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
            Customers
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your customer database
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" icon={Download}>
            Export
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-luxury pl-10"
          />
        </div>
        <Button variant="ghost" icon={Filter}>
          Filters
        </Button>
        <div className="flex rounded-xl overflow-hidden border border-gold-200 dark:border-gold-700">
          <button
            onClick={() => setViewMode('table')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === 'table' ? 'bg-gold-500 text-white' : 'hover:bg-gold-500/10'
            }`}
          >
            Table
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === 'cards' ? 'bg-gold-500 text-white' : 'hover:bg-gold-500/10'
            }`}
          >
            Cards
          </button>
        </div>
      </div>

      {/* Table View */}
      {viewMode === 'table' ? (
        <div className="luxury-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold-200/20 dark:border-gold-500/10">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Customer</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Phone</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">City</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Total Purchases</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Last Visit</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, index) => (
                  <motion.tr
                    key={customer.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gold-200/10 dark:border-gold-500/5 hover:bg-gold-500/5"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {customer.name.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-luxury-dark dark:text-white">
                          {customer.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Phone size={16} />
                        {customer.phone}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin size={16} />
                        {customer.city}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gold-600">{customer.totalPurchases}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar size={16} />
                        {customer.lastVisit}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Cards View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {customer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-luxury-dark dark:text-white">
                      {customer.name}
                    </h3>
                    <p className="text-sm text-gray-500">{customer.city}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone size={14} />
                    {customer.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} />
                    Last visit: {customer.lastVisit}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gold-200/20 dark:border-gold-500/10">
                  <p className="text-2xl font-bold text-gold-600">
                    {customer.totalPurchases}
                  </p>
                  <p className="text-xs text-gray-500">Total Purchases</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}