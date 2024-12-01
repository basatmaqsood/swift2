import React from 'react';
import { ArrowRight } from 'lucide-react';

const CareersHeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-screen relative">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Swift<span className="text-yellow-400">!</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-gray-300 transition-colors">Support</button>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mt-24">
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Shape the Future of</span>
            <br />
            <span className="text-yellow-400">Transportation</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Join our mission to revolutionize mobility in South Africa. 
            Build innovative solutions that connect communities and create opportunities.
          </p>
          
          <button className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-yellow-300 transition-all duration-300 group">
            <span>Explore Opportunities</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersHeroSection;
