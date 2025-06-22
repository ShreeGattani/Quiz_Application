
// src/components/AddPlayerForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPlayerForm.css';

function AddPlayerForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    const playerData = {
      name,
      category,
      difficulty,
    };

    // Save to localStorage
    localStorage.setItem('player', JSON.stringify(playerData));

    // Redirect to quiz start
    navigate('/quiz/start');
  };

  return (
    <div className="quiz-form-container">
      <div className="quiz-form-box">
        <div className="form-header">
          <h2 className="form-title">Start Your Quiz</h2>
        </div>
        
        <div className="form-content">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Category</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="">Select Category</option>
              <option value="general">General Knowledge</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="geography">Geography</option>
              <option value="sports">Sports</option>
              <option value="entertainment">Entertainment</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Difficulty</label>
            <select 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)}
              className="form-select"
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        
        <div className="form-actions">
          <button
            onClick={handleStart}
            disabled={!name || !category || !difficulty}
            className="start-quiz-btn"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPlayerForm;
