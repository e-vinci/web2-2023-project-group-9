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

const clearAllPage = () =>{
  navbar.style.display = 'none';
  const main = document.querySelector('main');
  main.innerHTML = '';
}

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

export { clearPage, renderPageTitle, clearAllPage };
