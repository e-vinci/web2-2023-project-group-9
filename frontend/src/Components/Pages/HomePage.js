import titrePage from '../../img/titrePageAcceuil.png';

import { clearPage } from '../../utils/render';

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');

  // Créez un élément img
  const titre = document.createElement('img');
  titre.src = titrePage;
  titre.id = 'h1Acceuil';

  // Créez un élément pour le slogan

  // Ajoutez l'élément img à l'élément main
  main.appendChild(titre);
};

export default HomePage;
