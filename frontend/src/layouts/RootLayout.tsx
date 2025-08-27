import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar'
import Footer from '@/components/Shared/Footer'

const RootLayout = () => {
  return (
    <main className='bg-[#f9f9f9] font-lato'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default RootLayout
