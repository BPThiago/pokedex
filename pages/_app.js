import Common from '../components/Common'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Common>
      <Component {...pageProps} />
    </Common>
  )
}

export default MyApp
