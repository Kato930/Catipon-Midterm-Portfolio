import React from 'react';

const Projects = () => {
  const myWork = [
    { 
      title: "Smart Environmental Monitor", 
      tech: "Arduino, TMP36, I2C LCD", 
      desc: "An automated system tracking temperature and light levels with real-time LCD feedback." 
    },
    { 
      title: "3-Servo Robotic Arm", 
      tech: "Arduino, Servo Control", 
      desc: "A precision robotic design utilizing three servos for coordinated movement." 
    },
    { 
      title: "Physics Kinematics Engine", 
      tech: "React, JavaScript", 
      desc: "A calculator designed to solve displacement, velocity, and acceleration problems." 
    }
  ];

  return (
    <section className="py-10">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {myWork.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">{project.title}</h3>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">{project.tech}</span>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
