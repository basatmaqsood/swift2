'use client'

import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Shield,
  FileText,
  ChevronDown,
  Menu,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const ResourcesHeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const quickAccess = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Driver Guides",
      description: "Essential manuals and training documents",
      count: "12 Documents"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Security",
      description: "Safety protocols and emergency procedures",
      count: "8 Documents"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Legal Documents",
      description: "Policies, terms, and agreements",
      count: "6 Documents"
    }
  ];

  const popularSearches = [
    "Driver Training Manual",
    "Security Protocols",
    "Vehicle Requirements",
    "Emergency Procedures"
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 border-b border-gray-800 px-6 py-4 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo and Language */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
              Swift<span className="text-yellow-400">!</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
              >
                <img 
                  src="/api/placeholder/20/20" 
                  alt="SA Flag" 
                  className="w-5 h-5 rounded"
                />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-xl py-2 w-40">
                  <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">English</Link>
                  <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Afrikaans</Link>
                  <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">isiZulu</Link>
                  <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">isiXhosa</Link>
                </div>
              )}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Resources', 'Support'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`${
                  item === 'Resources' 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-white'
                } transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
              Download App
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Tech Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-gray-500/20">
                  {[...Array(12)].map((_, j) => (
                    <div key={j} className="border-b border-gray-500/20 h-24" />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 
            bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 
            bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Swift<span className="text-yellow-400">!</span> Resource Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access all the tools, guides, and documents you need. Your comprehensive hub for 
              success with Swift!
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search for guides, documents, or topics..."
                className="w-full pl-14 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm rounded-xl 
                  border border-gray-700 text-white placeholder-gray-400 focus:ring-2 
                  focus:ring-yellow-400 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Popular Searches */}
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <span className="text-gray-400 text-sm">Popular:</span>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full 
                    hover:bg-gray-700 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickAccess.map((item, index) => (
              <button
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-left border 
                  border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                  {React.cloneElement(item.icon, { className: "text-black" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 
                  transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{item.count}</span>
                  <ExternalLink className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 
                    transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeroSection;
