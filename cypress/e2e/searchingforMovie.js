// cypress/e2e/login.js

import { clickWatchNow } from '../support/helpers/watchNow';
import { searchMovieByTitle } from '../support/helpers/searchMovie';

describe('template spec', () => {
  it('passes', () => {
    // Use the custom command to sign into the account
    cy.signIntoAccount();

    // Ensure the home page is loaded
    cy.visit('/home');

    // Search for the movie
    searchMovieByTitle('Grown Ups')
  });
});
