import React from 'react';

const About = () => {
  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-blue-900 border-b-2 border-blue-200 pb-2">
          About These Projects
        </h1>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-green-700 mb-2">1. Physics 1: Kinematics Calculator</h2>
            <p className="text-gray-700 leading-relaxed">
              This project was developed as a practical tool for Physics 1 students to master classical mechanics. 
              It focuses on core kinematics concepts including displacement, velocity, and acceleration. 
              By implementing mathematical formulas into a React interface, I created a system that allows users 
              to input known variables and instantly solve for unknowns, helping students prepare for midterms 
              covering vectors, scalars, and equilibrium.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700 mb-2">2. Smart Environmental Monitor</h2>
            <p className="text-gray-700 leading-relaxed">
              Built using Arduino, this hardware project integrates a TMP36 temperature sensor with an I2C LCD 
              display to monitor ambient conditions in real-time. The system utilizes an RGB LED to provide 
              visual alerts and a buzzer for critical temperature warnings. This project demonstrates my ability 
              to bridge the gap between software logic and physical electronics, specifically managing I2C 
              addresses and sensor calibration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-700 mb-2">3. Pedestrian Traffic Logic</h2>
            <p className="text-gray-700 leading-relaxed">
              This complex circuit design simulates a real-world traffic scheme using an RGB LED and a 
              7-segment timer. It features a synchronized pedestrian crossing system, where a countdown 
              timer is aligned with traffic light transitions. This project highlights my logic-building skills 
              and experience with multi-component synchronization, ensuring safe pedestrian passage through 
              timed electronic signaling.
            </p>
          </div>
        </section>

      </article>
    </main>
  );
};

export default About;
