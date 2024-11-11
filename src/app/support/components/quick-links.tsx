import { User, Car, CreditCard, AlertCircle } from 'lucide-react'

export default function QuickLinks() {
  return (
    <div className="bg-[#1A1F35] py-6">
      <div className="container mx-auto flex flex-wrap justify-center gap-4 px-4">
        <button className="flex items-center rounded-full bg-[#232838] px-6 py-3 text-white hover:bg-[#2A303F]">
          <User className="mr-2 h-5 w-5" />
          Account Security
        </button>
        <button className="flex items-center rounded-full bg-[#232838] px-6 py-3 text-white hover:bg-[#2A303F]">
          <Car className="mr-2 h-5 w-5" />
          Trip Issues
        </button>
        <button className="flex items-center rounded-full bg-[#232838] px-6 py-3 text-white hover:bg-[#2A303F]">
          <CreditCard className="mr-2 h-5 w-5" />
          Payment & Pricing
        </button>
        <button className="flex items-center rounded-full bg-[#232838] px-6 py-3 text-white hover:bg-[#2A303F]">
          <AlertCircle className="mr-2 h-5 w-5" />
          Emergency Support
        </button>
      </div>
    </div>
  )
}