/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
// import { driver } from 'driver.js';
// import 'driver.js/dist/driver.css';
import anime from 'animejs';
// import Navigate from '../Router/Navigate';
import { clearAllPage } from '../../utils/render';

import backgroundDemo from '../../img/Arena/arene4.gif';
import vsFight from '../../img/Arena/vsFight.png';
// import {driver} from 'driver.js';
// import 'driver.js/dist/driver.css';

const DemoGame = () => {
  clearAllPage();
  const main = document.querySelector('main');
  main.style.backgroundImage = `url(${backgroundDemo})`;
  main.style.backgroundSize = 'cover';
  main.style.height = '100vh';
  main.innerHTML = `
    <div id="menu">
    <div id="menuGame">
      <i class="fas fa-times" aria-hidden="true" style="font-size: 50px";></i>
      <p class='titreMenu'>Menu</p>
      <p class='link'>
        <ul>
          <a href="" data-uri="/"><li>Recommencer</li></a>
          <a href="" data-uri="/"><li>Continuer Partie</li></a>
          <a href="" data-uri="/"><li>Quitter</li></a>
        </ul>
      </p>
    </div>
    </div>
    <div id="arene-demo">
        <section id="headGame">
          <div class="home"><i class="fas fa-home" style="font-size: 50px; color: white;"></i>
          </div>
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
    <div id="phrase-demo"><p id="phrase-attribue-demo">La victoire est pour moi!</p></div>
    `;
  
  const menu = document.querySelector('.home');
  const menuOpen = document.querySelector('#menu');
  menu.addEventListener('click',(e)=>{
    e.preventDefault();
    menuOpen.style.top = '0%';
  })

  const menuFerme = document.querySelector('.fa-times');
  menuFerme.addEventListener('click',(e)=>{
    e.preventDefault();
    menuOpen.style.top = '-100%'
  })


  const charactereOfPlayer2 = document.querySelector('#charactere-player-2-demo');
  const charactereOfPlayer1 = document.querySelector('#charactere-player-1-demo');

  charactereOfPlayer1.classList.add('transformVenom');
  charactereOfPlayer2.classList.add('transformBroly')

  transformation(charactereOfPlayer2, 1500);
  transformation(charactereOfPlayer1, 1500);

  function transformation(target, duration) {
    return anime({
      targets: target,
      loop: true,
      duration,
    });
  }
  // charactereOfPlayer2.classList.remove('transformBroly');
  // charactereOfPlayer2.classList.add('moveBroly');

  // shift(charactereOfPlayer2,1500);

  // function shift(target,duration) {
  //     return anime({
  //         targets: target,
  //         translateX: {
  //           value: '-=600px', // changez cette valeur pour contrôler la distance de déplacement
  //           duration,
  //         },
  //         easing : 'linear',
  //         loop: false,
  //     });
  // }


  // const d = driver({
  //   showProgress: true,
  //   popoverClass: "driverjs-theme",
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
