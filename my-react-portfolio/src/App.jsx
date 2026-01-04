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
    <div className={`${isDark ? 'dark' : ''} min-h-screen flex flex-col bg-white dark:bg-gray-900`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main className="flex-grow">
        {/* We are showing Home directly to bypass all Routing errors */}
        <Home />
        <hr className="my-10 border-gray-200" />
        <About />
        <hr className="my-10 border-gray-200" />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
