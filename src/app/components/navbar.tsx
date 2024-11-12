'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Swift<span className="text-yellow-400">!</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#safety" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/#services" className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Drivers
            </Link>
            <Link href="/#safety" className="text-white hover:text-gray-300">
              Safety
            </Link>
            <Link href="/support" className="text-white hover:text-gray-300 bg-[#1E1E1E] px-4 py-2 rounded">
              Support
            </Link>
            <Link href="/joinus" className="text-white hover:text-gray-300 bg-[#1E1E1E] px-4 py-2 rounded">
              Drive with Us
            </Link>
            <Link
              href="/joinus"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#about" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link href="/#services" className="text-white hover:text-gray-300">
                Services
              </Link>
              <Link href="/#drivers" className="text-white hover:text-gray-300">
                Drivers
              </Link>
              <Link href="/#safety" className="text-white hover:text-gray-300">
                Safety
              </Link>
              <Link href="/support" className="text-white hover:text-gray-300 bg-[#1E1E1E] px-4 py-2 rounded inline-block">
                Support
              </Link>
              <Link href="/joinus" className="text-white hover:text-gray-300 bg-[#1E1E1E] px-4 py-2 rounded inline-block">
                Drive with Us
              </Link>
              <Link
                href="/joinus"
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300 inline-block"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}