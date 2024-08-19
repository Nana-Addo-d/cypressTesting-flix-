import { findCardByText } from './findCard';
import { clickWatchNow } from './watchNow';
import { exactMatch } from './exactMatch';
import { navigatePages } from './pageNav';
import selectors from './util/selectors';

export const searchMovieByTitle = (title) => {
  cy.get(selectors.searchBox).should('be.visible').type(title, { delay: 100 });

  cy.get(selectors.searchResults, { timeout: 10000 })
    .should('not.have.class', 'hide')
    .should('be.visible')
    .find(selectors.searchResultItem)
    .then(($searchResults) => {
      if ($searchResults.length === 0) {
        cy.log('No search results found');
        return; // Exit early if no results found
      }

      if ($searchResults.length === 1) {
        cy.log('One search result found');
        // Ensure the parent element is visible before clicking
        return cy.wrap($searchResults[0])
          .parents(selectors.searchResults)
          .should('not.have.class', 'hide')
          .then(() => {
            cy.wrap($searchResults[0]).click({ force: true }); // Force click in case it’s still not visible
          });
      }

      // If multiple results are found, check for an exact match
      return exactMatch($searchResults, title).then((matchedElement) => {
        if (matchedElement) {
          cy.wrap(matchedElement).click({ force: true }); // Click and return the chain
        } else {
          cy.log('No exact match found, clicking search button');
          cy.get(selectors.searchButton).click(); // Proceed with the default search button click

          return findCardByText(title).then((card) => {
            if (card) {
              return clickWatchNow(card); // Click and return the chain
            } else {
              cy.log('No matching card found on this page, proceeding to pagination...');

              return navigatePages(null, () => {
                return findCardByText(title).then((foundCard) => {
                  if (foundCard) {
                    clickWatchNow(foundCard);
                    return true; // Match found
                  }
                  return false; // No match on this page
                });
              });
            }
          });
        }
      });
    });
};
