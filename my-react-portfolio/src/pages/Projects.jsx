import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Environmental Monitor",
      tech: "ARDUINO, TMP36, I2C LCD",
      description: "An automated system tracking temperature and light levels with real-time LCD feedback.",
      image: "smart arduino.png", 
    },
    {
      title: "3-Servo Robotic Arm",
      tech: "ARDUINO, SERVO CONTROL",
      description: "A precision robotic design utilizing three servos for coordinated movement.",
      image: "servo arduino.png", 
    },
    {
      title: "Physics Kinematics Engine",
      tech: "REACT, JAVASCRIPT",
      description: "A calculator designed to solve displacement, velocity, and acceleration problems.",
      image: "sddefault.jpg", 
    }
  ];

  return (
    
    <div className="py-12 px-4 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Featured Projects
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-gray-700">
            
            <div className="h-48 bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden border-b border-gray-100 dark:border-gray-700">
              <img 
                src={`${import.meta.env.BASE_URL}${project.image}`} 
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{project.title}</h3>
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-widest mb-4 uppercase">
                {project.tech}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
