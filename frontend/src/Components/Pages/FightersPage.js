import '../../stylesheets/main.css';
import { clearPage } from '../../utils/render';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../img/PortraitFighters', false, /\.(png|jpe?g|gif|svg)$/));

const FightersPage = () => {
  clearPage();
  const main = document.querySelector('main');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  images.forEach((imagePath, index) => {
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = imagePath;
    img.classList.add('fighter-image');
    button.appendChild(img);

    button.addEventListener('click', () => {
      if (index === 0) { // Vérifie si c'est le premier bouton cliqué
        animateSpriteSheet(); // Déclenche l'animation du sprite sheet
      }
    });

    mainContainer.appendChild(button);
  });

  main.appendChild(mainContainer);

  function animateSpriteSheet() {
    const spriteSheet = '../../img/spritesheets/BrolySurPlace.png'; // Chemin vers le sprite sheet
    const spriteSheetImage = new Image();
    spriteSheetImage.src = spriteSheet;

    spriteSheetImage.onload = () => {
      spriteSheetImage.classList.add('sprite-sheet'); // Ajoute la classe 'sprite-sheet' à l'image

      // Affiche le sprite sheet avec la classe ajoutée
      main.appendChild(spriteSheetImage);
    };
  }
};

export default FightersPage;
