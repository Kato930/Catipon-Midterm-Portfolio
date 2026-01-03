import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-10 mt-5 bg-white rounded shadow text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About This Project</h1>
      <p className="text-lg text-gray-700">
        This page was created using <strong>React Router</strong>. 
        The navigation happens instantly without a page reload!
      </p>
    </div>
  );
};

export default About;
