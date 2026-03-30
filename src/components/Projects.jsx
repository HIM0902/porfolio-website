import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'YouTube Intelligence Platform',
    badges: ['Python', 'YouTube Data API', 'ETL', 'Data Pipelines'],
    description: 'Engineered a highly scalable ETL data pipeline leveraging Python and the YouTube Data API to programmatically extract, cleanse, and load vast streams of metadata. This robust architecture transformed raw API responses into structured intelligence, enabling deep-dive, quantitative analysis of user engagement and content trends.'
  },
  {
    title: 'AI Face Recognition System',
    badges: ['Python', 'OpenCV', 'Computer Vision', 'Biometrics'],
    description: 'Developed a localized automated identity verification system utilizing advanced computer vision techniques to process facial biometric data. By carefully implementing and tuning models with OpenCV and the face_recognition library, the system achieved a highly robust 95% accuracy rate in real-time facial detection and matching.'
  },
  {
    title: 'Dead Silence (Survival AI Game)',
    badges: ['C#', 'Unity', 'OOP', 'Game Systems'],
    description: 'Collaborated within an agile 5-person development team to architect and ship a complete 3D zombie survival experience in Unity. Spearheaded the core gameplay loop and state-machine-driven enemy AI pathfinding, emphasizing rigorous object-oriented design patterns to maintain an extensible and performant codebase.'
  },
  {
    title: 'Enterprise Data & Cybersecurity Analytics',
    badges: ['SQL', 'Tableau', 'Relational DBs', 'BI'],
    description: 'Resolved over 50 complex SQL challenges involving advanced joins, subqueries, and aggregations to manipulate and extract insights from deeply nested relational databases. Designed interactive Business Intelligence dashboards using Tableau to visualize real-world cybersecurity trends, translating technical log data into accessible executive analytics.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Work</h2>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="glass-card project-card" key={index}>
            <div className="project-image-placeholder">
              <span className="placeholder-text">View Application Architecture</span>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            
            <div className="project-badges">
              {project.badges.map((badge, idx) => (
                <span className="badge" key={idx}>{badge}</span>
              ))}
            </div>
            
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
