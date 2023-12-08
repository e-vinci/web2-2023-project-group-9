// import d'une image
import logoPage from '../../img/BaseDuSite/logoPage.png';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');

  navbarWrapper.innerHTML = '';
  // Création de l'élément lien pour le logo
  const logo = document.createElement('a');
  logo.href = '';
  logo.classList.add('logoPage');
  // Création de l'élément image pour le logo
  const logoLink = document.createElement('img');
  logoLink.src = logoPage;
  logoLink.classList.add('logoPage');
  logoLink.dataset.uri = '/';
  // Ajouter l'image au lien
  logo.appendChild(logoLink);
  // Ajouter le lien avec le logo à la barre de navigation
  navbarWrapper.appendChild(logo);

  let navbar = ``;

  // Ajout du reste de la barre de navigation
  if (window.location.pathname === '/login'){
    navbar = `
    <nav>
      <div class="navLinks">
        <ul>
          <li><a href="" data-uri="/">Accueil</a></li>
        </ul>
      </div>
      <div id="icons"></div>
    </nav>
  `;
  }else if (window.location.pathname === '/register'){
    navbar = `
    <nav>
      <div class="navLinks">
        <ul>
          <li><a href="" data-uri="/">Accueil</a></li>
          <li><a href="" data-uri="/login">Se Connecter</a></li>
        </ul>
      </div>
      <div id="icons"></div>
    </nav>
  `;
  } else {
    navbar = `  <nav>
    <div class="navLinks">
      <ul>
        <li><a href="" data-uri="/">Accueil</a></li>
        <li><a href="#mainMiddleContent">Combattants</a></li>
        <li><a href="#sectionTreeAcceuil">Arenes</a></li>
        <li><a href="" data-uri="/login">Se Connecter</a></li>
      </ul>
    </div>
    <div id="icons"></div>
  </nav>`;
  }

  navbarWrapper.innerHTML += navbar;

  // Ajout de l'écouteur d'événements pour le clic sur l'élément avec l'id "icons"
  console.log(navbarWrapper);
  const icons = document.querySelector('#icons');
  icons.addEventListener('click', () => {
    navbarWrapper.classList.toggle("active");
  });
  

  const links = document.querySelectorAll('nav li');

  links.forEach((link) =>{
    link.addEventListener('click', () =>{
      navbarWrapper.classList.remove("active");
    });
  });
};

export default Navbar;
