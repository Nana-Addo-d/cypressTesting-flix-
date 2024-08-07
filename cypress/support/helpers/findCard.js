// cypress/support/helpers/findCardByText.js

export const findCardByText = (text) => {
  return cy.get('#content').find('.card.cardthumb.front.m-0').then(($cards) => {
    let foundCard = null;

    $cards.each((index, $card) => {
      cy.wrap($card).within(() => {
        cy.get('.card-footer.mt-auto.text-center').then(($footer) => {
          if ($footer.text().includes(text)) {
            foundCard = $card;
            
            return false; // Break the loop
          }
        });
      });

      if (foundCard) {
        return false; // Break the loop
      }
    });

    return foundCard ? cy.wrap(foundCard) : null;
  });
};
