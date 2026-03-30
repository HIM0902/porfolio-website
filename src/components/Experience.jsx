import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience-section">
      <h2 className="section-title">Professional Impact</h2>
      
      <div className="timeline">
        
        <div className="timeline-item glass-card">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="job-title">Service Tech Associate</h3>
            <h4 className="company">Atmos Energy</h4>
            <ul className="impact-list">
              <li>Operated, maintained, and audited high-volume customer databases, ensuring a <strong className="highlight">99% accuracy rate</strong> in critical data entry and operational retrieval.</li>
              <li>Leveraged data analysis against equipment telemetry to interpret system health, driving <strong className="highlight">predictive maintenance scheduling</strong> for gas meters that reduced downtime and prevented mechanical failures.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item glass-card">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="job-title">Diagnostics Specialist</h3>
            <h4 className="company">Town East Ford</h4>
            <ul className="impact-list">
              <li>Directed cross-functional troubleshooting efforts to successfully diagnose and repair highly complex integrated mechanical and electrical system failures.</li>
              <li>Applied a rigorous, systematic, and tightly data-driven approach to technical problem solving within high-pressure, time-sensitive environments.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
