import { Header } from "./components/header"
import  Hero  from "./components/hero"
import  Services  from "./components/services"
import  Footer  from "./components/footer"
import ApplicationProcess from './components/ApplicationProcess'
import WhyChoseSwift from './components/WhyChoseSwift'
import JoinSwift from './components/JoinSwift'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col gap-16 md:gap-24">
        <Hero />
        <Services />
        <ApplicationProcess/>
        <WhyChoseSwift/>
        <JoinSwift/>
        
      </main>
      <Footer />
    </div>
  )
}