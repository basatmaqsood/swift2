'use client'
import React, { useEffect, useState } from 'react';
import { Briefcase, TrendingUp, Users, ArrowRight, Shield } from 'lucide-react';

// Data structure for job categories
const jobCategories = [
  {
    title: "Safety Officers",
    description: "Armed response and emergency support specialists",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Operations",
    description: "Support roles ensuring smooth service delivery",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Customer Support",
    description: "Dedicated team providing excellent service",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Management",
    description: "Leadership roles driving growth and innovation",
    icon: <Briefcase className="w-6 h-6" />
  }
];

const MissionSection = () => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const counterElement = document.getElementById('counter-section');
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in milliseconds
      const steps = 50;
      const increment = 1000 / steps;
      const stepTime = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= 1000) {
          setCount(1000);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div className="bg-white py-24">
      {/* Component JSX remains the same as previous artifact */}
    </div>
  );
};

export default MissionSection;
