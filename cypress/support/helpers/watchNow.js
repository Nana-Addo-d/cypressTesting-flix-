export const clickWatchNow = (card) => {
  if (card) {
    cy.wrap(card).should('exist').parent().within(() => {
      cy.get('.card.cardthumb.back.m-0').within(() => {
        cy.contains('a.btn.btn-md.btn-info.t16', 'Watch Now').click({ force: true });
      });
    });
  } else {
    // If the card is not found, log the titles of all cards
    cy.get('.card.cardthumb.front.m-0').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('.card-footer.mt-auto.text-center').then(($footer) => {
          const title = $footer.text().trim();
          cy.log('Card title:', title);
        });
      });
    });
  }
};
