// import d'une image
import logoPage from '../../img/BaseDuSite/logoPage.png';
// eslint-disable-next-line import/no-cycle
import { getAuthenticatedUser, isAuthenticated, clearAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const isConnected = isAuthenticated();
  const infoUser = getAuthenticatedUser();

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

  if(isConnected && infoUser.user !== 'admin'){
    navbar = `  <nav>
    <div class="navLinks">
      <ul>
        <li><a href="" data-uri="/">Accueil</a></li>
        <li><a href="#mainMiddleContent">Combattants</a></li>
        <li><a href="#sectionTreeAcceuil">Arenes</a></li>
        <li><a href="" data-uri="/handleSuggestedPhrase">Proposer des phrases</a></li>
        <li><a href="" id="btn-log-out"> Se deconnecter<a> </li>
      </ul>
    </div>
    <div id="icons"></div>
  </nav>`;
  } else if(isConnected && infoUser.user === 'admin'){
    navbar = `  <nav>
    <div class="navLinks">
      <ul>
        <li><a href="" data-uri="/">Accueil</a></li>
        <li><a href="#mainMiddleContent">Combattants</a></li>
        <li><a href="#sectionTreeAcceuil">Arenes</a></li>
        <li><a href="" data-uri="/handlePhraseFromGame">Gerer les phrases du jeu</a></li>
        <li><a href="" data-uri="/handlePhrase">Gerer les phrases suggerees</a></li>
        <li><a href="" id="btn-log-out">Se deconnecter<a> </li>
      </ul>
    </div>
    <div id="icons"></div>
  </nav>`;
  } else if(window.location.pathname === '/login'){
    navbar = `  <nav>
    <div class="navLinks">
      <ul>
        <li><a href="" data-uri="/">Accueil</a></li>
      </ul>
    </div>
    <div id="icons"></div>
  </nav>`;
  } else if(window.location.pathname === '/register'){
    navbar = `  <nav>
    <div class="navLinks">
      <ul>
        <li><a href="" data-uri="/">Accueil</a></li>
        <li><a href="" data-uri="/login">se connecter</a></li>
      </ul>
    </div>
    <div id="icons"></div>
  </nav>`;
  } else {
    navbar = `  <nav>
    <div class="navLinks">
      <ul>
        <li><a href="" data-uri="/">Accueil</a></li>
        <li><a href="#mainMiddleContent">Combattants</a></li>
        <li><a href="#sectionTreeAcceuil">Arenes</a></li>
        <li><a href="" data-uri="/login">se connecter</a></li>
      </ul>
    </div>
    <div id="icons"></div>
  </nav>`;
  }

  navbarWrapper.innerHTML += navbar;

  // Ajout de l'écouteur d'événements pour le clic sur l'élément avec l'id "icons"
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

  const btnLogOut = document.querySelector('#btn-log-out');
  if (btnLogOut) {
    btnLogOut.addEventListener('click', () => {
      clearAuthenticatedUser();
      Navigate('/login');
    });
  }
};

export default Navbar;
