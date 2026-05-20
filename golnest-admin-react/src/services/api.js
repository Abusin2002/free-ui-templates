// Mock API service
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
  getGoldRates: async () => {
    await delay(500)
    return {
      '22K': { rate: 6450, change: '+25' },
      '24K': { rate: 6950, change: '+30' },
      'SILVER': { rate: 78, change: '-2' }
    }
  },

  updateGoldRates: async (rates) => {
    await delay(1000)
    return { success: true, rates }
  },

  getCustomers: async () => {
    await delay(800)
    return [
      { id: 1, name: 'Priya Sharma', phone: '+91 98765 43210', city: 'Mumbai', totalPurchases: '₹2,50,000', lastVisit: '2024-01-15' },
      { id: 2, name: 'Rajesh Kumar', phone: '+91 98765 43211', city: 'Delhi', totalPurchases: '₹1,80,000', lastVisit: '2024-01-10' },
      { id: 3, name: 'Anita Patel', phone: '+91 98765 43212', city: 'Ahmedabad', totalPurchases: '₹4,20,000', lastVisit: '2024-01-18' },
      { id: 4, name: 'Suresh Reddy', phone: '+91 98765 43213', city: 'Hyderabad', totalPurchases: '₹3,10,000', lastVisit: '2024-01-12' },
      { id: 5, name: 'Meera Desai', phone: '+91 98765 43214', city: 'Surat', totalPurchases: '₹5,60,000', lastVisit: '2024-01-20' },
    ]
  },

  sendWhatsApp: async (data) => {
    await delay(1500)
    return { success: true, message: 'Message sent successfully' }
  }
}