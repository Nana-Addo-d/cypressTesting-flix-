// cypress/support/commands.js

import { visitHome, clickVIPMenu, clickVIPLogin, enterEmail, enterPassword, clickLoginButton } from './helpers/signIn';

Cypress.Commands.add('signIntoAccount', () => {
  visitHome();
  clickVIPMenu();
  clickVIPLogin();
  enterEmail('danielofor761@gmail.com');
  enterPassword('8e5a0873');
  clickLoginButton();
});
