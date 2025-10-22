"use client";
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentGradient, setCurrentGradient] = useState(0);
  
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        background: gradients[currentGradient],
        transition: 'background 1s ease-in-out'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Background image (subtle) */}
      <img
        src="/bg-hero.svg"
        alt="abstract background"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />
      <div className="text-center text-white relative z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          We Build Modern Websites & Powerful Software Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Transforming ideas into digital reality with cutting-edge technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
            View Projects
          </button>
        </div>
      </div>
      
      {/* Animated background elements */}
      
    </section>
  );
};

export default HeroSection;