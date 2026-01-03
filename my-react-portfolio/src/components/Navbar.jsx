import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isDark, setIsDark }) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">JC Portfolio</Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-500 transition">Projects</Link>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
