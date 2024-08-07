// cypress/support/helpers/searchMovie.js

import { findCardByText } from './findCard'
import { clickWatchNow } from './watchNow'

export const searchMovieByTitle = (title) => {
  // Type the title into the search box
  cy.get('form.form-inline .form-control.searchinput').type(title, { delay: 100 })

  // Wait for the search results to be displayed and ensure visibility
  return cy.get('form.form-inline .search-results', { timeout: 10000 })
    .should('not.have.class', 'hide')
    .should('be.visible')
    .then(($results) => {
        const $searchResults = $results.find('.rounded.list-group-item.list-group-item-action.search-result.p-0')

    if ($searchResults.length === 1) {
        // Option 1: Click the search result if there is only one result
        cy.log('One search result found')
        // Click the search button
        cy.get('form.form-inline .btn-info.searchbutton').click({ force: true })
        // End here without calling any other function
      } 
      
      else if ($searchResults.length > 1) {
        // Function to extract the movie title from the search result element
        const extractTitle = (result) => {
          const titleElement = result.querySelector('.title.t14')
          return titleElement ? titleElement.getAttribute('title').trim() : ''
        }
      
        // Check if any of the search results exactly match the title
        const exactMatches = $searchResults.toArray().filter(result => {
          const movieTitle = extractTitle(result)
          cy.log(`Checking result: "${movieTitle}" against title: "${title}"`)
          return movieTitle === title
        })
      
        // Log the number of matches found
        cy.log(`Number of matches found: ${exactMatches.length}`)
      
        if (exactMatches.length === 1) {
          // Click the matched result
          cy.wrap(exactMatches[0]).click({ force: true })
        } else {
          // If there are more than one match, click the search button
          cy.get('form.form-inline .btn-info.searchbutton').click({ force: true })
          // Call findCardByText with the title
            // Assuming findCardByText is used to find the card element
            findCardByText('Grown').then((card) => {
            clickWatchNow(card);
            });
  
        } 
      }
      else {
        cy.log(`Number of matches found: ${$searchResults.length}`)
           return null // No results found
            }
    })
}
