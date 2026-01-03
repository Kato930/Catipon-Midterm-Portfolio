import React, { useState } from 'react';
import ContactAside from '../components/ContactAside';

const Home = () => {
  // State for the accordion functionality
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  return (
    <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      
      {/* Main Content Article (Takes up 2/3 of the width) */}
      <article id="main" className="col-span-1 md:col-span-2 bg-yellow-100 p-4 rounded-lg shadow-sm">
        
        {/* Alert Box */}
        <div className="bg-blue-200 text-blue-900 p-3 rounded mb-4 border border-blue-300">
          Welcome to my page!
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 flex items-center">
            <span className="bg-green-500 text-white text-sm px-2 py-1 rounded mr-2">Main Content!</span>
          </h2>
          <p className="mb-4 text-gray-800">
            Welcome to my page! This page contains <strong className="font-extrabold">information about me</strong> and my <mark className="bg-yellow-300 rounded px-1">Projects.</mark>
          </p>
          
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-gray-300 pb-1">Introduction</h3>

          {/* Profile Card */}
          <div className="w-80 border border-gray-300 rounded-lg shadow-md mb-6 bg-white overflow-hidden">
            {/* NOTE: Make sure to copy your 'image.jpg' into the 'public' folder 
               of your new project for this image to show up! 
            */}
            <img src="/image.jpg" className="w-full h-auto" alt="Profile" />
            <div className="p-3">
              <p className="text-sm text-gray-600">My profile picture</p>
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
          <h2 className="border-b border-gray-300">
            <button 
              className="w-full text-left p-3 font-semibold bg-gray-100 hover:bg-gray-200 flex justify-between items-center transition duration-150"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <span>Click to expand - Info about this page</span>
              <span className="text-xs text-gray-500">{isAccordionOpen ? '▼' : '▲'}</span>
            </button>
          </h2>
          
          {/* Conditional rendering for the accordion body */}
          {isAccordionOpen && (
            <div className="p-4 bg-white text-gray-700 leading-relaxed">
              <p>
                This website was created as part of my journey as a Computer Science student. I am studying programming, databases, and data analysis, and I plan to pursue a career in data science. I enjoy working with Python, SQL, and other tools that help me understand data and create solutions based on real information. This page shows some of the projects and topics I am learning. 
                <span className="block mt-2 text-sm text-gray-500">
                  <time dateTime="2025-11-17">Nov 17</time>
                </span>
              </p>
            </div>
          )}
        </div>

      </article>

      {/* Sidebar (Contact Component) */}
      <ContactAside />

    </main>
  );
};

export default Home;
