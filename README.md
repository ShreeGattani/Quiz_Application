# Quiz_Application

A React-based quiz application developed by Shree Gattani. This project enables users to register players, take quizzes based on predefined questions, track scores, and view a leaderboard. It demonstrates component-based architecture and state management in React.

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Project Structure](#project-structure)
* [Usage](#usage)

## Features

* **Player Management**: Add and manage players who will take the quiz.
* **Quiz Engine**: Dynamic quiz interface that presents questions one by one.
* **Score Summary**: Displays results upon completion of the quiz, including correct/incorrect counts.
* **Leaderboard**: Ranks players based on quiz performance.
* **Routing**: Navigation between Home, About, and Not Found pages.
* **Responsive Design**: Adaptable layout for various screen sizes.

## Tech Stack

* **React** (JSX, Hooks)
* **Vite** or other bundler configured in `package.json`
* **CSS Modules / Plain CSS** for styling components
* **JavaScript (ES6+)**

## Prerequisites

* **Node.js** (v14 or above) and **npm** or **yarn**
* A modern browser for running the application

## Project Structure

```
shreegattani-quiz_application/
├── README.md
├── index.html           # Entry HTML
├── package.json         # Project metadata and scripts
└── src/                 # Source files
    ├── main.jsx         # App entry point
    ├── index.css        # Global styles
    ├── App.jsx          # Root component with routing
    ├── components/      # Reusable UI components
    │   ├── AddPlayerForm.jsx
    │   ├── AddPlayerForm.css
    │   ├── Leaderboard.jsx
    │   ├── Leaderboard.css
    │   ├── Navbar.jsx
    │   ├── Navbar.css
    │   ├── QuizEngine.jsx
    │   ├── QuizEngine.css
    │   ├── ScoreSummary.jsx
    │   └── ScoreSummary.css
    ├── data/            # Static data (questions)
    │   └── questions.js
    └── pages/           # Route-based pages
        ├── Home.jsx
        ├── Home.css
        ├── About.jsx
        ├── About.css
        └── NotFound.jsx
```

* **`main.jsx`**: Mounts the React app into the DOM.
* **`App.jsx`**: Defines routes (Home, About, Quiz, Leaderboard, etc.) and includes the `Navbar`.
* **`components/`**: Contains modular components:

  * **`AddPlayerForm`**: Form to register a new player.
  * **`Navbar`**: Navigation bar across pages.
  * **`QuizEngine`**: Core logic for rendering questions, capturing answers.
  * **`ScoreSummary`**: Displays quiz results for a given player.
  * **`Leaderboard`**: Shows ranking of players by score.
* **`data/questions.js`**: Exports an array of question objects used by `QuizEngine`. Each question may include:

  * `id`: Unique identifier
  * `question`: Text prompt
  * `options`: Array of answer choices
  * `answer`: Correct answer value or index
* **`pages/`**: Components rendered via routing:

  * **`Home`**: Landing page, instructions, start quiz flow.
  * **`About`**: Information about the application or author.
  * **`NotFound`**: 404 fallback.

## Usage

1. **Start the App**

   ```bash
   npm start
   ```
2. **Register a Player**

   * Navigate to the Home page.
   * Use the “Add Player” form to enter a player name.
3. **Take the Quiz**

   * After registering, start the quiz for the selected player.
   * Answer questions in sequence; progress is tracked in state.
4. **View Score Summary**

   * On completion, see correct vs incorrect counts and percentage.
5. **Leaderboard**

   * Visit the Leaderboard page to compare scores across players.

> Note: State persistence may be implemented via localStorage (if configured). Ensure that `AddPlayerForm` and `Leaderboard` handle persistence appropriately.

Link to the website is - https://quiz-application-eight-lake.vercel.app/about
