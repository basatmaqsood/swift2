// components/SupportSection.tsx

import React from 'react';

const SupportSection: React.FC = () => {
  const supports = [
    {
      title: 'Driver Support',
      description: '24/7 dedicated support team for all driver needs',
      buttonText: 'Contact Support',
    },
    {
      title: 'Passenger Support',
      description: 'Quick response team for passenger assistance',
      buttonText: 'Get Help',
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">Always Here to Help</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-4xl">
        {supports.map((support, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg w-full md:w-1/2"
          >
            <h3 className="font-bold text-lg mb-2">{support.title}</h3>
            <p className="text-gray-600 mb-4">{support.description}</p>
            <button className="bg-black text-white px-4 py-2 rounded-full">
              {support.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection;
