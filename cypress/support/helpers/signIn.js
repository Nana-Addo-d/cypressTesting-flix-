// cypress/support/helpers/signIn.js

export const visitHome = () => cy.visit('/home');

export const clickVIPMenu = () => 
  cy.contains('VIP Menu').then((dropDown) => {
    cy.wrap(dropDown).click({ force: true });
  });

export const clickVIPLogin = () => cy.get('.dropdown-menu').contains('VIP Login').click({ force: true });

export const enterEmail = (email) => 
  cy.get('tbody').contains('tr', 'Enter VIP Email:').then((userName) => {
    cy.wrap(userName).find('[name="uname"]').click().type(email);
  });

export const enterPassword = (password) => 
  cy.get('tbody').contains('tr', 'Enter VIP Password:').then((userPassword) => {
    cy.wrap(userPassword).find('[name="password"]').click().type(password);
  });

export const clickLoginButton = () => cy.get('button#loginbtnbd').click({ force: true });
