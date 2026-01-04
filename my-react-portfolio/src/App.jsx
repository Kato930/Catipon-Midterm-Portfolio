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
      {/* 1. This wrapper ensures the cream background covers 100% of the screen width and height */}
      <div className="min-h-screen w-full flex flex-col bg-[#fef6e4] dark:bg-gray-900 transition-colors duration-300">
        
        {/* 2. Navbar spans the whole width */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        
        {/* 3. Main content is centered but the background stays cream to the edges */}
        <main className="flex-grow w-full flex justify-center py-8">
          <div className="w-full max-w-7xl px-4 sm:px-10 lg:px-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
        
        {/* 4. Footer spans the whole width */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
