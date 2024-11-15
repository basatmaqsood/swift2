// HeroSection.jsx
'use client'
import React, { useState } from 'react';
import { ChevronDown, Menu, Globe } from 'lucide-react';
import background from '../images/2.png'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Navigation */}
      <nav className="fixed w-full bg-gray-900/95 border-b border-gray-800 px-6 py-4 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo and Language */}
          <div className="flex items-center space-x-6">
            <Link href='/' className="text-2xl font-bold text-white">
              Swift<span className="text-yellow-400">!</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
              >
                <Globe className="w-6 h-6" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-xl py-2 w-40 z-50">
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">English</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Afrikaans</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">isiZulu</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">isiXhosa</a>
                </div>
              )}
            </div>
          </div>

          {/* Center: Navigation Links (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <a href="#services" className="text-gray-300 hover:text-white">Services</a>
            <a href="#drivers" className="text-gray-300 hover:text-white">Drivers</a>
            <a href="#safety" className="text-gray-300 hover:text-white">Safety</a>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center space-x-4">
            <Link href='/support' className="hidden md:block text-white hover:bg-gray-800 px-4 py-2 rounded-lg">
              Support
            </Link>
            <Link href='/joinus' className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300">
              Register
            </Link>
            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative h-screen w-full">
        {/* Background Image Area */}
        <div className="absolute inset-0">
          {/* Image placeholder - replace src with your actual image */}
          <Image
            src={background} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-gray-900/60" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center ">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
                Moving
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-green-500 via-[#DE3831] to-[#002395] text-transparent bg-clip-text"> South </span>
                  <span className="bg-gradient-to-r from-yellow-400 via-[#DE3831] to-[#002395] text-transparent bg-clip-text">Africa</span>
                </div>
                <span className="block">Forward</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Your safe ride home, just a tap away.
              </p>

              {/* CTAs - Always Inline */}
              <div className="flex items-center space-x-4">
                <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-medium text-base hover:bg-yellow-300 transition-colors">
                  Get App
                </button>
                <button className="bg-gray-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-gray-700 transition-colors">
                  Book a Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
