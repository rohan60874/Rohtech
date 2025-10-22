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

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to bring your ideas to life with clean design and modern technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;