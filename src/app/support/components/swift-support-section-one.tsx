import React from 'react';
import { 
  UserCircle, 
  Car, 
  Package,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const SupportSectionOne = () => {
  const supportCategories = [
    {
      icon: <UserCircle className="w-6 h-6" />,
      title: "Rider Support",
      description: "Get help with your rides, payments, and account",
      link: "/support#ticket",
      commonIssues: [
        "Track current ride",
        "Payment methods",
        "Ride history"
      ]
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Driver Support",
      description: "Access driver-specific support and resources",
      link: "/support#ticket",
      commonIssues: [
        "Earnings support",
        "Vehicle assistance",
        "Account verification"
      ]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Delivery Support",
      description: "Resolve delivery-related queries and tracking",
      link: "/support#ticket",
      commonIssues: [
        "Track package",
        "Delivery status",
        "Collection points"
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href='/' className="text-2xl font-bold text-white">
                Swift<span className="text-yellow-400">!</span>
              </Link>
              <div className="px-3 py-1 bg-yellow-400/10 rounded-full">
                <span className="text-sm font-medium text-yellow-400">Support</span>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </nav>
              <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
                Login
              </button>
              <Link href='/joinus' className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm">24/7 Support Available</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Can We Help
            <span className="text-yellow-400">?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find quick answers, contact our support team, or browse through our help resources
          </p>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCategories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 group"
            >
              <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                {React.cloneElement(category.icon, { className: "text-gray-900" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {category.description}
              </p>
              {/* Common Issues */}
              <ul className="space-y-2 mb-4">
                {category.commonIssues.map((issue, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    {issue}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-yellow-400 font-medium">
                <span>Get help</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSectionOne;
