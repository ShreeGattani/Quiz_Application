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
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Mission</h3>
                <p>To create an engaging and educational quiz platform that makes learning fun and competitive.</p>
              </div>
              <div className="overview-card">
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3>Vision</h3>
                <p>To become the go-to platform for interactive learning and knowledge testing across various subjects.</p>
              </div>
              <div className="overview-card">
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
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
                <div className="tech-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                </div>
                <h4>ReactJS</h4>
                <p>Modern UI library for building interactive user interfaces</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.315 0L14.315 0L14.315 0L14.315 0M9.685 0L9.685 0L9.685 0L9.685 0M12 2.587l2.315 2.315L12 7.217 9.685 4.902 12 2.587zM12 7.217l2.315 2.315L12 11.847 9.685 9.532 12 7.217zM12 11.847l2.315 2.315L12 16.477 9.685 14.162 12 11.847zM12 16.477l2.315 2.315L12 21.107 9.685 18.792 12 16.477z"/>
                  </svg>
                </div>
                <h4>Vite</h4>
                <p>Next-generation frontend build tool for fast development</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                  </svg>
                </div>
                <h4>CSS3</h4>
                <p>Advanced styling with animations and responsive design</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>localStorage</h4>
                <p>Client-side data persistence for user progress</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4>React Router</h4>
                <p>Declarative routing for single-page applications</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
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
                <div className="feature-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Multiple Quiz Categories</h4>
                  <p>Diverse topics to test knowledge across various subjects</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Real-time Scoring</h4>
                  <p>Instant feedback and performance tracking</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Leaderboard System</h4>
                  <p>Competitive environment with global rankings</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Progress Tracking</h4>
                  <p>Personalized statistics and improvement metrics</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Responsive Design</h4>
                  <p>Seamless experience across all devices</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
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