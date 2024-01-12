import Navbar from './Navbar'
import Footer from './Footer'
 
export default function Layout({ children }) {
  return (
    <div className='bg-white-smoke'> 
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}