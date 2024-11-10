import { Header } from "../components/header"

import  Footer  from "../components/footer"

import BoltEarnings from "../components/earn-money"
import AppDownload from "../components/app-download"
import SupportPage from "../components/SupportPage"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col gap-16 md:gap-24">
        <SupportPage/>
        <BoltEarnings/>
        <AppDownload/>
      </main>
      <Footer />
    </div>
  )
}