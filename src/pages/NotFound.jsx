// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '8rem' }}>
      <h1>404 - Page Not Found 🚧</h1>
      <p>Oops! Looks like you're lost.</p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.6rem 1.2rem',
          backgroundColor: '#1d3557',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
