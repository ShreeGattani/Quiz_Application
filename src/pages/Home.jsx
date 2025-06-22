
// src/pages/Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        {}
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
              <span className="hero-feature-icon">🧠</span>
              <span>7+ Categories to explore</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">⚡</span>
              <span>105+ Challenging questions</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">🏆</span>
              <span>Compete on leaderboards</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">📊</span>
              <span>Track your progress</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="start-quiz-btn" onClick={() => window.location.href = '/quiz'}>
              Start Quiz Now
            </button>
            <button className="leaderboard-btn" onClick={() => window.location.href = '/leaderboard'}>
              View Leaderboard
            </button>
          </div>
        </div>

        {}
        <div className="hero-illustration">
          <svg viewBox="0 0 400 400" className="quiz-svg-illustration">
           
            <circle cx="200" cy="200" r="150" fill="none" stroke="#1d3557" strokeWidth="6" opacity="0.8" className="main-ring"/>
            
            <circle cx="200" cy="200" r="130" fill="none" stroke="#1d3557" strokeWidth="3" opacity="0.4" className="secondary-ring"/>
            
            <text x="200" y="220" fontSize="70" fill="#1d3557" textAnchor="middle" fontWeight="bold" className="central-emoji">🧠</text>
            
            <text x="200" y="60" fontSize="28" fill="#1d3557" textAnchor="middle" className="quiz-emoji">❓</text>
            <text x="340" y="200" fontSize="28" fill="#1d3557" textAnchor="middle" className="quiz-emoji">📝</text>
            <text x="200" y="340" fontSize="28" fill="#1d3557" textAnchor="middle" className="quiz-emoji">✅</text>
            <text x="60" y="200" fontSize="28" fill="#1d3557" textAnchor="middle" className="quiz-emoji">⏱️</text>
            
            <text x="280" y="120" fontSize="20" fill="#1d3557" textAnchor="middle" className="accent-emoji">🏆</text>
            <text x="280" y="280" fontSize="20" fill="#1d3557" textAnchor="middle" className="accent-emoji">🎯</text>
            <text x="120" y="280" fontSize="20" fill="#1d3557" textAnchor="middle" className="accent-emoji">📊</text>
            <text x="120" y="120" fontSize="20" fill="#1d3557" textAnchor="middle" className="accent-emoji">💡</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
