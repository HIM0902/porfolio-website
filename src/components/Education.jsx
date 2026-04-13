import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
  {
    institution: 'University of Texas at Dallas',
    location: 'Dallas, TX',
    degree: 'Bachelor of Science in Computer Science',
    dates: 'Aug 2024 – May 2026',
    status: 'In Progress'
  },
  {
    institution: 'Dallas College',
    location: 'Dallas, TX',
    degree: 'Associates of Science',
    dates: 'Aug 2022 – June 2024',
    status: 'Completed'
  }
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="mono-prefix">~/</span>Education
      </motion.h2>
      
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <motion.div 
            className="glass-card edu-card" 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="edu-header">
              <h3 className="institution">{edu.institution}</h3>
              <span className={`status-badge ${edu.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                {edu.status}
              </span>
            </div>
            
            <p className="degree">{edu.degree}</p>
            
            <div className="edu-meta">
              <span className="mono-text">{edu.dates}</span>
              <span className="mono-text location">{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
