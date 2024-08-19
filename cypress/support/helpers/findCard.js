import selectors from './util/selectors';

export const findCardByText = (text) => {
  const upperCaseText = text.toUpperCase();

  return cy.get(selectors.content).find(selectors.cardFront).then(($cards) => {
    let foundCard = null;

    return cy.wrap($cards).each(($card) => {
      return cy.wrap($card).within(() => {
        return cy.get(selectors.cardFooter).then(($footer) => {
          const footerText = $footer.text().trim().toUpperCase();

          // Check for exact match rather than includes
          if (footerText === upperCaseText) {
            foundCard = $card;
            return false; // Stop iteration
          }
        });
      });
    }).then(() => {
      if (foundCard) {
        return cy.wrap(foundCard);
      } else {
        cy.log(`Card with text "${text}" not found`);
        return null;
      }
    });
  });
};
