import Navbar from './Navbar'
import Footer from './Footer'
import { CartProvider } from '@/context/CartProvider'

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className='bg-white-smoke'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>

    </CartProvider>
  )
}