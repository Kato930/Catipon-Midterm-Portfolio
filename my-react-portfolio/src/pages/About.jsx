import React from 'react';

const About = () => {
  return (
    <main className="container mx-auto p-4 max-w-5xl">
      <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-bold mb-8 text-blue-900 border-b-4 border-blue-100 pb-3">
          About My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wide">
              3-Servo Robotic Arm
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              This hardware-focused project involved designing and programming a robotic arm utilizing three high-torque servos. The primary challenge was coordinating multi-axis movement through Arduino, ensuring precise positioning and smooth transitions. This project demonstrates my proficiency in physical computing and complex logic synchronization between software commands and mechanical hardware.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wide">
              Physics Kinematics Engine
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Developed to assist students in classical mechanics, this React-based calculator solves for displacement, velocity, and acceleration variables. By implementing kinematic equations into an interactive web interface, I created a tool that handles vector calculations and scalars, bridging my interests in data science and fundamental physics 1 concepts.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wide">
              Smart Environmental Monitor
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              This system serves as a real-time tracking station for ambient conditions. Using a TMP36 sensor and an I2C-enabled LCD, it monitors temperature and light levels, providing instant feedback through both the display and an RGB LED warning system. It highlights my ability to manage I2C protocols and sensor calibration for accurate data reporting.
            </p>
          </section>
        </div>

      </article>
    </main>
  );
};

export default About;
