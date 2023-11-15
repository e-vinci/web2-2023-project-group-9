/* eslint-disable camelcase */
import titrePage from '../../img/titrePageAcceuil.png';
import decorBouton from '../../img/imgButton.png';

import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');

  // Créez un élément img
  const titre = document.createElement('img');
  titre.src = titrePage;
  titre.id = 'h1Acceuil';

  // Créez une élément pour notre slogan;
  const slogan = document.createElement('p');
  slogan.textContent = 'taper vite pour taper fort';
  slogan.classList.add('slogan');

  // Création de l'animation avec typerwritter

  // Créez des éléments img pour les images des boutons
  const imgInscription = document.createElement('img');
  imgInscription.src = decorBouton;

  const imgDemo = document.createElement('img');
  imgDemo.src = decorBouton;

  // Ajout titre et slogan
  main.appendChild(titre);
  main.appendChild(slogan);

  main.innerHTML += `
  <section>
    <div id="inscription">
      <p class="pboutton" id="link_to_registerPage">S'inscrire</p>
      ${imgInscription.outerHTML}
    </div>
    <div id="demo">
      <p class="pboutton">Demo</p>
      ${imgDemo.outerHTML}
    </div>
  </section>
`;

const link_to_registerPage = document.querySelector('#link_to_registerPage');
  
link_to_registerPage.addEventListener('click', (e) => {
  e.preventDefault();
  Navigate('/register');
});

}

export default HomePage;
