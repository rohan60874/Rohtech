const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rohan Pawar',
      role: 'Founder & Full Stack Developer',
      photo: '/RP.PNG', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    },
    {
      name: 'Rutik Kadam',
      role: 'Co-Founder & Developer',
      photo: '/RK.png', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    },
    {
      name: 'Shubham Thakre',
      role: 'Full Stack Developer',
      photo: '/ST.png', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    },
    {
      name: 'Chinmay Gawade',
      role: 'Digital Marketing Specialist',
      photo: '/images/rutik.jpg', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    },
    {
      name: 'Janvhi Thakur',
      role: 'Video Editor',
      photo: '/images/rutik.jpg', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    },
    {
      name: 'Isha Bhoite',
      role: 'Frontend Developer',
      photo: '/images/rutik.jpg', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    },
    {
      name: 'Rutik Kadam',
      role: 'Co-Founder & Developer',
      photo: '/images/rutik.jpg', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    },
    {
      name: 'Shubham Prajapati',
      role: 'Frontend Developer',
      photo: '/images/rutik.jpg', // Replace with actual photo path
      social: {
        linkedin: '#',
        instagram: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals behind ROHTECH.IN who work tirelessly 
            to bring your digital dreams to life
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                {member.photo ? (
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  member.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-medium mb-6">
                {member.role}
              </p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
                >
                  <span className="text-sm font-semibold">in</span>
                </a>
                <a 
                  href={member.social.instagram}
                  className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300"
                >
                  <span className="text-sm font-semibold">IG</span>
                </a>
                <a 
                  href={member.social.github}
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition duration-300"
                >
                  <span className="text-sm font-semibold">GH</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;