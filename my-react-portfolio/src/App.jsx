import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      {/* Outer wrapper for the background color */}
      <div className="min-h-screen w-full bg-[#fef6e4] dark:bg-gray-900 transition-colors duration-300">
        
        {/* Inner wrapper that CENTERS everything (Navbar, Main, Footer) */}
        <div className="max-w-6xl mx-auto flex flex-col min-h-screen bg-white dark:bg-gray-800 shadow-lg">
          
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          
          <main className="flex-grow w-full px-6 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
