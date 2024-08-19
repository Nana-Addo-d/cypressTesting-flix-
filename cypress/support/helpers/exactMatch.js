// cypress/support/helpers/util/exactMatch.js

export const exactMatch = ($results, title) => {
  let matchedElement = null;

  return cy.wrap($results).each(($result) => {
    const movieTitle = $result.find('.title.t14').attr('title').trim().toUpperCase();
    cy.log(`Checking result: "${movieTitle}" against title: "${title.toUpperCase()}"`);

    if (movieTitle === title.toUpperCase()) {
      cy.log('Exact match found');
      matchedElement = $result; // Store the matched element
      return false; // Break out of the loop
    }
  }).then(() => {
    if (matchedElement) {
      return cy.wrap(matchedElement); // Return the matched element
    } else {
      return null; // Return null if no match is found
    }
  });
};

export default exactMatch;
