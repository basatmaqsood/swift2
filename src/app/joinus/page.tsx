import  Hero  from './components/hero'
import AppDownload from '../components/app-download'
import Navbar from './components/navbar'
import Footer from '../components/footer'
import DriverBenefits from '../components/driver-benefits'
import DriverApplicationForm from './components/driver-application-form'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DriverApplicationForm/>
      <DriverBenefits />
      <AppDownload />
      <Footer />
    </main>
  
  )
}