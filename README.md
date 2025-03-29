
---

# Incubyte TDD Frontend Assessment

Welcome to the Incubyte TDD Frontend Assessment! This project implements a **String Calculator** using Test-Driven Development (TDD) principles and React. The task involves building a simple calculator that accepts numbers as strings, processes the input, and returns their sum, while also handling special cases such as custom delimiters and negative numbers.

## Table of Contents
- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Features Implemented](#features-implemented)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Conclusion](#conclusion)

## Project Overview

This project is a **String Calculator** that processes a string of comma-separated or newline-separated numbers and returns their sum. It also supports custom delimiters and throws exceptions for negative numbers.

### Features:
1. **Empty String**: If the input string is empty, return `0`.
2. **Single Number**: If the input string contains one number, return that number.
3. **Multiple Numbers**: Handle a list of comma-separated numbers and return their sum.
4. **New Line Support**: Accept numbers separated by newline (`\n`) or comma.
5. **Custom Delimiters**: Allow custom delimiters like `;`, which can be set by the user.
6. **Negative Numbers Handling**: If any negative numbers are present, throw an exception and display the negative numbers in the error message.

### Bonus:
- **Frontend Interface**: The application provides a user interface for users to input numbers and trigger calculations.
- **Deployable Application**: The app is deployed on a public URL for easy access and testing.

---

## Setup Instructions

Follow these steps to get the project up and running locally:

### 1. Clone the repository

```bash
git clone https://github.com/jaishank94/react-assesment-tdd.git
cd react-assesment-tdd
```

### 2. Install dependencies

Make sure you have **Node.js** and **npm** installed. Then, run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Run the development server

After the dependencies are installed, you can run the development server to see the app in action.

```bash
npm run dev
```

This will start the development server and make the application accessible at `http://localhost:3000`.

---

## Running Tests

The project follows the **Test-Driven Development (TDD)** approach. To ensure that everything works as expected, tests have been written using **Jest**.

### 1. Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will start Jest and run all the test cases. Tests are located in the `tests` folder.

---

## Features Implemented

1. **Basic Calculation**: Handles sum of numbers in the string (comma or newline separated).
2. **Custom Delimiters**: Supports user-defined delimiters to separate numbers.
3. **Negative Number Handling**: Throws an error if any negative numbers are encountered and lists them.
4. **Frontend Interface**: A simple user interface where users can input numbers and see the result dynamically.
5. **UI Responsiveness**: The app is responsive and provides a user-friendly interface.

---

## Project Structure

Here’s the basic file structure of the project:

```
react-assesment-tdd/
├── src/
│   ├── App.jsx                # Main React component
│   └── utils/
│       └── StringCalculator.js # Business logic for the string calculator
├── tests/
│   └── StringCalculator.test.jsx  # Unit tests for the string calculator
├── public/
│   └── index.html             # Main HTML file
├── jest.config.js             # Jest configuration file
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

---

## Technologies Used

- **React**: For building the user interface.
- **Jest**: For writing and running tests.
- **Tailwind CSS**: For styling the frontend UI.
- **Babel**: For transpiling modern JavaScript.
- **Vite**: For bundling and serving the application during development.

---

## Conclusion

This project showcases my understanding of **Test-Driven Development (TDD)** and **Frontend Development** using **React**. By implementing the string calculator and building the user interface, I was able to apply testing principles to ensure that all features work correctly.

Feel free to test and explore the application! If you have any feedback or questions, don't hesitate to reach out.

---

### **Enjoy using the String Calculator!**

---
