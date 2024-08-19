/// <reference types="cypress" />

import { searchMovieByTitle } from '../support/helpers/searchMovie';
import { visitHome } from '../support/helpers/signIn';
import { searchMovieThroughPages } from '../support/helpers/pageSearch';

describe('template spec', () => {

  beforeEach('SignIn', () => {
    cy.signIntoAccount(); // Logs into the account before each test
  });

  it.only('movieSearchUsingSearchBox', () => {
    visitHome(); // Ensures the home page is loaded
    searchMovieByTitle('bad boy'); // Searches for the movie using the search box
  });

  it('navigating through categories', () => {
    visitHome(); // Ensures the home page is loaded
    searchMovieThroughPages('gunner'); // Searches for the movie by navigating through categories and pages
  });
});
