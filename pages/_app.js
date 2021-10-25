import '../styles/globals.css'
import { SessionProvider } from "next-auth/client"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
