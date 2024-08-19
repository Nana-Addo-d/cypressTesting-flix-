// cypress/e2e/login.js
/// <reference types="cypress" />

import { searchMovieByTitle } from '../support/helpers/searchMovie'
import { visitHome} from '../support/helpers/signIn'
import { handlePagination } from '../support/helpers/pageNav'


describe('template spec', () => {
  
  beforeEach ('SignIn',()=>{
    cy.signIntoAccount()
  })
  
  it.only('movieSearchUsingSearchBox', () => {
    // Ensure the home page is loaded
    visitHome()

    // Search for the movie
    searchMovieByTitle('Bad boys')
  })

  it('navigating through categories',()=>{
    // Ensure the home page is loaded
    visitHome()
    handlePagination(5)
    //
  })
})
