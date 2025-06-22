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
    return <p>No result found. Please start a quiz.</p>;
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
    if (percentage >= 80) return "🏆 Quiz Champion!";
    if (percentage >= 50) return "🔥 Good Job!";
    return "☕ More caffeine, maybe?";
  };

  const getPerformanceInsight = () => {
    const percentage = (score / total) * 100;
    const avgTime = averageTime || 0;
    
    if (percentage >= 80 && avgTime < 8) return "Lightning fast and accurate! ⚡";
    if (percentage >= 80 && avgTime > 12) return "Thorough and precise! 🎯";
    if (percentage < 50 && avgTime < 5) return "Speed over accuracy - slow down! 🐌";
    if (percentage < 50 && avgTime > 12) return "Take your time, but study more! 📚";
    return "Balanced performance! ⚖️";
  };

  const handlePlayAgain = () => {
    localStorage.removeItem('player');
    navigate('/quiz');
  };

  const fastestQuestion = questionDetails?.find(q => q.timeTaken === fastestAnswer);
  const slowestQuestion = questionDetails?.find(q => q.timeTaken === slowestAnswer);

  return (
    <div className="score-summary-container">
      <div className="score-summary-box">
        <div className="score-header">
          <h2 className="score-title">Quiz Completed 🎉</h2>
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
          <h3>📊 Performance Analytics</h3>
          
          <div className="analytics-inline">
            <div className="analytics-item">
              <span className="analytics-emoji">⚡</span>
              <span className="analytics-text">Fastest Answer: <strong>{formatShortTime(fastestAnswer || 0)}</strong></span>
            </div>
            
            <div className="analytics-item">
              <span className="analytics-emoji">🐌</span>
              <span className="analytics-text">Slowest Answer: <strong>{formatShortTime(slowestAnswer || 0)}</strong></span>
            </div>
            
            <div className="analytics-item">
              <span className="analytics-emoji">✅</span>
              <span className="analytics-text">Correct Answers: <strong>{correctAnswers}</strong></span>
            </div>
            
            <div className="analytics-item">
              <span className="analytics-emoji">❌</span>
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
                      {q.isCorrect ? '✅' : '❌'}
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
