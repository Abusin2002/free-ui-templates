import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark">
      <Sidebar />
      <div className="lg:ml-72">
        <Navbar />
        <main className="p-6 min-h-[calc(100vh-8rem)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}