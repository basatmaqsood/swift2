'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQsSection = () => {
  const [riderFAQOpen, setRiderFAQOpen] = useState<number | null>(null);
  const [driverFAQOpen, setDriverFAQOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number, type: 'rider' | 'driver') => {
    if (type === 'rider') {
      setRiderFAQOpen(riderFAQOpen === index ? null : index);
    } else {
      setDriverFAQOpen(driverFAQOpen === index ? null : index);
    }
  };

  const riderFAQs = [
    { question: 'How do I start a ride?', answer: 'To start a ride, simply open the app, enter your destination, and select a vehicle type.' },
    { question: 'What if my ride is late?', answer: 'You can contact the driver or report the delay through the app for assistance.' },
    { question: 'How do I report an issue during a ride?', answer: 'Use the in-app support feature to immediately report any issues.' },
  ];

  const driverFAQs = [
    { question: 'How do I accept ride requests?', answer: 'Log in to the driver app and toggle your availability. Ride requests will appear as notifications.' },
    { question: 'What are the payment terms for drivers?', answer: 'Payments are processed weekly. You can view details in the “Earnings” section of the app.' },
    { question: 'How can I get support for app issues?', answer: 'Reach out through the driver support chat available 24/7.' },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions for both riders and drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rider FAQs */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Rider FAQs</h3>
            <div className="space-y-4">
              {riderFAQs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleAccordion(index, 'rider')}
                    className="flex items-center justify-between w-full text-left text-gray-300 focus:outline-none"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {riderFAQOpen === index ? (
                      <ChevronUp className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {riderFAQOpen === index && (
                    <p className="mt-4 text-gray-400">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Driver FAQs */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Driver FAQs</h3>
            <div className="space-y-4">
              {driverFAQs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleAccordion(index, 'driver')}
                    className="flex items-center justify-between w-full text-left text-gray-300 focus:outline-none"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {driverFAQOpen === index ? (
                      <ChevronUp className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {driverFAQOpen === index && (
                    <p className="mt-4 text-gray-400">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
