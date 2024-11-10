// components/ServiceGrid.js

import { FaShieldAlt, FaParking, FaCar, FaWrench, FaClipboardList, FaUserTie } from 'react-icons/fa';

export default function ServiceGrid() {
  const services = [
    {
      icon: <FaShieldAlt size={30} className="text-yellow-500" />,
      title: "24/7 Emergency Security",
      description: "Round-the-clock dedicated security response team for your safety.",
      features: ["Emergency response button", "Real-time incident support", "GPS tracking security"],
    },
    {
      icon: <FaParking size={30} className="text-yellow-500" />,
      title: "Secure Parking",
      description: "Free access to secure parking facilities across the city.",
      features: ["24/7 secured facilities", "No parking fees", "Multiple locations"],
    },
    {
      icon: <FaCar size={30} className="text-yellow-500" />,
      title: "Free Car Wash",
      description: "Keep your vehicle pristine with our complimentary car wash service.",
      features: ["2 free washes monthly", "Professional cleaning", "Interior & exterior"],
    },
    {
      icon: <FaWrench size={30} className="text-yellow-500" />,
      title: "Breakdown Support",
      description: "Swift roadside assistance whenever you need it.",
      features: ["24/7 availability", "Quick response time", "Professional service"],
    },
    {
      icon: <FaClipboardList size={30} className="text-yellow-500" />,
      title: "Smart Lost & Found",
      description: "Efficient system for handling passenger items.",
      features: ["Convenient drop-off points", "Item collection service", "Automated tracking"],
    },
    {
      icon: <FaUserTie size={30} className="text-yellow-500" />,
      title: "Driver Support Hub",
      description: "Dedicated support for all your needs.",
      features: ["24/7 assistance", "Training resources", "Career development"],
    },
  ];

  return (
    <div className="py-12 px-4 md:px-8 bg-gray-50 text-center" id='ecosystem'>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">The Swift! Ecosystem</h2>
      <p className="text-gray-600 mb-10">Everything you need to succeed, all in one place</p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 rounded-full p-3 mr-3">
                {service.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-left">{service.description}</p>
            <ul className="text-gray-600 text-left space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm">• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
