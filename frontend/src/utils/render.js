const navbar = document.querySelector('#navbarWrapper');

const clearPage = () => {
  if(navbar.style.display === 'none'){
    navbar.style.display = 'flex';
  }
  navbar.style.position = 'relative';
  const main = document.querySelector('main')
  main.style.backgroundImage = 'none';
  main.style.height = '0';
  main.innerHTML = '';
};


/**
 * Clear all content on the page.
 * - Hides the navbar.
 * - Clears the inner HTML of the main content.
 */
const clearAllPage = () => {
  // Hide the navbar
  navbar.style.display = 'none';

  // Clear the inner HTML of the main content
  const main = document.querySelector('main');
  main.innerHTML = '';
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

export { clearPage, renderPageTitle, clearAllPage };
