import titrePage from '../../img/titrePageAcceuil.png';
import decorBouton from '../../img/imgButton.png';

import { clearPage } from '../../utils/render';

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');

  // Créez un élément img
  const titre = document.createElement('img');
  titre.src = titrePage;
  titre.id = 'h1Acceuil';

  // Créez un élément pour le slogan

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
      <p class="pboutton">S'inscrire</p>
      ${imgInscription.outerHTML}
    </div>
    <div id="demo">
      <p class="pboutton">Demo</p>
      ${imgDemo.outerHTML}
    </div>
  </section>
`;
};

export default HomePage;
