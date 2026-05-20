export const GOLD_RATES = {
  '22K': { rate: 6450, change: '+25' },
  '24K': { rate: 6950, change: '+30' },
  'SILVER': { rate: 78, change: '-2' }
}

export const SAMPLE_CUSTOMERS = [
  { id: 1, name: 'Priya Sharma', phone: '+91 98765 43210', city: 'Mumbai', totalPurchases: '₹2,50,000', lastVisit: '2024-01-15' },
  { id: 2, name: 'Rajesh Kumar', phone: '+91 98765 43211', city: 'Delhi', totalPurchases: '₹1,80,000', lastVisit: '2024-01-10' },
  { id: 3, name: 'Anita Patel', phone: '+91 98765 43212', city: 'Ahmedabad', totalPurchases: '₹4,20,000', lastVisit: '2024-01-18' },
  { id: 4, name: 'Suresh Reddy', phone: '+91 98765 43213', city: 'Hyderabad', totalPurchases: '₹3,10,000', lastVisit: '2024-01-12' },
  { id: 5, name: 'Meera Desai', phone: '+91 98765 43214', city: 'Surat', totalPurchases: '₹5,60,000', lastVisit: '2024-01-20' },
]

export const SAMPLE_OFFERS = [
  { id: 1, title: 'Diwali Special', discount: '20% Off', type: 'Making Charges', validTill: '2024-11-15', status: 'Active' },
  { id: 2, title: 'Wedding Collection', discount: '15% Off', type: 'Gold Jewellery', validTill: '2024-02-28', status: 'Active' },
  { id: 3, title: 'New Year Bonanza', discount: '₹500 Off', type: 'Silver Items', validTill: '2024-01-31', status: 'Expired' },
]

export const NAV_ITEMS = [
  { label: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard' },
  { label: 'Rates', icon: 'TrendingUp', path: '/rates' },
  { label: 'Poster Generator', icon: 'Palette', path: '/poster' },
  { label: 'Offers', icon: 'Percent', path: '/offers' },
  { label: 'WhatsApp', icon: 'MessageCircle', path: '/whatsapp' },
  { label: 'Customers', icon: 'Users', path: '/customers' },
  { label: 'Analytics', icon: 'BarChart3', path: '/analytics' },
  { label: 'Settings', icon: 'Settings', path: '/settings' },
]