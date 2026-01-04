import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Router>
      <div className={`${isDark ? 'dark' : ''} min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        
        <div className="flex-grow">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
