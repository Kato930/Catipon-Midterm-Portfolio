import React, { useState } from 'react';
import ContactAside from '../components/ContactAside';

const Home = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <article id="main" className="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
        
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-4 rounded-xl mb-6 border border-blue-200 dark:border-blue-800 font-medium">
          Welcome to my page!
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center dark:text-white">
            <span className="bg-green-600 text-white text-xs uppercase tracking-widest px-2 py-1 rounded mr-3">Status: Live</span>
            Main Content
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            Welcome to my portfolio! This space contains <strong className="font-bold text-blue-600 dark:text-blue-400">information about my background</strong> and my technical <mark className="bg-yellow-200 dark:bg-yellow-800 dark:text-white rounded px-1">Projects.</mark>
          </p>
          
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-gray-100 dark:border-gray-700 pb-2 dark:text-white">Introduction</h3>

          <div className="w-full max-w-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md mb-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}image.jpg`} 
              className="w-full h-64 object-cover" 
              alt="Jon Catipon Profile" 
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic text-center">Jon Catipon - Profile Picture</p>
            </div>
          </div>
        </section>

        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
          <h2 className="border-b border-gray-100 dark:border-gray-800">
            <button 
              className="w-full text-left p-4 font-semibold bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center transition duration-200 dark:text-white"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <span>Info about my background</span>
              <span className="text-xl text-blue-500">{isAccordionOpen ? '−' : '+'}</span>
            </button>
          </h2>
          
          {isAccordionOpen && (
            <div className="p-6 text-gray-700 dark:text-gray-300 leading-relaxed animate-in fade-in duration-500">
              <p>
                As a Computer Science student, I have focused my studies on building a strong foundation in both software development and logic-based problem solving. My journey so far has taken me from learning the basics of programming to developing dynamic web applications using React and Tailwind CSS. I enjoy the challenge of turning complex concepts—like the kinematics and vector mathematics I study in Physics 1—into functional digital tools like my Kinematics Engine. Beyond standard web development, I have a deep interest in how software interacts with the physical world through hardware. This is best seen in my Arduino projects, where I have successfully built and programmed a 3-Servo Robotic Arm and a Smart Environmental Monitor. These projects required me to master I2C communication protocols, sensor calibration for components like the TMP36, and precise multi-axis logic to ensure smooth mechanical movement. My technical toolkit currently includes JavaScript, React, and SQL for data management, alongside my hands-on experience with electronics. I am constantly looking for ways to bridge the gap between hardware data and software analysis, as I eventually hope to transition into a career as a Data Scientist. For now, I am dedicated to refining my skills through practical projects that challenge my understanding of both code and the physical laws that govern it.
              </p>
              <span className="block mt-4 text-xs font-bold text-gray-400 uppercase tracking-tighter">
                Updated: <time dateTime="2025-11-17">Nov 17, 2025</time>
              </span>
            </div>
          )}
        </div>
      </article>

      <ContactAside />
    </main>
  );
};

export default Home;
