# cypressTesting-flix-
Cypress automated test to navigate through Flixtur Website.

## Overview
This project is a free and unencumbered software released into the public domain. It contains a set of Cypress test scripts for automating the testing of a web application, specifically focusing on functionalities like signing in, searching for movies, handling pagination, and clicking on movie cards to watch them.

## Features
- **Automated Sign-In**: Uses custom Cypress commands to sign into a VIP account.
- **Movie Search**: Searches for movies by title and handles various search result scenarios.
- **Card Interaction**: Finds and interacts with movie cards to click the "Watch Now" button.

## File Structure
* cypress/support/helpers: Contains helper functions for various tasks such as signing in, searching for movies, and clicking buttons.
  *  searchMovie.js
  *  pageNav.js
  *  findCardByText.js
  *  signIn.js
  *  watchNow.js
*  cypress/support/commands.js: Custom Cypress commands.
*  cypress/e2e/searchMovie.js: Cypress test script for logging in and searching for a movie.

## Installation & Usage
-
### To Open Cypress runner
open terminal or commad promt and use the code
`npx cypress open`
