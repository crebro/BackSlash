import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '../context/UserContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <> <UserProvider user={pageProps.user}>
    <NextNProgress color='#ffffff'/>
    <Component {...pageProps} />
  </UserProvider> <Toaster /> </>
}

export default MyApp
