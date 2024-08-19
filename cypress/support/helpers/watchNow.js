import selectors from './util/selectors';

export const clickWatchNow = (card) => {
  if (card) {
    cy.wrap(card).should('exist').parent().within(() => {
      // Try to flip the card first, if that's possible
      cy.wrap(card).click({ force: true }); // Simulate a click to flip the card
      
      // After the flip, try to click on the "Watch Now" button
      cy.get(selectors.cardBack).within(() => {
        cy.contains('a.btn.btn-md.btn-info.t16', 'Watch Now').click({ force: true });
      });
    });
  } else {
    // If the card is not found, log the titles of all cards
    cy.get(selectors.cardFront).each(($card) => {
      cy.wrap($card).within(() => {
        cy.get(selectors.cardFooter).then(($footer) => {
          const title = $footer.text().trim();
          cy.log('Card title:', title);
        });
      });
    });
  }
};
