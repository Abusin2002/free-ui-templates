import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Users, Send, Percent, Diamond } from 'lucide-react'
import Card from '../components/common/Card'
import { GOLD_RATES, SAMPLE_CUSTOMERS, SAMPLE_OFFERS } from '../utils/constants'

export default function Dashboard() {
  const [stats, setStats] = useState({
    postersSent: 1250,
    customers: 450,
    whatsappDelivered: 890,
    offersRunning: 12
  })

  const StatCard = ({ title, value, icon: Icon, trend, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="luxury-card p-6 hover-lift"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-3xl font-bold text-luxury-dark dark:text-white mb-1">{value}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
    </motion.div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back, Admin
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Posters Sent"
          value="1,250"
          icon={Send}
          trend={12}
          color="bg-blue-500"
        />
        <StatCard
          title="Customers"
          value="450"
          icon={Users}
          trend={8}
          color="bg-green-500"
        />
        <StatCard
          title="WhatsApp Delivered"
          value="890"
          icon={Send}
          trend={15}
          color="bg-purple-500"
        />
        <StatCard
          title="Offers Running"
          value="12"
          icon={Percent}
          trend={-5}
          color="bg-orange-500"
        />
      </div>

      {/* Gold Rates */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(GOLD_RATES).map(([type, data]) => (
          <Card key={type}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-luxury-dark dark:text-white">
                {type === 'SILVER' ? 'Silver' : `Gold ${type}`}
              </h3>
              <Diamond size={20} className="text-gold-500" />
            </div>
            <div className="text-4xl font-bold text-luxury-dark dark:text-white mb-2">
              ₹{data.rate.toLocaleString()}
            </div>
            <div className={`flex items-center gap-1 text-sm ${
              data.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}>
              {data.change.startsWith('+') ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{data.change} today</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Customers */}
      <div className="luxury-card p-6">
        <h2 className="text-xl font-display font-bold text-luxury-dark dark:text-white mb-4">
          Recent Customers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-200/20 dark:border-gold-500/10">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">City</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Purchases</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Last Visit</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_CUSTOMERS.slice(0, 5).map((customer) => (
                <tr key={customer.id} className="border-b border-gold-200/10 dark:border-gold-500/5 hover:bg-gold-500/5">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-luxury-dark dark:text-white">{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.phone}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{customer.city}</td>
                  <td className="py-3 px-4 font-medium text-gold-600">{customer.totalPurchases}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{customer.lastVisit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}