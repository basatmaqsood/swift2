'use client'
import React, { useEffect, useState } from 'react';
import { 
  Shield, 
  Radio, 
  Map,
  Activity,
  ChevronRight,
  ChevronDown,
  Menu,
  Users,
  MapPin,
  Clock
} from 'lucide-react';
import Link from 'next/link';

const AboutHeroComplete = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // South African cities coverage
  const cities = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria'];
  const [activeCity, setActiveCity] = useState(0);

  const metrics = [
    { 
      number: "2M+", 
      label: "Monthly Rides",
      icon: <Activity className="w-4 h-4" />
    },
    { 
      number: "15K+", 
      label: "Active Drivers",
      icon: <Users className="w-4 h-4" />
    },
    { 
      number: "4.9", 
      label: "User Rating",
      icon: <Shield className="w-4 h-4" />
    },
    { 
      number: "24/7", 
      label: "Security Coverage",
      icon: <Clock className="w-4 h-4" />
    }
  ];

  const techFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security Network",
      description: "Real-time monitoring and rapid response systems across South Africa",
      status: "Operational"
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Command Centers",
      description: "State-of-the-art control rooms in major cities",
      status: "Active"
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Smart Routing AI",
      description: "Local traffic patterns and safety-optimized navigation",
      status: "Processing"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Metric rotation
    const metricInterval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    // City rotation
    const cityInterval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 2000);

    // Scroll progress
    const handleScroll = () => {
      const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(metricInterval);
      clearInterval(cityInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Fixed Navigation */}
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
                  {['English', 'Afrikaans', 'isiZulu', 'isiXhosa'].map((lang) => (
                    <Link 
                      key={lang}
                      href="#" 
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      {lang}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Security', 'Careers'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`${
                  item === 'About' 
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
            <button className="hidden md:block text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors">
              Support
            </button>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-6 space-y-4">
              {['Home', 'About', 'Services', 'Security', 'Careers', 'Support'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`block ${
                    item === 'About' 
                      ? 'text-yellow-400' 
                      : 'text-gray-300 hover:text-white'
                  } transition-colors py-2`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 
          bg-yellow-400/10 rounded-full blur-3xl transition-all duration-1000" 
        />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 
          bg-yellow-400/5 rounded-full blur-3xl transition-all duration-1000" 
        />
        
        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-10">
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
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm">
                Now in {cities[activeCity]}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Mobility in
              <span className="text-yellow-400"> South Africa</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12">
              Building a safer, more connected future through innovative technology 
              and unwavering commitment to our communities.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700
                    transition-all duration-500 transform hover:border-yellow-400/50
                    ${activeMetric === index ? 'scale-105' : 'scale-100'}`}
                >
                  <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                    {metric.icon}
                    <span className="text-3xl font-bold">{metric.number}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-medium 
                hover:bg-yellow-300 transition-all duration-300 flex items-center group">
                <span>Our Journey</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl 
                font-medium hover:bg-white/20 transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Column - Tech Display */}
          <div className={`transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                {techFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 rounded-xl p-6 hover:bg-yellow-400/10 
                      transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-400/10 rounded-lg p-3 group-hover:bg-yellow-400/20 transition-colors">
                        {React.cloneElement(feature.icon, { className: "text-yellow-400" })}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                        {feature.status}
                      </div>
                      <div className="text-yellow-400">View Details</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity Visualization */}
              <div className="mt-6 p-4 bg-gray-800/30 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Live Network Activity</span>
                  <Activity className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="h-16 flex items-end space-x-1">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-yellow-400/20 rounded-t transition-all duration-500 hover:bg-yellow-400"
                      style={{ 
                        height: `${Math.random() * 100}%`,
                        animation: `pulse 2s infinite ${i * 0.1}s` 
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start p-2">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroComplete;