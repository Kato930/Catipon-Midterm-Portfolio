import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main className="flex-grow">
        
        <div id="home"><Home /></div>
        <div id="about" className="bg-gray-50 dark:bg-gray-800 py-10"><About /></div>
        <div id="projects"><Projects /></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
