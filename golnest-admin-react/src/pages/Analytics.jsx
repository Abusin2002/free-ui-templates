import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingBag, Activity } from 'lucide-react'
import Card from '../components/common/Card'

export default function Analytics() {
  const [period, setPeriod] = useState('monthly')

  const metrics = [
    { label: 'Revenue', value: '₹12,50,000', change: '+15%', trend: 'up', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Customers', value: '450', change: '+8%', trend: 'up', icon: Users, color: 'bg-blue-500' },
    { label: 'Orders', value: '280', change: '-3%', trend: 'down', icon: ShoppingBag, color: 'bg-purple-500' },
    { label: 'Conversion', value: '24%', change: '+5%', trend: 'up', icon: Activity, color: 'bg-orange-500' },
  ]

  // Mock chart data
  const chartData = [
    { month: 'Jan', revenue: 850000, customers: 320 },
    { month: 'Feb', revenue: 920000, customers: 350 },
    { month: 'Mar', revenue: 1100000, customers: 380 },
    { month: 'Apr', revenue: 980000, customers: 400 },
    { month: 'May', revenue: 1250000, customers: 420 },
    { month: 'Jun', revenue: 1180000, customers: 450 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-luxury-dark dark:text-white">
            Analytics
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Business performance insights
          </p>
        </div>
        <div className="flex rounded-xl overflow-hidden border border-gold-200 dark:border-gold-700">
          {['daily', 'weekly', 'monthly', 'yearly'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                period === p ? 'bg-gold-500 text-white' : 'hover:bg-gold-500/10'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.color}`}>
                  <metric.icon size={24} className="text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span>{metric.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-luxury-dark dark:text-white">
                {metric.value}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{metric.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Chart Area - Simple bar chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-6">
            Revenue Overview
          </h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {chartData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col justify-end h-48">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.revenue / 1500000) * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full bg-gradient-to-t from-gold-500 to-gold-300 rounded-t-lg"
                  />
                </div>
                <span className="text-xs text-gray-500">{data.month}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-6">
            Customer Growth
          </h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {chartData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col justify-end h-48">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.customers / 500) * 100}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                  />
                </div>
                <span className="text-xs text-gray-500">{data.month}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <h3 className="text-lg font-semibold text-luxury-dark dark:text-white mb-4">
          Top Selling Products
        </h3>
        <div className="space-y-3">
          {[
            { name: 'Gold Necklace Set', sales: '₹4,50,000', percentage: 85 },
            { name: 'Diamond Ring', sales: '₹3,20,000', percentage: 70 },
            { name: 'Gold Bangles', sales: '₹2,80,000', percentage: 60 },
            { name: 'Silver Anklet', sales: '₹1,50,000', percentage: 45 },
          ].map((product, index) => (
            <div key={product.name} className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-luxury-dark dark:text-white">
                    {product.name}
                  </span>
                  <span className="text-sm font-medium text-gold-600">
                    {product.sales}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-luxury-charcoal rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${product.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}