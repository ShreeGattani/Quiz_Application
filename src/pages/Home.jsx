// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  return (
    <div className="home-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Master Your Knowledge
          </h1>
          <p className="hero-subtitle">
            Challenge yourself with interactive quizzes across diverse subjects
          </p>
          <p className="hero-description">
            Test your knowledge, compete with others, and track your progress in real-time. 
            From science to history, sports to technology - we have quizzes for every interest.
          </p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span>7+ Categories to explore</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
              </div>
              <span>105+ Challenging questions</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span>Compete on leaderboards</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <span>Track your progress</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="start-quiz-btn" onClick={handleStartQuiz}>
              Start Quiz Now
            </button>
            <button className="leaderboard-btn" onClick={handleViewLeaderboard}>
              View Leaderboard
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <svg viewBox="0 0 400 400" className="quiz-svg-illustration">
            <circle cx="200" cy="200" r="150" fill="none" stroke="#1d3557" strokeWidth="6" opacity="0.8" className="main-ring"/>
            <circle cx="200" cy="200" r="130" fill="none" stroke="#1d3557" strokeWidth="3" opacity="0.4" className="secondary-ring"/>
            
            {/* Central brain icon */}
            <g className="central-icon" transform="translate(170, 170)">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#1d3557">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </g>
            
            {/* Quiz elements around the circle */}
            <g className="quiz-element" transform="translate(185, 40)">
              <circle r="20" fill="#1d3557" opacity="0.9"/>
              <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
              </svg>
            </g>
            
            <g className="quiz-element" transform="translate(325, 185)">
              <circle r="20" fill="#1d3557" opacity="0.9"/>
              <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </g>
            
            <g className="quiz-element" transform="translate(185, 340)">
              <circle r="20" fill="#1d3557" opacity="0.9"/>
              <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </g>
            
            <g className="quiz-element" transform="translate(75, 185)">
              <circle r="20" fill="#1d3557" opacity="0.9"/>
              <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
              </svg>
            </g>
            
            {/* Accent elements */}
            <g className="accent-element" transform="translate(265, 105)">
              <circle r="15" fill="#457b9d" opacity="0.7"/>
              <svg x="-8" y="-8" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </g>
            
            <g className="accent-element" transform="translate(265, 265)">
              <circle r="15" fill="#457b9d" opacity="0.7"/>
              <svg x="-8" y="-8" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </g>
            
            <g className="accent-element" transform="translate(135, 265)">
              <circle r="15" fill="#457b9d" opacity="0.7"/>
              <svg x="-8" y="-8" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </g>
            
            <g className="accent-element" transform="translate(135, 105)">
              <circle r="15" fill="#457b9d" opacity="0.7"/>
              <svg x="-8" y="-8" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;