# cypressTesting-flix-

Cypress automated test to navigate through the FlixTour Website.

## Overview

The FlixTour Cypress Test Suite is designed to ensure the robustness and reliability of the FlixTour web application. This suite focuses on critical user journeys such as movie search functionality, page navigation,interacting with movie cards to watch them, and user authentication. The primary goal is to automate end-to-end tests that validate the core functionalities of the application, providing quick feedback on the stability of the system.

## Features

- **Automated Sign-In**: Uses custom Cypress commands to sign into a VIP account.
- **Movie Search**: Searches for movies by title and handles various search result scenarios.
- **Card Interaction**: Finds and interacts with movie cards to click the "Watch Now" button.
- **page navigation**: Finds and interacts with page navigation to click the button though pages and categories.

## Purpose and Goals

The purpose of this test suite is to:

- **Automate Critical Workflows**: Automate the testing of key user workflows to reduce manual testing efforts and catch regressions early.
- **Ensure Functional Accuracy**: Verify that the application behaves as expected across different user scenarios, with a focus on search functionalities and user authentication.
- **Support Continuous Integration**: Integrate the tests into a CI/CD pipeline to enable continuous testing and feedback.
- **Facilitate Future Enhancements**: Provide a modular and maintainable codebase that can be easily extended to include new tests as the application evolves.

## Technology and Tools

This test suite is built using the following technologies and tools:

- **[Cypress](https://www.cypress.io/)**: A fast, easy-to-use end-to-end testing framework that handles complex UI testing scenarios with ease.
- **JavaScript (ES6+)**: The programming language used to write the test scripts.
- **Node.js**: The runtime environment for executing the Cypress tests.
- **npm**: The package manager used to manage dependencies.

## Installation & Usage

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (version 12 or higher):

  - You can download it from the official [Node.js website](https://nodejs.org/en/download/).

- **npm** (version 6 or higher):

  - npm is included with Node.js, so installing Node.js will also install npm.
  - **Terminal Alternative**: To update npm to the latest version, you can run:
    ` npm install -g npm `

- A stable internet connection to install dependencies.

### Setup

1. **Clone the Repository**:

   ` git clone https://github.com/yourusername/flix-tour-cypress.git `
   ` cd flix-tour-cypress `

2. **Install Dependencies**:

   Use npm to install the required dependencies.

   ` npm install `

### To Open Cypress Runner

To run the tests interactively, where you can see the tests executing in real-time:

npx cypress open

This command opens the Cypress Test Runner, allowing you to run individual test files or all tests at once.

### Headless Mode

To run all tests in headless mode (useful for CI/CD environments):

npx cypress run


This will execute all the tests in the terminal, and the results will be displayed after completion.

## Test Suite Structure

### Core Functionalities

- **User Authentication**: Verifies that the user can log in successfully using valid credentials. This includes interacting with the VIP login menu and handling various authentication scenarios.
- **Movie Search**: Ensures that users can search for movies using the search box and navigate through search results effectively. The test suite also handles scenarios where multiple or no results are found.

- **Page Navigation**: Tests the application's ability to navigate through different pages, ensuring that all content loads correctly and that pagination works as expected.

- **Category Navigation**: Validates that users can navigate through movie categories, ensuring that the correct content is displayed for each category.

### File Structure

- **`cypress/e2e/`**: Contains the main test files.
  - **`searchMovie.js`**: Cypress test script for logging in and searching for a movie.
- **`cypress/support/`**:
  - **`commands.js`**: Custom Cypress commands to simplify repetitive actions, such as signing in.
  - **`helpers/`**: Contains utility functions for specific tasks like handling page navigation, interacting with movie cards, and managing authentication flows.
    - **`searchMovie.js`**: Handles movie search functionality, including dealing with varying numbers of search results.
    - **`pageNav.js`**: Manages navigation across multiple pages, handling pagination and ensuring correct content display.
    - **`findCardByText.js`**: Helps locate specific movie cards on a page based on text content.
    - **`signIn.js`**: Handles the complete sign-in process, including navigating to the login page and entering credentials.
    - **`watchNow.js`**: Interacts with the "Watch Now" button on movie cards, ensuring that the button is clicked after the card is properly flipped.

### Utility Functions

- **`selectors.js`**: Centralized management of DOM element selectors to ensure maintainability and ease of updates.
- **`exactMatch.js`**: Provides functionality to find exact matches for movie titles within search results.
- **`findCard.js`**: Helps locate specific movie cards on a page based on text content.
- **`signIn.js`**: Handles the complete sign-in process, including navigating to the login page and entering credentials.
- **`pageCategory.js`**: Manages category selection and ensures proper content loading.
- **`pageNav.js`**: Manages navigation across multiple pages, handling pagination and ensuring correct content display.
- **`pageSearch.js`**: Facilitates searching for movies across multiple pages.
- **`searchMovie.js`**: Handles movie search functionality, including dealing with varying numbers of search results.
- **`watchNow.js`**: Interacts with the "Watch Now" button on movie cards, ensuring that the button is clicked after the card is properly flipped.

## Future Directions and Improvements

The test suite is designed to be scalable and maintainable. Here are some areas for potential improvements:

- **Integration with CI/CD**: While the suite is ready for CI/CD integration, adding more robust reporting tools and notifications will enhance continuous feedback.
- **API Testing**: Integrating API tests to validate the backend services independently of the UI would ensure comprehensive coverage of the application.
- **Performance Testing**: Incorporating performance metrics into the tests (e.g., page load times, response times) could help identify performance bottlenecks.
- **Accessibility Testing**: Adding automated accessibility checks to ensure the application meets WCAG standards.

## Conclusion

This Cypress test suite provides a solid foundation for automated testing of the FlixTour application. By continuously expanding and improving the test coverage, we can ensure that the application remains reliable and user-friendly as it evolves.

## Contributing

We welcome contributions to improve this test suite. Please submit a pull request or open an issue to discuss any changes or new ideas.
