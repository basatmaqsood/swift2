import { Header } from './components/header'
import  Hero  from './components/hero'
import { Benefits } from './components/benefits'
import { Steps } from './components/steps'
import { Features } from './components/features'
import { FAQ } from './components/faq'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <Steps /> 
      <FAQ />
      <Footer />
    </main>
  
  )
}