import '@/styles/globals.css'
import Layout from '@/components/layout';
import { CartProvider } from '@/context/CartProvider';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>

  )
}
