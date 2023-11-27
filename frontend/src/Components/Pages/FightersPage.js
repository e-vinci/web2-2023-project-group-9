import '../../stylesheets/main.css';
import anime from 'animejs';
import { clearPage } from '../../utils/render';


function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../img/PortraitFighters', false, /\.(png|jpe?g|gif|svg)$/));

const brolySurPlace = document.querySelector('#brolySurPlace');

const FightersPage = () => {
  clearPage();
  const main = document.querySelector('main');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  images.forEach((imagePath) => {

    main.innerHTML += 
    `<section id="spriteAcceuil">
    <div id="brolySurPlace">
    </div></section>`

    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = imagePath;
    img.classList.add('fighter-image');
    button.appendChild(img);

    mainContainer.appendChild(button);
  });

  main.appendChild(mainContainer);

 // const Broly = document.querySelector('#brolySurPlace');

 /* const venom = document.querySelector('#venom');
  const chunLi = document.querySelector('#chunLi');
  const captainA = document.querySelector('#captainA'); */

  createAnimation(brolySurPlace, '-2006px 0px', 'steps(10)', 1500);

/* createAnimation(venom, '-3940px 0px', 'steps(17)', 1500);
  createAnimation(chunLi, '-1302px 0px', 'steps(14)', 1500);
  createAnimation(captainA, '-441px 0px', 'steps(3)', 1500); */

/* function animateSpriteSheet() {
    const spriteSheet = '../../img/spritesheets/BrolySurPlace.png'; // Chemin vers le sprite sheet
    const spriteSheetImage = new Image();
    spriteSheetImage.src = spriteSheet;

    spriteSheetImage.onload = () => {
      spriteSheetImage.classList.add('sprite-sheet'); // Ajoute la classe 'sprite-sheet' à l'image

      // Affiche le sprite sheet avec la classe ajoutée
      main.appendChild(spriteSheetImage);
    };
  } */

  function createAnimation(target, startPosition, easing, duration) {
    return anime({
      targets: target,
      backgroundPosition: startPosition,
      easing,
      duration,
      loop: true,
    });
  }

 /* function animationImg(nomImg) {
    animation.forEach((animeElement) => {
      if (nomImg.className === animeElement.id) {
        animeElement.style.visibility = 'visible';
      }
    });
  }

  function hideAnimations() {
    animation.forEach((a) => {
      a.style.visibility = 'hidden';
    });
  }

*/
};

export default FightersPage;
