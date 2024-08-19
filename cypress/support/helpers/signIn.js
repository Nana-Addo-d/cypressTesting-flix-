import selectors from './util/selectors';

export const visitHome = () => cy.visit('/home');

export const clickVIPMenu = () => {
  cy.get(selectors.vipMenu).should('be.visible').then(($elements) => {
    cy.log(`Found ${$elements.length} elements matching the VIP menu selector.`);
    $elements.each((index, el) => {
      cy.log(`Element ${index}: ${el.outerHTML}`);
    });
  });

   // Force the dropdown menu to be visible using JavaScript
   cy.get(selectors.vipDropdownMenu).invoke('show').should('be.visible');

   cy.get(selectors.vipDropdownMenu).should('not.have.css', 'display', 'none'); // Ensure dropdown is visible
 };

export const clickVIPLogin = () => {
  // Ensure the dropdown menu is visible before clicking the VIP Login link
  cy.get(selectors.vipDropdownMenu).should('be.visible');
  cy.get(selectors.vipLoginLink).should('be.visible').click();
};

export const enterEmail = (email) => {
  cy.get(selectors.vipEmailInput).should('be.visible').type(email, { delay: 100 });
};

export const enterPassword = (password) => {
  cy.get(selectors.vipPasswordInput).should('be.visible').type(password, { delay: 100 });
};

export const clickLoginButton = () => {
 /*  // Set up the specific intercept for the login request first
  cy.intercept('POST', '/ajax/viplogin').as('loginRequest');

  // Set up a general intercept for logging all POST requests
  cy.intercept('POST', '**').as('allPostRequests'); */

  // Click the login button
  cy.get(selectors.vipLoginButton).should('be.visible').click();

  /* // Log all POST requests that occur
  cy.wait('@allPostRequests').then((interception) => {
    cy.log('Intercepted Request:', interception.request);
    cy.log('Intercepted Request URL:', interception.request.url);
  }); */

  /* // Now wait for the specific login request
  cy.wait('@loginRequest').then((interception) => {
    if (interception) {
      cy.log('Login Request Intercepted:', interception);
    } else {
      cy.log('Login Request Not Intercepted');
    }
  }); */
  
  // Optionally, verify if an error message appears or if the login was successful
  cy.get('body').then(($body) => {
    if ($body.find(selectors.errorMessage).length > 0) {
      cy.get(selectors.errorMessage).should('not.be.empty'); // Check if an error message is displayed
    } else {
      cy.url().should('include', '/home'); // Assuming successful login redirects to /home
      cy.get(selectors.vipDropdownMenu).invoke('show').should('be.visible');
      cy.get('a.nav-link.dropdown-item.pointer.logout').should('be.visible');
    }
  });
};
