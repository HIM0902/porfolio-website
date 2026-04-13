import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">Available for 2026 Roles</div>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-highlight">John Quintana</span>.<br/>
            Software & Data Engineer.
          </h1>
          <p className="hero-subtitle">
            Computer Science senior at UT Dallas specializing in building robust backend infrastructure, scalable ML data pipelines, and intelligent AI applications. I translate complex technical challenges into efficient, high-impact business solutions.
          </p>
          
          <div className="hero-contact-info mono-text">
            <span>Dallas, TX</span> • 
            <span>469-207-2316</span> • 
            <span>quintanaj0215@gmail.com</span>
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/John_Quintana_Resume.pdf" target="_blank" className="btn btn-secondary" download>Download Resume (PDF)</a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-container">
            {/* The user will place their profile.jpg in the public folder. For now, it falls back to a nice gradient circle if missing. */}
            <img src="/profile.jpg" alt="John Quintana" className="profile-image" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="image-placeholder-fallback"></div>
            <div className="image-backdrop-glow"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
