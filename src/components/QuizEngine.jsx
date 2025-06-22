
// src/components/QuizEngine.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import './QuizEngine.css';

function QuizEngine() {
  const navigate = useNavigate();
  const player = JSON.parse(localStorage.getItem('player'));

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answersTime, setAnswersTime] = useState([]);
  const [questionDetails, setQuestionDetails] = useState([]);
  const [lock, setLock] = useState(false);

  if (!player) {
    return <p>No player found. Please start quiz again.</p>;
  }

  const quizSet = questions[player.category][player.difficulty];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNext();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [current]);

  const handleOptionClick = (option) => {
    if (lock) return;
    setSelected(option);
    setLock(true);
    const timeTaken = 15 - timeLeft;
    setAnswersTime((prev) => [...prev, timeTaken]);

    const isCorrect = option === quizSet[current].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Store detailed question performance data
    const questionData = {
      questionNumber: current + 1,
      question: quizSet[current].question,
      selectedAnswer: option,
      correctAnswer: quizSet[current].answer,
      isCorrect: isCorrect,
      timeTaken: timeTaken,
      category: player.category,
      difficulty: player.difficulty
    };
    
    setQuestionDetails((prev) => [...prev, questionData]);
  };

  const handleNext = () => {
    setTimeLeft(15);
    setSelected(null);
    setLock(false);

    if (current < quizSet.length - 1) {
      setCurrent(current + 1);
    } else {
      // Quiz finished
      const result = {
        name: player.name,
        category: player.category,
        difficulty: player.difficulty,
        score,
        total: quizSet.length,
        timeTaken: answersTime.reduce((a, b) => a + b, 0),
        date: new Date().toLocaleString(),
        times: answersTime,
        questionDetails: questionDetails,
        averageTime: answersTime.reduce((a, b) => a + b, 0) / answersTime.length,
        fastestAnswer: Math.min(...answersTime),
        slowestAnswer: Math.max(...answersTime),
        correctAnswers: questionDetails.filter(q => q.isCorrect).length,
        incorrectAnswers: questionDetails.filter(q => !q.isCorrect).length
      };

      const allScores = JSON.parse(localStorage.getItem('results')) || [];
      allScores.push(result);
      localStorage.setItem('results', JSON.stringify(allScores));
      navigate('/scores');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '6rem auto', textAlign: 'center' }}>
      <h2>Question {current + 1} of {quizSet.length}</h2>
      <p>{quizSet[current].question}</p>
      {quizSet[current].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          style={{
            display: 'block',
            width: '100%',
            margin: '10px 0',
            padding: '10px',
            background:
              lock && option === quizSet[current].answer
                ? '#7be495'
                : lock && option === selected && option !== quizSet[current].answer
                ? '#ffb3b3'
                : '#eee',
            color: lock ? 'white' : 'black',
            borderRadius: '8px',
            cursor: lock ? 'not-allowed' : 'pointer'
          }}
        >
          {option}
        </button>
      ))}
      <div style={{ marginTop: '1rem' }}>
        <p>⏳ Time Left: {timeLeft}s</p>
        <progress value={current + 1} max={quizSet.length}></progress>
        <br />
        {lock && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '1rem' }}>
            {current > 0 && timeLeft > 0 && (
              <button
                onClick={() => {
                  setCurrent(current - 1);
                  setTimeLeft(15);
                  setSelected(null);
                  setLock(false);
                }}
                style={{
                  padding: '10px 28px',
                  background: '#457b9d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Prev
              </button>
            )}
            <button
              onClick={handleNext}
              style={{
                padding: '10px 28px',
                background: '#457b9d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizEngine;
