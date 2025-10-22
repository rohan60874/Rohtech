"use client";

import { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js optimized image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ✅ Logo Section */}
        <div className="flex items-center space-x-3">
          {/* <Image
            src="/logo2.png"
            alt="Rohtech logo"
            width={100}
            height={30}
            className="block"
          /> */}
          <h1 className="hidden md:inline-block text-2xl font-bold text-blue-600">Rohtech.in</h1>
        </div>

        {/* ✅ Mobile menu button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* ✅ Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="home" className="hover:text-blue-600">Home</a></li>
          <li><a href="about" className="hover:text-blue-600">About</a></li>
          <li><a href="service" className="hover:text-blue-600">Services</a></li>
          <li><a href="project" className="hover:text-blue-600">Projects</a></li>
          <li><a href="team" className="hover:text-blue-600">Team</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-3 shadow-md">
          <li><a href="#" className="block hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="block hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="block hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="block hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
