import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout navigation={pageProps.navigation}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
