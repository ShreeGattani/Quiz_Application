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
    if (rank === 1) return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFD700">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    );
    if (rank === 2) return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#C0C0C0">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    );
    if (rank === 3) return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#CD7F32">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    );
    return `#${rank}`;
  };

  return (
    <div style={{ maxWidth: '900px', margin: '6rem auto', textAlign: 'center', padding: '0 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '2rem' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1d3557">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <h2 style={{ margin: 0, color: '#1d3557' }}>Leaderboard</h2>
      </div>

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
        <div style={{ 
          padding: '3rem', 
          background: '#f8f9fa', 
          borderRadius: '12px', 
          border: '2px dashed #1d3557',
          color: '#666'
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#ccc" style={{ marginBottom: '1rem' }}>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
          <p style={{ fontSize: '1.2rem', margin: 0 }}>No quiz attempts yet. Be the first to take a quiz!</p>
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr style={{ backgroundColor: '#1d3557', color: 'white' }}>
              <th style={{ padding: '15px 10px', fontWeight: '600' }}>Rank</th>
              <th style={{ padding: '15px 10px' }}>Name</th>
              <th style={{ padding: '15px 10px' }}>Category</th>
              <th style={{ padding: '15px 10px' }}>Difficulty</th>
              <th style={{ padding: '15px 10px' }}>Score</th>
              <th style={{ padding: '15px 10px' }}>Time</th>
              <th style={{ padding: '15px 10px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((res, index) => (
              <tr key={index} style={{ 
                borderBottom: '1px solid #eee',
                backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                transition: 'background-color 0.3s ease'
              }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {getRankIcon(index + 1)}
                </td>
                <td style={{ padding: '12px 8px', fontWeight: '500' }}>{res.name}</td>
                <td style={{ padding: '12px 8px' }}>{formatCategory(res.category)}</td>
                <td style={{ padding: '12px 8px' }}>{formatDifficulty(res.difficulty)}</td>
                <td style={{ padding: '12px 8px', fontWeight: '600', color: '#1d3557' }}>{res.score}/{res.total}</td>
                <td style={{ padding: '12px 8px' }}>{formatTime(res.timeTaken)}</td>
                <td style={{ padding: '12px 8px', fontSize: '0.9rem', color: '#666' }}>{res.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;