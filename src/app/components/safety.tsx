import { Shield, Search, CheckCircle } from 'lucide-react'

export default function Safety() {
  return (
    <section className="bg-black py-16" id='safety'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Your Safety Comes First</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At Swift, we prioritize your safety with comprehensive features designed to protect and support our drivers and passengers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Security</h3>
            <p className="text-gray-400">
              Ensuring a secure environment with real-time monitoring and armed response.
            </p>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Search className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Lost & Found</h3>
            <p className="text-gray-400">
              Helping you recover lost items with our efficient lost and found service.
            </p>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <CheckCircle className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Driver Vetting</h3>
            <p className="text-gray-400">
              Carefully vetted drivers for a safe and reliable journey every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
