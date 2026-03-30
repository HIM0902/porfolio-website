import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="glass-card footer-card">
        <h2 className="footer-title">Let's Build Something Impactful.</h2>
        <p className="footer-body">
          Whether you're building intelligent data pipelines or scalable software architecture, I'd love to help. 
          I am actively seeking New Grad and Summer Internship opportunities in Data Engineering, AI, and Software Engineering. 
          Open to roles based in Dallas, TX, and remote positions.
        </p>
        
        <div className="footer-cta">
          <a href="mailto:quint@example.com" className="btn btn-primary btn-large">Get In Touch</a>
        </div>
        
        <div className="social-links">
          <a href="#" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-8.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 3.4 5 3.8 5 3.8a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3.4 10c0 7 3 8.2 6 8.5-.4.4-.8 1-.9 2.2-.5.3-1.8.8-2.6-.6 0 0-.5-.9-1.4-1-.1 0-.6-.1-.1-.3 0 0 1 .3 1.7 1.3.8 1.4 2.3 1 2.9.8v3.5"></path></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" aria-label="Resume">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
          </a>
        </div>
      </div>
      
      <div className="copyright">
        © 2026 Quint. Engineered with precision.
      </div>
    </footer>
  );
};

export default Footer;
