'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const technologies = ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB'];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "backOut"
      }
    })
  };

  const founderVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ROHTECH.IN</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              We are a passionate team of developers and designers dedicated to creating 
              exceptional digital experiences. Our mission is to bridge the gap between 
              innovative ideas and practical digital solutions.
            </motion.p>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold text-gray-800 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Our Mission
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6 pl-5 border-l-2 border-purple-200"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                To empower businesses and students with cutting-edge digital solutions 
                that drive growth, innovation, and success in the digital world.
              </motion.p>
              
              <motion.h3 
                className="text-2xl font-semibold text-gray-800 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Our Vision
              </motion.h3>
              <motion.p 
                className="text-gray-600 pl-5 border-l-2 border-blue-200"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                To become the leading partner for digital transformation, known for 
                quality, reliability, and innovative solutions.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    custom={index}
                    variants={techVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      backgroundColor: "#8B5CF6",
                      color: "white"
                    }}
                    className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 px-4 py-2 rounded-full font-medium cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Founders */}
          <motion.div 
            className="relative"
            variants={founderVariants}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <motion.h3 
                className="text-2xl font-semibold text-gray-800 mb-6 text-center"
                whileInView={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Founders
              </motion.h3>
              
              <div className="space-y-8">
                {/* Founder 1 */}
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-purple-300 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image 
                      src="/RP.png" 
                      alt="Rohan Pawar" 
                      width={96} 
                      height={96} 
                      className="rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.h4 
                    className="text-xl font-semibold text-gray-800 mb-1"
                    whileHover={{ color: "#7C3AED" }}
                  >
                    Rohan Pawar
                  </motion.h4>
                  <motion.p 
                    className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Founder & Full Stack Developer
                  </motion.p>
                </motion.div>
                
                {/* Founder 2 */}
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-300 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Image 
                      src="/RK.png" 
                      alt="Rutik Kadam" 
                      width={96} 
                      height={96} 
                      className="rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.h4 
                    className="text-xl font-semibold text-gray-800 mb-1"
                    whileHover={{ color: "#2563EB" }}
                  >
                    Rutik Kadam
                  </motion.h4>
                  <motion.p 
                    className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Co-Founder & Developer
                  </motion.p>
                </motion.div>
              </div>
              
              {/* Decorative Element */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;