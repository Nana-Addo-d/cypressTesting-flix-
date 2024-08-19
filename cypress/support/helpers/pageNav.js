import selectors from './util/selectors';

export const navigatePages = (lastPage, onPageAction) => {
  const clickNextIfAvailable = () => {
    cy.get(selectors.paginationNextButton).then(nextButtons => {
      const nextButton = nextButtons.filter((index, button) => {
        const isDisabled = Cypress.$(button).parent().hasClass('disabled');
        const hasPointerEventsNone = Cypress.$(button).css('pointer-events') === 'none';
        return !isDisabled && !hasPointerEventsNone;
      }).first();

      if (nextButton.length > 0) {
        const currentPage = parseInt(nextButton.attr('data-p')) - 1;
        const lastPageForCat = parseInt(nextButtons.last().attr('data-p'));

        const effectiveLastPage = Math.min(lastPage || lastPageForCat, lastPageForCat);

        cy.log(`Current Page: ${currentPage}, Last Page: ${effectiveLastPage}`);
          // Set up intercept and alias before the click
          cy.intercept('GET', '**/ajax/show/**').as('getContent');
        if (currentPage < effectiveLastPage) {
          cy.wrap(nextButton)
            .should('be.visible')
            .click(); // Click the button

          // Introduce a delay of 1000ms (1 second) before waiting for the new content
          cy.wait(1000); // Adjust the delay duration as needed

          cy.wait('@getContent').then(() => {
            cy.get(selectors.content).should('not.have.class', 'loading');
            cy.get(selectors.content).should('exist'); // Ensure the content exists after loading

            // Introduce a delay before calling the function again
            cy.wait(1000); // Another delay before moving to the next page

            return clickNextIfAvailable(); // Recursively call to go to the next page
          });
        } else {
          cy.log('Reached the last page. Returning to the first page.');
          goToFirstPage();
        }
      } else {
        cy.log('No more pages to navigate or Next button is disabled.');
        goToFirstPage();
      }
    });
  };

  const goToFirstPage = () => {
    cy.get('a.page-link.navb.text-info[data-p="1"]').first().then(firstButton => {
      if (firstButton.length > 0) {
        cy.wrap(firstButton)
          .should('be.visible')
          .click();
        cy.wait(1000); // Wait for the first page to load
        cy.log('Returned to the first page, ending test.');
        // End the test or perform any other final actions here
      } else {
        cy.log('First page button not found, ending test.');
      }
    });
  };

  clickNextIfAvailable();
};
