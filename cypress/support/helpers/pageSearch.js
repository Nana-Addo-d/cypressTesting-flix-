import handlePagination from './pageNav';
import { findCardByText } from './findCard';
import { clickWatchNow } from './watchNow';
import selectors from './util/selectors';

export const searchMovieThroughPages = (title) => {
  const formattedTitle = toTitleCase(title);

  const searchInPage = () => {
    return findCardByText(formattedTitle).then((card) => {
      if (card) {
        cy.log(`Movie "${formattedTitle}" found!`);
        clickWatchNow(card);
        return true; // Indicate that the movie was found
      } else {
        cy.log(`Movie "${formattedTitle}" not found on this page.`);
        return false; // Indicate that the movie was not found
      }
    });
  };

  searchInPage().then((found) => {
    if (!found) {
      cy.log(`Movie "${formattedTitle}" not found on the home page, searching through categories...`);

      const searchHandler = () => {
        return searchInPage().then((foundOnPage) => {
          if (foundOnPage) {
            return false; // Stop pagination if the movie is found
          }
        });
      };

      handlePagination(null, searchHandler);
    }
  });
};

export default searchMovieThroughPages;

// Utility function to convert a string to Title Case
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
