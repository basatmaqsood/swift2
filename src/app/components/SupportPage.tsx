// pages/support.tsx
'use client'
import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can I book a cab?',
    answer: 'You can book a cab by logging into your Swift account, selecting your pickup and drop-off locations, and choosing a suitable cab option.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and online payments via our secure payment gateway.',
  },
  {
    question: 'Can I cancel my booking?',
    answer: 'Yes, you can cancel your booking within the allowed time frame specified in our cancellation policy.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach us via email at support@swift.com or call us at +123456789.',
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">How can we help you?</h1>

        {/* FAQs Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3
                  className="text-lg font-medium text-gray-700 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="text-gray-500">{openIndex === index ? '-' : '+'}</span>
                </h3>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Didn&apos;t find your answer?</h2>
          <p className="text-xl text-gray-700 mb-4">Ask your question here. We will reach out to you shortly.</p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
              <textarea
                id="message"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Write your message"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Customer Support Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customer Support Details</h2>
          <div className="space-y-2 text-gray-700">
            <p>Email: <a href="mailto:support@swift.com" className="text-blue-500">support@swift.com</a></p>
            <p>Phone: +123456789</p>
            <p>Hours: Mon - Fri, 9 AM - 6 PM</p>
            <p>Location: 123 Swift Street, Washington, D.C., USA</p>
          </div>
        </section>
      </div>
    </div>
  );
}
