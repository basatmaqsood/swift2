import { Shield, Users, Car } from 'lucide-react'

export default function Features() {
  return (
    <section className="bg-[#0F1629] py-16" id='services'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Swift!</h2>
          <p className="text-gray-400">Experience the difference with our premium features</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-[#1A1F35] p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">24/7 Armed Security</h3>
            <p className="text-gray-400">
              Dedicated security teams ensuring your safety around the clock.
            </p>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Users className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Professional Drivers</h3>
            <p className="text-gray-400">
              Highly trained and vetted drivers for your peace of mind.
            </p>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Car className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Quality Vehicles</h3>
            <p className="text-gray-400">
              Latest model vehicles maintained to the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}