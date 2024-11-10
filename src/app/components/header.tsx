'use client'
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          Swift<span className="text-yellow-400">!</span>
        </Link>
        
        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-black focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/support" className="text-sm font-medium text-gray-600 hover:text-black">
            Support
          </Link>
          <Link href="/#ecosystem" className="text-sm font-medium text-gray-600 hover:text-black">
            Our Ecosystem
          </Link>
          <Link href="#" className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-2xl">
            Join Now
          </Link>
        </nav>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4 py-4 px-4">
            <li>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black" onClick={() => setIsOpen(false)}>
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black" onClick={() => setIsOpen(false)}>
                Our Ecosystem
              </Link>
            </li>
            <li>
              <Link href="#" className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-2xl block text-center" onClick={() => setIsOpen(false)}>
                Join Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
