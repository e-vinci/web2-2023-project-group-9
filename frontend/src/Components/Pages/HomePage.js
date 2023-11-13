import titrePage from '../../img/titrePageAcceuil.png';

import { clearPage } from '../../utils/render';

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

  // Ajoutez l'élément img à l'élément main
  main.appendChild(titre);
  main.appendChild(slogan);
};

export default HomePage;
