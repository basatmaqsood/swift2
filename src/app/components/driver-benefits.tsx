import { DollarSign, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DriverBenefits() {
  return (
    <section className="bg-black py-16" id='safety'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Drive with Swift!</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join South Africa's most driver-focused e-hailing platform. Enjoy better earnings, comprehensive support, and exclusive benefits.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <DollarSign className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Better Earnings</h3>
            <p className="text-gray-400">
              Competitive rates and lower commission fees
            </p>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">24/7 Security</h3>
            <p className="text-gray-400">
              Armed response and secure facilities
            </p>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Star className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Premium Benefits</h3>
            <p className="text-gray-400">
              Free parking, car wash, and more
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href='/joinus' className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-4 text-lg  rounded-lg">
            Start Driving Today
          </Link>
        </div>
      </div>
    </section>
  )
}