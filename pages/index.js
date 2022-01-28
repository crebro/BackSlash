import Head from 'next/head'
import Navigation from '../components/Navigation'
import HeroSection from '../components/pages/Home/HeroSection'
import JoinWaitlist from '../components/pages/Home/JoinWaitlist'
import OurServices from '../components/pages/Home/OurServices'
import DeveloperQuote from '../components/pages/Home/Quote'

export default function Home() {
  return <div className='relative'>
    <Head>
      <title>BackSlash | Free to use and Customzable Streaming Elements</title>
    </Head>
    <Navigation />
    <HeroSection />
    <DeveloperQuote />
    <OurServices />
    <JoinWaitlist />
  </div>
}
