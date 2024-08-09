export const handlePagination = (lastPage) => {
  const nextButtonSelector = '.pagination a.page-link.navb:contains("Next")';
  const contentSelector = '#content';
  
  // Unified intercept for movies, TV shows, and episodes
  cy.intercept('GET', '**/ajax/show/**').as('getContent');

  const clickNextIfAvailable = () => {
    cy.get(nextButtonSelector).then(nextButtons => {
      const nextButton = nextButtons.filter((index, button) => !Cypress.$(button).parent().hasClass('disabled')).first();
      const currentPage = parseInt(nextButton.attr('data-p')) - 1;
      const lastPageForCat = parseInt(nextButtons.last().attr('data-p'));

      const effectiveLastPage = Math.min(lastPage, lastPageForCat);

      cy.log(`Current Page: ${currentPage}, Last Page: ${effectiveLastPage}`);
      
      if (currentPage < effectiveLastPage) {
        cy.wrap(nextButton).click({ force: true });

        // Wait for the network request to complete
        cy.wait('@getContent').then(() => {
          cy.get(contentSelector).should('not.have.class', 'loading');
          cy.get(contentSelector).should('exist'); // Ensure the content exists after loading
          cy.wait(1000); // Optionally, add a fixed wait time if necessary
          clickNextIfAvailable(); // Recursively call to go to the next page
        });
      } else {
        cy.log('Reached the specified page limit or last page');
      }
    });
  };

  const navSelector = '.nav-item';

  const selectCategory = () => {
    const categories = ['Movies', 'TV Shows', 'TV Episodes'];

    categories.forEach(category => {
      cy.get(navSelector).contains(category).click().then(() => {
        cy.wait('@getContent').then(() => {
          cy.get(contentSelector).should('not.have.class', 'loading');
          cy.get(contentSelector).should('exist'); // Ensure the content exists after loading
          cy.wait(1000); // Optionally, add a fixed wait time if necessary
          clickNextIfAvailable();
        });
      });
    });
  };
  
  selectCategory();
};

export default handlePagination;
