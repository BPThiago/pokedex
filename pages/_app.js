import Common from '../components/Common'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Commmon>
      <Component {...pageProps} />
    </Commmon>
  )
}

export default MyApp
