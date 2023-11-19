
import Typewriter from 'typewriter-effect/dist/core';
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
  slogan.classList.add('slogan');

  // Création de l'animation avec typerwritter
  const typewriter = new Typewriter(slogan, {
    loop: false,
    delay: 55,
  });

  // Utilisez la méthode `typeString` pour configurer l'animation
  typewriter.typeString('<i>taper vite pour taper fort<i>').start();
  
  // Créez des éléments img pour les images des boutons
  const imgInscription = document.createElement('img');
  imgInscription.src = decorBouton;

  const imgDemo = document.createElement('img');
  imgDemo.src = decorBouton;

  main.innerHTML += `
  <section id = "mainContent">
  </section>
  <section id ="buttonSection">
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

  const mainContent = document.querySelector('#mainContent');

  mainContent.appendChild(titre);
  mainContent.appendChild(slogan);
};

export default HomePage;
