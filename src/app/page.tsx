import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import AppDownload from './components/app-download'
import Footer from './components/footer'
import Safety from './components/safety'
import EconomicImpact from './components/EconomicImpact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Safety />
      <EconomicImpact/>
      <AppDownload />
      <Footer />
    </div>
  )
}