// import anime from 'animejs';

import arena from '../../img/Arena/areneDBZ.png';
import brolyPortrait from '../../img/PortraitFighters/Broly.png';
import venomPortrait from '../../img/PortraitFighters/Venom.png';
import chunLiPortrait from '../../img/PortraitFighters/Chun li.png';
import spiderManPortrait from '../../img/PortraitFighters/Spider man.png';
import captainAmerica from '../../img/PortraitFighters/Captain america.png';
import gokuPortrait from '../../img/PortraitFighters/Goku.png';
import gohanPortrait from '../../img/PortraitFighters/Gohan.png';

import { clearPage } from '../../utils/render';



const FightersPage = () => {
  clearPage();
  const main = document.querySelector('main');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  main.innerHTML += 
    `<section class="main-container">
    <img src="${brolyPortrait}" alt="" >
    <img src="${venomPortrait}" alt="" >
    <img src="${spiderManPortrait}" alt="" >
    <img src="${chunLiPortrait}" alt="" >
    <img src="${captainAmerica}" alt="" >
    <img src="${gokuPortrait}" alt="" >
    <img src="${gohanPortrait}" alt="" >
  </section>


    
    
    
    
    <section id="spriteAcceuil">
      <div id="broly"></div>
      <div id="venom"></div>
      <div id="chunLi"></div>
      <div id="captainA"></div>
    <img src="${arena}" alt="" class="arena">
    </section>`;

  

  main.appendChild(mainContainer);

 /* const venom = document.querySelector('#venom');
  const chunLi = document.querySelector('#chunLi');
  const captainA = document.querySelector('#captainA'); */

 // const brolySurPlace = document.querySelector('#brolySurPlace');
 // const arenaElement = document.querySelector('.arena');

  // Fonction pour animer le sprite sheet de Broly
 // createAnimation(brolySurPlace, '-2006px 0px', 'steps(10)', 1500);
/* createAnimation(venom, '-3940px 0px', 'steps(17)', 1500);
  createAnimation(chunLi, '-1302px 0px', 'steps(14)', 1500);
  createAnimation(captainA, '-441px 0px', 'steps(3)', 1500); */

 /* function animateBrolySpriteSheet() {
    createAnimation(brolySurPlace, '-2006px 0px', 'steps(10)', 1500);
    // Affichage de l'arène
    arenaElement.style.display = 'block';
  } 

  function createAnimation(target, startPosition, easing, duration) {
    return anime({
      targets: target,
      backgroundPosition: startPosition,
      easing,
      duration,
      loop: true,
    });
  } */
}; 

export default FightersPage;