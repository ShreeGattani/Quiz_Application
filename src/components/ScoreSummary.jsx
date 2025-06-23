// src/components/ScoreSummary.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScoreSummary.css';

function ScoreSummary() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const player = JSON.parse(localStorage.getItem('player'));
  const results = JSON.parse(localStorage.getItem('results')) || [];
  const latestResult = results[results.length - 1];

  if (!player || !latestResult) {
    return (
      <div style={{ 
        textAlign: 'center', 
        marginTop: '8rem', 
        padding: '2rem',
        background: '#f8f9fa',
        borderRadius: '12px',
        maxWidth: '400px',
        margin: '8rem auto'
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="#ccc" style={{ marginBottom: '1rem' }}>
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
        </svg>
        <p>No result found. Please start a quiz.</p>
      </div>
    );
  }

  const { 
    score, 
    total, 
    timeTaken, 
    category, 
    difficulty, 
    questionDetails,
    averageTime,
    fastestAnswer,
    slowestAnswer,
    correctAnswers,
    incorrectAnswers
  } = latestResult;

  const formatCategory = (category) => {
    const categoryMap = {
      'general': 'General Knowledge',
      'science': 'Science',
      'history': 'History',
      'geography': 'Geography',
      'sports': 'Sports',
      'entertainment': 'Entertainment',
      'technology': 'Technology'
    };
    return categoryMap[category] || category;
  };

  const formatDifficulty = (difficulty) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  const formatTime = (seconds) => {
    if (seconds < 60) {
      return `${seconds} seconds`;
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      if (remainingSeconds === 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''}`;
      } else {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ${remainingSeconds} second${remainingSeconds > 1 ? 's' : ''}`;
      }
    }
  };

  const formatShortTime = (seconds) => {
    return `${seconds}s`;
  };

  const getMessage = () => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "Quiz Champion!";
    if (percentage >= 50) return "Good Job!";
    return "Keep Practicing!";
  };

  const getPerformanceInsight = () => {
    const percentage = (score / total) * 100;
    const avgTime = averageTime || 0;
    
    if (percentage >= 80 && avgTime < 8) return "Lightning fast and accurate!";
    if (percentage >= 80 && avgTime > 12) return "Thorough and precise!";
    if (percentage < 50 && avgTime < 5) return "Speed over accuracy - slow down!";
    if (percentage < 50 && avgTime > 12) return "Take your time, but study more!";
    return "Balanced performance!";
  };

  const handlePlayAgain = () => {
    localStorage.removeItem('player');
    navigate('/quiz');
  };

  return (
    <div className="score-summary-container">
      <div className="score-summary-box">
        <div className="score-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h2 className="score-title">Quiz Completed</h2>
          </div>
        </div>
        
        <div className="score-content">
          <div className="score-row">
            <span className="score-label">Name:</span>
            <span className="score-value">{player.name}</span>
          </div>
          
          <div className="score-row">
            <span className="score-label">Category:</span>
            <span className="score-value">{formatCategory(category)}</span>
          </div>
          
          <div className="score-row">
            <span className="score-label">Difficulty:</span>
            <span className="score-value">{formatDifficulty(difficulty)}</span>
          </div>
          
          <div className="score-row">
            <span className="score-label">Score:</span>
            <span className="score-value">{score}/{total} ({(score/total*100).toFixed(1)}%)</span>
          </div>
          
          <div className="score-row">
            <span className="score-label">Total Time:</span>
            <span className="score-value">{formatTime(timeTaken)}</span>
          </div>

          <div className="score-row">
            <span className="score-label">Average Time:</span>
            <span className="score-value">{formatShortTime(averageTime?.toFixed(1) || 0)} per question</span>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="performance-analytics">
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginRight: '8px' }}>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            Performance Analytics
          </h3>
          
          <div className="analytics-inline">
            <div className="analytics-item">
              <span className="analytics-emoji">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1d3557">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
              </span>
              <span className="analytics-text">Fastest Answer: <strong>{formatShortTime(fastestAnswer || 0)}</strong></span>
            </div>
            
            <div className="analytics-item">
              <span className="analytics-emoji">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1d3557">
                  <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
              </span>
              <span className="analytics-text">Slowest Answer: <strong>{formatShortTime(slowestAnswer || 0)}</strong></span>
            </div>
            
            <div className="analytics-item">
              <span className="analytics-emoji">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#28a745">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </span>
              <span className="analytics-text">Correct Answers: <strong>{correctAnswers}</strong></span>
            </div>
            
            <div className="analytics-item">
              <span className="analytics-emoji">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#dc3545">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </span>
              <span className="analytics-text">Incorrect Answers: <strong>{incorrectAnswers}</strong></span>
            </div>
          </div>

          <button 
            className="details-toggle-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide' : 'Show'} Question Details
          </button>

          {showDetails && questionDetails && (
            <div className="question-details">
              <h4>Question-by-Question Breakdown</h4>
              {questionDetails.map((q, index) => (
                <div key={index} className={`question-item ${q.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="question-header">
                    <span className="question-number">Q{q.questionNumber}</span>
                    <span className={`question-status ${q.isCorrect ? 'correct' : 'incorrect'}`}>
                      {q.isCorrect ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#28a745">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#dc3545">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      )}
                    </span>
                    <span className="question-time">{formatShortTime(q.timeTaken)}</span>
                  </div>
                  <div className="question-text">{q.question}</div>
                  <div className="question-answers">
                    <span className="answer-label">Your answer:</span> {q.selectedAnswer}
                    {!q.isCorrect && (
                      <>
                        <br />
                        <span className="answer-label">Correct answer:</span> {q.correctAnswer}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="score-message">
          <h3>{getMessage()}</h3>
          <p className="performance-insight">{getPerformanceInsight()}</p>
        </div>
        
        <div className="score-actions">
          <button 
            className="play-again-btn"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScoreSummary;