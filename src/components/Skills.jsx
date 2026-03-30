import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section skills-section">
      <h2 className="section-title">Technical Arsenal</h2>
      
      <div className="skills-grid">
        <div className="glass-card skill-category">
          <h3 className="category-title">Core Languages</h3>
          <ul className="skill-list">
            <li>Python</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>SQL</li>
            <li>C#</li>
          </ul>
        </div>
        
        <div className="glass-card skill-category">
          <h3 className="category-title">Architecture & Cloud</h3>
          <ul className="skill-list">
            <li>AWS</li>
            <li>Azure</li>
            <li>Linux</li>
            <li>Git / GitHub</li>
            <li>Relational Databases</li>
          </ul>
        </div>
        
        <div className="glass-card skill-category">
          <h3 className="category-title">Libraries & Analytics</h3>
          <ul className="skill-list">
            <li>Tableau</li>
            <li>OpenCV</li>
            <li>Unity</li>
            <li>ETL Pipelines</li>
            <li>OOP Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
