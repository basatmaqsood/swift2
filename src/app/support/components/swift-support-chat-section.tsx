import React from 'react';
import { 
  ShieldAlert, 
  MessageSquare, 
  Clock, 
  ArrowRight,
  Shield,
  PhoneCall,
  Package 
} from 'lucide-react';

const SupportChatSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm">Live Support Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            24/7 Emergency Support
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Immediate assistance when you need it most. Our dedicated support team is here to help.
          </p>
        </div>

        {/* Chat Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rider Emergency Chat */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-red-500/10 rounded-xl p-3">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Rider Emergency Chat
                  </h3>
                  <p className="text-gray-400">
                    Immediate assistance for riders in emergency situations
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Shield className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Direct line to Swift! Security Response</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>24/7 Emergency support availability</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <PhoneCall className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Immediate connection to support team</span>
                </li>
              </ul>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                <span>Start Emergency Chat</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gray-900/50 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">Support Online</span>
              </div>
              <span className="text-gray-400 text-sm">Average Response: &lt;60 seconds</span>
            </div>
          </div>

          {/* Driver Support Chat */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-yellow-400/10 rounded-xl p-3">
                  <MessageSquare className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Driver Support Chat
                  </h3>
                  <p className="text-gray-400">
                    Priority support channel for Swift! drivers
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Shield className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Priority driver assistance</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Dedicated driver support team</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <PhoneCall className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Technical & roadside assistance</span>
                </li>
              </ul>

              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                <span>Start Driver Chat</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gray-900/50 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">Support Online</span>
              </div>
              <span className="text-gray-400 text-sm">Average Response: &lt;2 minutes</span>
            </div>
          </div>

          {/* Delivery Support Chat */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-400/10 rounded-xl p-3">
                  <Package className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Delivery Support Chat
                  </h3>
                  <p className="text-gray-400">
                    Assistance for delivery-related issues and inquiries
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Shield className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Help with delivery status or delays</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>24/7 Delivery issue support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <PhoneCall className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Connect with our delivery support team</span>
                </li>
              </ul>

              <button className="w-full bg-blue-400 hover:bg-blue-300 text-gray-900 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                <span>Start Delivery Chat</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gray-900/50 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">Support Online</span>
              </div>
              <span className="text-gray-400 text-sm">Average Response: &lt;1 minute</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportChatSection;
