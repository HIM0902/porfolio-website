import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    title: 'Service Tech Associate',
    company: 'Atmos Energy',
    date: 'Feb 2021 – Sept 2022',
    bullets: [
      'Ensured 99% data accuracy across high volume operational systems, supporting compliance, reporting, and internal audits.',
      'Coordinated with operations teams to maintain accurate customer and equipment data, supporting workflow continuity.',
      'Resolved discrepancies by validating system inputs and performing root cause analysis.',
      'Trained new hires on system workflows, documentation standards, and data integrity procedures.',
      'Supported operational planning through data checks, safety monitoring, and predictive maintenance insights.'
    ],
    hash: 'commit 8f2c3a9'
  },
  {
    title: 'Vehicle Diagnostics Specialist',
    company: 'Town East Ford',
    date: 'July 2018 – Feb 2020',
    bullets: [
      'Performed structured troubleshooting and documented findings to support operational decision making.',
      'Collaborated with cross functional teams to resolve technical issues and improve workflow efficiency.',
      'Managed detailed service logs and time tracking records to support reporting and scheduling.'
    ],
    hash: 'commit 2e9b1d4'
  }
];

const Experience = () => {
  return (
    <section className="section experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="mono-prefix">~/</span>Experience
      </motion.h2>
      
      <div className="git-timeline">
        {experienceData.map((exp, index) => (
          <motion.div 
            className="git-commit" 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="git-node"></div>
            <div className="git-content glass-card">
              <div className="git-meta">
                <span className="commit-hash mono-text">{exp.hash}</span>
                <span className="commit-date mono-text">{exp.date}</span>
              </div>
              <h3 className="job-title">{exp.title}</h3>
              <h4 className="company mono-text">@ {exp.company}</h4>
              
              <ul className="impact-list">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
