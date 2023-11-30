/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
// import { driver } from 'driver.js';
// import 'driver.js/dist/driver.css';
import anime from 'animejs';
// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

import backgroundDemo from '../../img/Arena/arene4.gif';
import vsFight from '../../img/Arena/vsFight.png';

const DemoGame = () => {
  clearPage();
  const navbar = document.querySelector('#navbarWrapper');
  navbar.style.display = 'none';
  const main = document.querySelector('main');
  main.style.backgroundImage = `url(${backgroundDemo})`;
  main.style.backgroundSize = 'cover';
  main.style.height = '100vh';
  main.innerHTML = `
    <div id="arene-demo">
        <section id="headGame">
          <div class="home"></div>
          <div class="lifeBarContainerLeft">
              <div class="lifeBarLeftGreen"></div>
              <div class="lifeBarLeftRed"></div>
          </div>
          <div class='timeLeft'>00:00</div>
          <div>
          <img src='${vsFight}' class='vs'></img>
          </div>
          <div class='timeRight'>00:00</div>
          <div class="lifeBarContainerRight">
              <div class="lifeBarRightGreen"></div>
              <div class="lifeBarRightRed"></div>
          </div>
        </section>
        <div id="charactere-player-1-demo"></div>
        <div id="charactere-player-2-demo"></div>
    </div>
    `;
  // <div id="phrase-demo"><p id="phrase-attribue-demo">La victoire est pour moi!</p></div>

  const charactereOfPlayer2 = document.querySelector('#charactere-player-2-demo');
  const charactereOfPlayer1 = document.querySelector('#charactere-player-1-demo');

  createAnimation(charactereOfPlayer2, '-2006px 0px', 'steps(10)', 1500);
  createAnimation(charactereOfPlayer1, '-3940px 0px', 'steps(17)', 1500);

  function createAnimation(target, startPosition, easing, duration) {
    return anime({
      targets: target,
      backgroundPosition: startPosition,
      easing,
      duration,
      loop: false,
    });
  }

  // const d = driver({
  //   showProgress: true,
  //   steps: [
  //     {
  //       element: '#arene-demo',
  //       popover: {
  //         title: 'Arène',
  //         description: "Choix de l'arène fait par les 2 joueurs : Arène de Dragon Ball Z",
  //         align: 'start',
  //       },
  //     },
  //     {
  //       element: '#charactere-player-1-demo',
  //       popover: {
  //         title: 'Joueur 1',
  //         description: 'Choix du personnage fait par le joueur 1 : Venom',
  //         side: 'right',
  //         align: 'center',
  //       },
  //     },
  //     {
  //       element: '#charactere-player-2-demo',
  //       popover: {
  //         title: 'Joueur 2',
  //         description: 'Choix du personnage fait par le joueur 2 : Broly',
  //         side: 'left',
  //         align: 'center',
  //       },
  //     },
  //     {
  //       element: '#phrase-attribue-demo',
  //       popover: {
  //         title: 'Phrase à écrire pour le joueur 1',
  //         description: 'Chaque joueur aura son tour pour écrire la phrase qui lui aura été attribué de manière au hazard'
  //       },
  //     },
  //   ],
  // });

  // d.drive();
};

export default DemoGame;
