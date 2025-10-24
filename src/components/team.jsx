'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rohan Pawar',
      role: 'Founder & Full Stack Developer',
      photo: '/RP.PNG',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Rutik Kadam',
      role: 'Co-Founder & Developer',
      photo: '/RK.png',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Shubham Thakre',
      role: 'Full Stack Developer',
      photo: '/ST.png',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Chinmay Gawade',
      role: 'Digital Marketing Specialist',
      photo: '/images/chinmay.jpg',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Janvhi Thakur',
      role: 'Video Editor',
      photo: '/images/janvhi.jpg',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Isha Bhoite',
      role: 'Frontend Developer',
      photo: '/images/isha.jpg',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Rutik Kadam',
      role: 'Co-Founder & Developer',
      photo: '/images/rutik2.jpg',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-teal-500 to-blue-500'
    },
    {
      name: 'Shubham Prajapati',
      role: 'Frontend Developer',
      photo: '/images/shubham.jpg',
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      },
      color: 'from-yellow-500 to-orange-500'
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
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.4
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6
      }
    }
  };

  const SocialIcon = ({ platform, link, delay }) => (
    <motion.a
      href={link}
      className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg relative overflow-hidden group"
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 300 }}
    >
      {/* Background based on platform */}
      <div className={`absolute inset-0 ${
        platform === 'linkedin' ? 'bg-blue-600' :
        platform === 'instagram' ? 'bg-gradient-to-br from-purple-600 to-pink-600' :
        'bg-gray-800'
      } group-hover:opacity-90 transition-opacity duration-300`} />
      
      {/* Icon */}
      <span className="text-white font-semibold text-sm relative z-10">
        {platform === 'linkedin' ? 'in' : platform === 'instagram' ? 'IG' : 'GH'}
      </span>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </motion.a>
  );

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, 50, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
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
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The passionate individuals behind ROHTECH.IN who work tirelessly 
            to bring your digital dreams to life
          </motion.p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                {/* Profile Image */}
                <motion.div
                  className="relative mb-6"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    {member.photo ? (
                      <Image 
                        src={member.photo} 
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold`}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  
                  {/* Online Status Indicator */}
                  <motion.div
                    className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${member.color} rounded-full opacity-0 group-hover:opacity-100`}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </motion.div>

                {/* Member Info */}
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                
                <motion.p 
                  className={`text-transparent bg-gradient-to-r ${member.color} bg-clip-text font-medium mb-6 leading-tight`}
                  whileHover={{ scale: 1.02 }}
                >
                  {member.role}
                </motion.p>
                
                {/* Social Links */}
                <motion.div 
                  className="flex justify-center space-x-3 mt-auto"
                  variants={socialVariants}
                >
                  <SocialIcon platform="linkedin" link={member.social.linkedin} delay={0.1} />
                  <SocialIcon platform="instagram" link={member.social.instagram} delay={0.2} />
                  <SocialIcon platform="github" link={member.social.github} delay={0.3} />
                </motion.div>

                {/* Hover Effect Line */}
                <motion.div 
                  className="w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-4 group-hover:w-16 transition-all duration-500"
                  whileHover={{ width: 64 }}
                />
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '8+', label: 'Team Members' },
            { number: '50+', label: 'Projects Done' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;