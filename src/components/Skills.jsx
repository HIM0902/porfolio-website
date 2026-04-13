import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Certifications',
    items: [
      'Google Cybersecurity Professional Certificate',
      'Google Data Analytics Professional Certificate'
    ]
  },
  {
    title: 'Data Tools',
    items: ['Python', 'SQL', 'Tableau', 'Power BI']
  },
  {
    title: 'Technical Tools',
    items: ['Git/GitHub', 'Linux (Ubuntu)', 'VS Code', 'AWS', 'Azure']
  },
  {
    title: 'Operations Skills',
    items: [
      'Material planning',
      'Inventory tracking',
      'Shortage resolution',
      'MRP concepts',
      'Workflow optimization'
    ]
  },
  {
    title: 'Business Skills',
    items: [
      'Data validation',
      'Forecasting',
      'Documentation',
      'Cross functional coordination'
    ]
  },
  {
    title: 'Soft Skills',
    items: [
      'Communication',
      'Problem solving',
      'Accuracy',
      'Bilingual (English/Spanish)'
    ]
  }
];

const Skills = () => {
  return (
    <section className="section skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="mono-prefix">~/</span>Capabilities
      </motion.h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            className="glass-card skill-card hover-glow" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="category-title mono-text">{category.title}</h3>
            <div className="skill-badges">
              {category.items.map((item, idx) => (
                <span className="skill-badge" key={idx}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
