const ProjectsSection = () => {
  const projects = [
    {
      title: 'Interior Design Website',
      description: 'A modern, responsive website for interior design services with portfolio showcase and client booking system.',
      image: '/images/interior-design.jpg', // Replace with actual image
      tags: ['Next.js', 'React', 'Tailwind CSS']
    },
    {
      title: 'E-commerce Website',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and secure payment integration.',
      image: '/images/ecommerce.jpg', // Replace with actual image
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'JD Caffe Website',
      description: 'Creative website for JD Caffe featuring menu, location, and online reservation system.',
      image: '/jd1.jpg', // Replace with actual image
      tags: ['Next.js', 'Framer Motion', 'CSS3']
    },
    {
      title: 'College Management System',
      description: 'Comprehensive management system for colleges including student, faculty, and course management modules.',
      image: '/images/college-management.jpg', // Replace with actual image
      tags: ['MERN Stack', 'Redux', 'Material UI']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successfully delivered projects that showcase 
            our expertise and commitment to quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  'Project Image'
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;