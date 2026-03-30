import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Engineering Data.<br />
          Architecting Systems.<br />
          <span className="hero-highlight">Solving Complex Problems.</span>
        </h1>
        <p className="hero-subtitle">
          I’m Quint, a Computer Science senior at UT Dallas specializing in building robust backend infrastructure, scalable data pipelines, and intelligent AI applications. Bilingual in English and Spanish, I translate complex technical challenges into efficient, high-impact solutions.
        </p>
        <p className="hero-availability">Available for 2026 New Grad & Summer Internship roles.</p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Check out my GitHub</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="abstract-shape"></div>
      </div>
    </section>
  );
};

export default Hero;
