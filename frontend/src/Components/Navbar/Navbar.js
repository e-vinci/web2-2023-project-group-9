import logoPage from '../../img/BaseDuSite/logoPage.png';
// eslint-disable-next-line import/no-cycle
import { getAuthenticatedUser, isAuthenticated, clearAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  navbarWrapper.style.backgroundColor = 'black';
  const isConnected = isAuthenticated();
  const infoUser = getAuthenticatedUser();

  navbarWrapper.innerHTML = '';
  const logo = document.createElement('a');
  logo.href = '';
  logo.classList.add('logoPage');
  const logoLink = document.createElement('img');
  logoLink.src = logoPage;
  logoLink.classList.add('logoPage');
  logoLink.dataset.uri = '/';
  logo.appendChild(logoLink);
  navbarWrapper.appendChild(logo);

  const showFighterAndArenaLinks = isConnected && infoUser.user !== 'admin';
  const showPhraseLinks = isConnected && infoUser.user === 'admin';
  const isHomePage = window.location.pathname === '/';

  let navbar = `<li><a href="" data-uri="/">Accueil</a></li>`;

  if (isConnected) {
    if ((showFighterAndArenaLinks || isHomePage) && window.location.pathname !== '/handleSuggestedPhrase') {
      navbar += `<li><a href="#mainMiddleContent">Combattants</a></li>`;
      navbar += `<li><a href="#sectionTreeAcceuil">Arenes</a></li>`;
    }

    if (showPhraseLinks) {
      navbar += `<li><a href="" data-uri="/handlePhraseFromGame">Gerer les phrases du jeu</a></li>`;
      navbar += `<li><a href="" data-uri="/handlePhrase">Gerer les phrases suggerees</a></li>`;
    } else {
      navbar += `<li><a href="" data-uri="/handleSuggestedPhrase">Proposer des phrases</a></li>`;
    }

    navbar += `<li><a href="" id="btn-log-out"> Se deconnecter<a></li>`;
  } else if (isHomePage) {
    navbar += `<li><a href="#mainMiddleContent">Combattants</a></li>`;
    navbar += `<li><a href="#sectionTreeAcceuil">Arenes</a></li>`;
    navbar += `<li><a href="" data-uri="/login">se connecter</a></li>`;
  } else {
    navbar += `<li><a href="" data-uri="/login">se connecter</a></li>`;
  }

  const finalNavbar = `<nav>
    <div class="navLinks">
      <ul>
        ${navbar}
      </ul>
    </div>
    <div id="icons"></div>
  </nav>`;

  navbarWrapper.innerHTML += finalNavbar;

  const icons = document.querySelector('#icons');
  icons.addEventListener('click', () => {
    navbarWrapper.classList.toggle("active");
  });

  const links = document.querySelectorAll('nav li');
  links.forEach((link) => {
    link.addEventListener('click', () => {
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
