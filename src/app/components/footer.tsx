import Link from 'next/link'
import { Facebook, Twitter } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-[#0F1629] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold text-white">
            Swift<span className="text-yellow-400">!</span>
          </Link>
        </div>
        <p className="text-gray-400 max-w-md mb-8">
          Proudly South African e-hailing service revolutionizing transportation with safety and innovation.
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}