"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating animation variants
  const floatingAnimation = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Text reveal animation
  const textReveal = {
    hidden: { 
      opacity: 0, 
      y: 100,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Button hover animation
  const buttonHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* 🔹 Enhanced Background Video with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Multi-layer gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/20 to-blue-900/30 mix-blend-overlay"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div> */}
        
        {/* Animated light sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </div>

      {/* 🔹 Enhanced Hero Content */}
      <motion.div
        className="text-center text-white relative z-10 px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Main Heading with Enhanced Animation */}
        <motion.div className="mb-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
            variants={textReveal}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              We Build
            </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Digital Experiences
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Enhanced Subheading */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={textReveal}
        >
          <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Crafting{" "}
          </span>
          <motion.span
            className="text-white font-semibold drop-shadow-lg"
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 30px rgba(139, 92, 246, 0.7)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            innovative solutions
          </motion.span>
          <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            {" "}that transform your digital presence
          </span>
        </motion.p>

        {/* Enhanced Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={containerVariants}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10 text-white flex items-center gap-2">
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%', skewX: '-15deg' }}
              whileHover={{ x: '200%', skewX: '-15deg' }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>

          <motion.button
            className="group relative border-2 border-white/30 bg-white/10 backdrop-blur-lg px-10 py-4 rounded-2xl font-semibold text-lg text-white overflow-hidden"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%', skewX: '-15deg' }}
              whileHover={{ x: '200%', skewX: '-15deg' }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🔹 Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 🔹 Animated Circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-cyan-400/30 pointer-events-none"
        variants={floatingAnimation}
        animate="floating"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-2 border-purple-400/20 pointer-events-none"
        variants={floatingAnimation}
        animate="floating"
        transition={{ delay: 1 }}
      />

      {/* 🔹 Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/70 text-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;