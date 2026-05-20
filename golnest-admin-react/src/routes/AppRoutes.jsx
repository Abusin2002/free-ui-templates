import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import DashboardLayout from '../components/layout/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import RateUpdate from '../pages/RateUpdate'
import PosterGenerator from '../pages/PosterGenerator'
import Offers from '../pages/Offers'
import WhatsAppBroadcast from '../pages/WhatsAppBroadcast'
import Customers from '../pages/Customers'
import Analytics from '../pages/Analytics'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rates" element={<RateUpdate />} />
          <Route path="/poster" element={<PosterGenerator />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/whatsapp" element={<WhatsAppBroadcast />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}