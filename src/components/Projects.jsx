import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectData = [
  {
    title: 'tech-price-forecaster',
    date: 'Jan 2026 – Present',
    badges: ['Machine Learning', 'XGBoost', 'Azure Blob Storage', 'Streamlit', 'Python', 'CI/CD'],
    description: [
      'Built an end-to-end ML pipeline using XGBoost with walk-forward time-series validation achieving under 5% mean absolute percentage error across 5 semiconductor tickers (NVDA, AMD, TSM, MU, INTC).',
      'Automated daily data ingestion via GitHub Actions pulling from Yahoo Finance and SerpAPI into Azure Blob Storage; deployed interactive predictions dashboard publicly on Streamlit Cloud.',
      'Engineered 20+ time-series features (lag, rolling statistics, momentum) with Pydantic data validation; secured all credentials via GitHub Secrets and least-privilege Azure IAM following industry security standards.'
    ],
    github: '#',
    live: '#'
  },
  {
    title: 'YouTube Intelligence Platform',
    date: 'Jan 2026 – Present',
    badges: ['Backend Engineering', 'Data Ingestion', 'ETL Pipelines'],
    description: [
      'Built scalable data ingestion and processing pipelines to support trend forecasting and operational reporting.',
      'Developed validation workflows ensuring high integrity data for decision making.',
      'Created modular components aligned with system requirements to improve maintainability and performance.',
      'Documented processes and coordinated with team members to resolve data inconsistencies.'
    ],
    github: '#',
  },
  {
    title: 'AI Face Recognition System',
    date: 'Jan 2025 – June 2025',
    badges: ['Python', 'OpenCV', 'Computer Vision', 'Pattern Recognition'],
    description: [
      'Conducted system level testing, error analysis, and documentation to validate model performance.',
      'Applied pattern recognition and data evaluation techniques to improve reliability and accuracy.'
    ],
    github: '#'
  },
  {
    title: 'Dead Silence (Survival AI Game)',
    date: '',
    badges: ['C#', 'Unity', 'OOP', 'Game Systems'],
    description: 'Collaborated within an agile 5-person development team to architect and ship a complete 3D zombie survival experience in Unity. Spearheaded the core gameplay loop and state-machine-driven enemy AI pathfinding, emphasizing rigorous object-oriented design patterns to maintain an extensible and performant codebase.',
    github: '#'
  },
  {
    title: 'Enterprise Data & Cybersecurity Analytics',
    date: '',
    badges: ['SQL', 'Tableau', 'Relational DBs', 'BI'],
    description: 'Resolved over 50 complex SQL challenges involving advanced joins, subqueries, and aggregations to manipulate and extract insights from deeply nested relational databases. Designed interactive Business Intelligence dashboards using Tableau to visualize real-world cybersecurity trends, translating technical log data into accessible executive analytics.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <span className="mono-prefix">~/</span>Featured Work
      </motion.h2>
      
      <div className="projects-flex">
        {projectData.map((project, index) => (
          <motion.div 
            /* Removed perspective-container here */
            className="glass-card project-card-modern" 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            // Fixed the syntax by keeping transition inside the component props
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0px 15px 30px rgba(0, 229, 255, 0.15)", 
              borderColor: "rgba(0, 229, 255, 0.5)" 
            }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.date && <span className="project-date mono-text">{project.date}</span>}
            </div>
            
            <div className="project-badges">
              {project.badges.map((badge, idx) => (
                <span className="badge" key={idx}>{badge}</span>
              ))}
            </div>
            
            <div className="project-desc">
              {Array.isArray(project.description) ? (
                <ul className="project-ul">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
            
            <div className="project-links mt-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  View Code (GitHub)
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;