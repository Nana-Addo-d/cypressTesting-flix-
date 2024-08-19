// cypress/support/helpers/util/selectors.js

export const selectors = {
  searchBox: 'form.form-inline .form-control.searchinput',
  searchResults: 'form.form-inline .search-results',
  searchButton: 'form.form-inline .btn-info.searchbutton',
  searchResultItem: '.rounded.list-group-item.list-group-item-action.search-result.p-0',
  content: '#content',
  vipMenu: '.vipmenu .nav-link.pointer', // Updated to target the specific VIP Menu link with the pointer class
  vipDropdownMenu: '.vipmenu .dropdown-menu', // Selector for the dropdown menu
  vipLoginLink: '.vipmenu .dropdown-item[href="/viplogin"]', // Selector for the VIP Login link
  vipLoginButton: '#loginbtnbd', // Selector for the login button
  vipEmailInput: 'form#login input[name="uname"]', // Refined to target the input inside the login form
  vipPasswordInput: 'form#login input[name="password"]', // Refined similarly for the password field
  errorMessage: '.errortxt', // Selector for the error message span
  cardTitle: '.title.t14',
  cardFooter: '.card-footer.mt-auto.text-center',
  cardFront: '.card.cardthumb.front.m-0',
  cardBack: '.card.cardthumb.back.m-0',
  paginationNextButton: '.pagination .page-link[data-p]:contains("Next")',
  
};

export default selectors;
