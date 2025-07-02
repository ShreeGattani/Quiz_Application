# Quiz_Application

A React-based quiz application developed by Shree Gattani. This project enables users to register players, take quizzes based on predefined questions, track scores, and view a leaderboard. It demonstrates component-based architecture and state management in React.

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Available Scripts](#available-scripts)
* [Project Structure](#project-structure)
* [Usage](#usage)
* [Customization](#customization)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

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

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<username>/shreegattani-quiz_application.git
   cd shreegattani-quiz_application
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

## Available Scripts

In the project directory, you can run:

* **`npm start`** or **`yarn dev`**

  * Starts the development server. Open [http://localhost:3000](http://localhost:3000) (or the port configured) to view it in the browser.
* **`npm run build`** or **`yarn build`**

  * Builds the app for production to the `dist` folder.
* **`npm run preview`** or **`yarn preview`**

  * Serves the production build locally for testing.
* **`npm test`** or **`yarn test`** (if tests configured)

  * Runs the test suite (if applicable).

> Adjust commands if using Vite or Create React App; ensure scripts in `package.json` are accurate.

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

## Customization

* **Questions**: Modify `src/data/questions.js` to add, remove, or update quiz questions. Follow the existing object shape.
* **Styling**: Tweak CSS files in `components/` and `pages/` for theme adjustments. Consider adding a dark mode toggle if desired.
* **Routing**: Extend `App.jsx` to include new pages or nested routes for additional features (e.g., user profiles, analytics).
* **State Management**: For larger-scale features, integrate Context API or Redux to manage global state (e.g., multiple quizzes, categories).
* **Data Persistence**: Implement localStorage or connect to a backend API to store player info and quiz results persistently.

## Contributing

Contributions are welcome. To contribute:

1. **Fork the repository**.
2. **Create a feature branch**:

   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make changes** and ensure code follows existing style conventions.
4. **Test** your changes locally.
5. **Commit and push** to your fork.
6. **Open a Pull Request** against the main repository.

Please include a clear description of your changes, motivations, and any relevant screenshots or test details.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

For questions or suggestions, reach out to:

* **Author**: Shree Gattani
* **GitHub**: [https://github.com/shreegattani](https://github.com/shreegattani)
* **Email**: (gattanishree31@gmail.com)

  Link to the website is - https://quiz-application-eight-lake.vercel.app/about

---

*Thank you for using the Quiz Application! Feel free to customize and extend it to suit your needs.*
