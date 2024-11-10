import React from 'react';

function WhyChooseSwift() {
  const features = [
    {
      icon: '💰',
      title: 'Better Earnings',
      description: 'Higher rates and lower commission fees',
    },
    {
      icon: '🛡️',
      title: 'Full Support',
      description: 'Comprehensive ecosystem of services',
    },
    {
      icon: '⭐',
      title: 'Growth Options',
      description: 'Career development opportunities',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Swift!</h2>
      <p className="text-gray-700 mb-12">Join thousands of successful drivers in our ecosystem</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8">
            <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">
              <h3 className="text-2xl font-bold">{feature.icon}</h3>
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseSwift;