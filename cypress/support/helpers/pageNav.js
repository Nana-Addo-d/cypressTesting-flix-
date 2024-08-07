// pageNav.js

const handlePagination = () => {
    const nextButtonSelector = '.pagination a.page-link.navb';
  const contentSelector = '#content';
    const clickNextIfAvailable = () => {
      cy.get(nextButtonSelector).then(nextButton => {
        if (nextButton.length > 0 && !nextButton.parent().hasClass('disabled')) {
          cy.wrap(nextButton).click({ force: true });
          cy.get(contentSelector).should('not.have.class', 'loading');
        } else {
          cy.log('No more pages available');
        }
      });
    };
  
    clickNextIfAvailable();
  };
  
  export default handlePagination;
  