// components/FeaturesSection.tsx

import React from 'react';
import { FaBolt, FaDollarSign, FaStar } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaBolt className="text-4xl text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Average pickup under 5 minutes. Our drivers are always nearby.',
    },
    {
      icon: <FaDollarSign className="text-4xl text-yellow-500" />,
      title: 'Best Value',
      description: 'Competitive rates with no hidden fees or surge pricing.',
    },
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      title: 'Premium Service',
      description: 'Professional drivers and quality vehicles guaranteed.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg border-t-4 border-yellow-500 w-full md:w-1/3"
        >
          <div>{feature.icon}</div>
          <h3 className="font-bold text-lg mt-4 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
