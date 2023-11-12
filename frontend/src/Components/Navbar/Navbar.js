// import d'une image
import logoPage from '../../img/logoPage.png';
import Navigate from '../Router/Navigate';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');

  // Création de l'élément image pour le logo
  const logo = document.createElement('img');
  logo.src = logoPage; // Mettez à jour le chemin ici
  logo.classList.add('logoPage');

  // Création de la balise 'a' pour le lien du logo
  const logoLink = document.createElement('a');
  logoLink.href = '#';
  logoLink.appendChild(logo);

  // Ajout du logo avant la balise 'nav'
  navbarWrapper.appendChild(logoLink);

  // Ajout du reste de la barre de navigation
  const navbar = `
    <nav>
      <div class="navLinks">
        <ul>
          <li><a href="#" data-uri="/" id="home">Accueil</a></li>
          <li><a href="#">Combattants</a></li>
          <li><a href="#">Arenes</a></li>
          <li><a href="#" data-uri="/login">Se Connecter</a></li>
        </ul>
      </div>
      <ul id="icons">
        <!-- Assumez que vous avez des éléments à l'intérieur de l'élément avec l'id "icons" -->
      </ul>
    </nav>
  `;

  navbarWrapper.innerHTML += navbar;

  // Ajout de l'écouteur d'événements pour le clic sur l'élément avec l'id "icons"
  const icons = document.querySelector('#icons');
  icons.addEventListener('click', () => {
    navbarWrapper.classList.toggle("active");
  });

  // Ajout de l'ecouteur d'evenement pour le clic du lien vers la page d'accueil 
  const home = document.querySelector("#home");
  home.addEventListener("click", (e) => {
    e.preventDefault();
    Navigate('/');
  })
};

export default Navbar;
