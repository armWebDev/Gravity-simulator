# Gravity simulator
This is a simple bouncing balls game implemented using HTML5 Canvas and TypeScript. The game displays a start screen with a play button. When the play button is clicked, the game starts and balls bounce around the canvas. The game also features a reset button to restart the game.

## Table of Contents
- [Goal](#goal)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [License](#license)

## Goal

The main goal of this project was to learn and explore the tools and features of TypeScript. As this is my first project using TypeScript, I aimed to understand the key differences between JavaScript and TypeScript. I believe I have partially achieved this goal, gaining valuable insights into TypeScript's capabilities and its advantages over JavaScript.

Additionally, this project has motivated me to continue learning new tools and technologies in the field of web development. I appreciate the opportunity to embark on this educational journey, and I look forward to further expanding my knowledge and skills.

Thank you for providing this valuable learning experience.

## Features
- Start screen with a play button.
- Canvas-based animation of bouncing balls.
- Dynamic creation of balls on canvas click.
- Reset button to restart the game.

## Installation

### Prerequisites
- A web browser (Chrome, Firefox, Edge, etc.)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/bouncing-balls-game.git
   cd Gravity simulator
   ```

2. Install dependencies:
  ```sh
  npm install
  ```

3. Compile TypeScript to JavaScript:
  ```sh
  npx tsc
  ```

4. Open index.html in a web browser to start the game.

## Usage
1. Open the `index.html` file in a web browser to start the game.
2. Click the "Play Now" button to start the game.
3. Click on the canvas to add new balls.
4. Click the "Reset" button to restart the game.

## How It Works
### Structure
- **HTML**: Provides the basic structure including the canvas element, start screen, play button, and reset button.
- **CSS**: Styles the game elements for a polished look.
- **TypeScript**: Contains the game logic including ball creation, animation, and user interactions.
### Main Components
- **CircleObject Class**: Defines the properties and behaviors of a ball.
- **init Function**: Initializes the game by creating an initial set of balls.
- **animate Function**: Handles the animation loop to update and redraw balls.
- **startGame Function**: Starts the game by hiding the start screen and showing the canvas and reset button.
- **Event Listeners**: Manage user interactions such as starting the game, resetting the game, and adding new balls on canvas click.

##  License
Copyright (c) [2024] [Armen Tadevosyan]




