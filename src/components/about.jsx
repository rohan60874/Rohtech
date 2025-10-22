import Image from 'next/image';

const AboutSection = () => {
  const technologies = ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB'];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About ROHTECH.IN
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a passionate team of developers and designers dedicated to creating 
              exceptional digital experiences. Our mission is to bridge the gap between 
              innovative ideas and practical digital solutions.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses and students with cutting-edge digital solutions 
                that drive growth, innovation, and success in the digital world.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading partner for digital transformation, known for 
                quality, reliability, and innovative solutions.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Founders
            </h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image src="/RP.png" alt="Rohan Pawar" width={96} height={96} className="rounded-full" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Rohan Pawar</h4>
                <p className="text-purple-600 font-medium">Founder & Full Stack Developer</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image src="/RK.png" alt="Rutik Kadam" width={96} height={96} className="rounded-full" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Rutik Kadam</h4>
                <p className="text-blue-600 font-medium">Co-Founder & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;