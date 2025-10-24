'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Responsive, modern websites built with latest technologies like Next.js and React for optimal performance and user experience.'
    },
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, scalable and maintainable for long-term success.'
    },
    {
      icon: '🎓',
      title: 'Academic / College Projects',
      description: 'Complete project development for college students including documentation, implementation, and deployment support.'
    },
    {
      icon: '🧠',
      title: 'IoT & Custom Software Solutions',
      description: 'Innovative IoT solutions and custom software development for unique business challenges and automation.'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Innovative digital marketing strategies to enhance your online presence and drive targeted traffic.'
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Professional video editing services to enhance your visual content and engage your audience effectively.'
    }
  ];

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
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive digital solutions to bring your ideas to life with clean design and modern technology
          </motion.p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Animated Icon */}
                <motion.div
                  className="text-5xl mb-6 flex justify-center"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>

                {/* Title with Gradient Effect */}
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 leading-relaxed flex-grow text-center"
                  whileHover={{ color: "#4B5563" }}
                >
                  {service.description}
                </motion.p>

                {/* Hover Indicator */}
                <motion.div 
                  className="w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-4 group-hover:w-20 transition-all duration-500"
                  whileHover={{ width: 80 }}
                />
              </div>

              {/* Floating Particles */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5 + 1
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-purple-100 text-lg mb-6">
              Let's discuss how we can bring your ideas to life with our expert services
            </p>
            <motion.button
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#F3F4F6" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;