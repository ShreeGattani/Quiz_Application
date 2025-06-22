
// src/components/Leaderboard.jsx
import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('score'); // 'score' or 'time'

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('results')) || [];
    setResults(storedResults);
  }, []);

  const sortedResults = [...results].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'time') return a.timeTaken - b.timeTaken;
    return 0;
  });

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
      return `${seconds}s`;
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}m ${remainingSeconds}s`;
    }
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div style={{ maxWidth: '900px', margin: '6rem auto', textAlign: 'center' }}>
      <h2>🏅 Leaderboard</h2>

      <div style={{ margin: '1rem' }}>
        <button 
          onClick={() => setSortBy('score')}
          style={{
            padding: '0.8rem 1.5rem',
            background: sortBy === 'score' ? '#1d3557' : '#457b9d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            marginRight: '10px'
          }}
        >
          Sort by Score
        </button>
        <button 
          onClick={() => setSortBy('time')}
          style={{
            padding: '0.8rem 1.5rem',
            background: sortBy === 'time' ? '#1d3557' : '#457b9d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
        >
          Sort by Time
        </button>
      </div>

      {sortedResults.length === 0 ? (
        <p>No attempts yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f1f1f1' }}>
              <th style={{ padding: '10px' }}>Rank</th>
              <th>Name</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Score</th>
              <th>Time Taken</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((res, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>{getRankIcon(index + 1)}</td>
                <td style={{ padding: '8px' }}>{res.name}</td>
                <td>{formatCategory(res.category)}</td>
                <td>{formatDifficulty(res.difficulty)}</td>
                <td>{res.score}/{res.total}</td>
                <td>{formatTime(res.timeTaken)}</td>
                <td>{res.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;
