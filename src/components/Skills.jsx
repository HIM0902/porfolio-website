import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Data & Backend',
    items: ['Python', 'SQL', 'Machine Learning', 'Data Engineering', 'Flask', 'XGBoost']
  },
  {
    title: 'Software & 3D',
    items: ['C#', 'Unity', 'React', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Tools & Infrastructure',
    items: ['Git/GitHub', 'GitHub Actions', 'Azure Blob Storage', 'Streamlit', 'Tableau']
  },
  // RESTORED: Certifications category
  {
    title: 'Certifications',
    items: [
      'Google Cybersecurity Professional',
      'Google Data Analytics Professional'
    ]
  },
  {
    title: 'Professional',
    items: ['Bilingual (English/Spanish)', 'Agile Development', 'System Diagnostics']
  }
];

// Animation variants for the staggering effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // This creates the "waterfall" timing effect
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <h3 className="category-title mono-text">{category.title}</h3>
            <div className="skill-badges">
              {category.items.map((item, idx) => (
                <motion.span 
                  className="skill-badge" 
                  key={idx}
                  variants={itemVariants}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;