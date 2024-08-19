import selectors from './util/selectors';
import { navigatePages } from './pageNavigation';

export const selectCategory = (category, lastPage, onPageAction) => {
  cy.intercept('GET', '**/ajax/show/**').as('getContent');

  cy.get(selectors.navItem).contains(category).click().then(() => {
    cy.wait('@getContent').then(() => {
      cy.get(selectors.content).should('not.have.class', 'loading');
      cy.get(selectors.content).should('exist');
      navigatePages(lastPage, onPageAction);
    });
  });
};
