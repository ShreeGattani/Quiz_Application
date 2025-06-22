// src/pages/About.jsx
import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGitHubClick = () => {
    window.open('https://github.com/shreegattani', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:shreegattani@gmail.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/shreegattani', '_blank');
  };

  return (
    <div className="about-page">
      {/* About Header Section */}
      <section className="about-header">
        <div className="container">
          <div className="header-content">
            <h1 className="header-title">ABOUT QuizVerse</h1>
            <p className="header-subtitle">
              An interactive quiz platform designed to challenge minds and foster learning.
            </p>
          </div>
        </div>
      </section>

      {/* Project Owner Section */}
      <section className="owner-section">
        <div className="container">
          <div className={`owner-card ${isVisible ? 'animate-in' : ''}`}>
            <div className="owner-avatar">
              <div className="avatar-circle">
                <span className="avatar-text">SG</span>
              </div>
            </div>
            <div className="owner-info">
              <h2 className="owner-name">Shree Gattani</h2>
              <p className="owner-title">Project Owner</p>
              <p className="owner-description">
                Passionate about creating engaging educational experiences through innovative web applications. 
                This project represents the culmination of modern web development practices and user-centered design.
              </p>
              <div className="owner-stats">
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Dedication</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className={`overview-content ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Project Overview</h2>
            <div className="overview-grid">
              <div className="overview-card">
                <div className="card-icon">🎯</div>
                <h3>Mission</h3>
                <p>To create an engaging and educational quiz platform that makes learning fun and competitive.</p>
              </div>
              <div className="overview-card">
                <div className="card-icon">💡</div>
                <h3>Vision</h3>
                <p>To become the go-to platform for interactive learning and knowledge testing across various subjects.</p>
              </div>
              <div className="overview-card">
                <div className="card-icon">🚀</div>
                <h3>Goals</h3>
                <p>Provide a seamless user experience with diverse question categories and real-time competition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack">
        <div className="container">
          <div className={`tech-content ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Technology Stack</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <div className="tech-icon">⚛️</div>
                <h4>ReactJS</h4>
                <p>Modern UI library for building interactive user interfaces</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">⚡</div>
                <h4>Vite</h4>
                <p>Next-generation frontend build tool for fast development</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🎨</div>
                <h4>CSS3</h4>
                <p>Advanced styling with animations and responsive design</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🗃️</div>
                <h4>localStorage</h4>
                <p>Client-side data persistence for user progress</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🧭</div>
                <h4>React Router</h4>
                <p>Declarative routing for single-page applications</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">📱</div>
                <h4>Responsive Design</h4>
                <p>Mobile-first approach for all devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="features-highlight">
        <div className="container">
          <div className={`features-content ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Key Features</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-bullet">✓</div>
                <div className="feature-text">
                  <h4>Multiple Quiz Categories</h4>
                  <p>Diverse topics to test knowledge across various subjects</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">✓</div>
                <div className="feature-text">
                  <h4>Real-time Scoring</h4>
                  <p>Instant feedback and performance tracking</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">✓</div>
                <div className="feature-text">
                  <h4>Leaderboard System</h4>
                  <p>Competitive environment with global rankings</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">✓</div>
                <div className="feature-text">
                  <h4>Progress Tracking</h4>
                  <p>Personalized statistics and improvement metrics</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">✓</div>
                <div className="feature-text">
                  <h4>Responsive Design</h4>
                  <p>Seamless experience across all devices</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">✓</div>
                <div className="feature-text">
                  <h4>Modern UI/UX</h4>
                  <p>Intuitive interface with smooth animations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className={`contact-content ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '0.5rem' }}>Get In Touch</h2>
            <div className="contact-icons">
              <div className="contact-icon-wrapper" onClick={handleGitHubClick} title="GitHub">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="contact-icon-wrapper" onClick={handleLinkedInClick} title="LinkedIn">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="contact-icon-wrapper" onClick={handleEmailClick} title="Email">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
