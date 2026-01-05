import React from 'react';

const About = () => {
  return (
    
    <main className="max-w-5xl mx-auto">
      <article className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400 border-b-4 border-blue-100 dark:border-blue-900 pb-3">
          About My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "3-Servo Robotic Arm", desc: "This hardware-focused project involved designing and programming a robotic arm utilizing three high-torque servos. coordinatng multi-axis movement through Arduino." },
            { title: "Physics Kinematics Engine", desc: "Developed to assist students in classical mechanics, this React-based calculator solves for displacement, velocity, and acceleration variables." },
            { title: "Smart Environmental Monitor", desc: "Using a TMP36 sensor and an I2C-enabled LCD, it monitors temperature and light levels, providing instant feedback through display and RGB LED." }
          ].map((item, i) => (
            <section key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wide">
                {item.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};

export default About;
