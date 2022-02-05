import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '../context/UserContext';
import '../styles/globals.css'

function MyApp({ Component }) {
  return <> <UserProvider>
    <NextNProgress color='#ffffff'/>
    <Component {...pageProps} />
  </UserProvider> <Toaster /> </>
}

export default MyApp
