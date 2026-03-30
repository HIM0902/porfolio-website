import React, { useEffect } from 'react';
import './App.css';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  // Add dark mode styling globally
  useEffect(() => {
    document.title = "Quint | Software & Data Engineer";
  }, []);

  return (
    <div className="app-container">
      <div className="background-gradient"></div>
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
