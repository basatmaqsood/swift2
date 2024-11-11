import SearchHeader from './components/search-header'
import QuickLinks from './components/quick-links'
import SupportCenter from './components/support-center'
import SupportSidebar from './components/support-sidebar'
import DriverSupport from './components/driver-support'
import Footer from '../components/footer'
import AppDownload from '../components/app-download'
import Navbar from '../components/navbar'

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>
      <SearchHeader />
      <QuickLinks />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
          <SupportCenter />
          <aside>
            <SupportSidebar />
          </aside>
        </div>
      </div>
      <DriverSupport />
      <AppDownload/>
      <Footer />
    </main>
  )
}