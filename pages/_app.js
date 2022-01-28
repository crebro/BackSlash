import { Toaster } from 'react-hot-toast';
import { UserProvider } from '../context/UserContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <> <UserProvider user={pageProps.user}>
    <Component {...pageProps} />
  </UserProvider> <Toaster /> </>
}

export default MyApp
