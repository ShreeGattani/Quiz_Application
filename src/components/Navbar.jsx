
// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <h2 className="logo">QuizVerse</h2>
        </Link>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/quiz" 
              className={isActive('/quiz') ? 'active' : ''}
              onClick={closeMenu}
            >
              Start Quiz
            </Link>
          </li>
          <li>
            <Link 
              to="/scores" 
              className={isActive('/scores') ? 'active' : ''}
              onClick={closeMenu}
            >
              Scores
            </Link>
          </li>
          <li>
            <Link 
              to="/leaderboard" 
              className={isActive('/leaderboard') ? 'active' : ''}
              onClick={closeMenu}
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

