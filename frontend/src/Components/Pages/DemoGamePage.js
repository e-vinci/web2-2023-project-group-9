

/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import anime from 'animejs';

import { clearPage } from '../../utils/render';
// import Navigate from '../Router/Navigate';

const DemoGame = () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML = `
    <div id="arene-demo">
        <div id="charactere-player-1-demo"></div>
        <div id="charactere-player-2-demo"></div>
        <div id="phrase-demo">
            <p id="phrase-attribue-demo">La victoire est pour moi!</p>
        </div>
    </div>
    `;

  function createAnimation(target, startPosition, easing, duration) {
    return anime({
      targets: target,
      backgroundPosition: startPosition,
      easing,
      duration,
      loop: true,
    });
  }

  const charactereOfPlayer2 = document.querySelector('#charactere-player-2-demo');
  const charactereOfPlayer1 = document.querySelector('#charactere-player-1-demo');

  createAnimation(charactereOfPlayer2, '-2006px 0px', 'steps(10)', 1500);
  createAnimation(charactereOfPlayer1, '-3940px 0px', 'steps(17)', 1500);

  const d = driver({
    showProgress: true,
    steps: [
      {
        element: '#arene-demo',
        popover: {
          title: 'Arène',
          description: "Choix de l'arène fait par les 2 joueurs : Arène de Dragon Ball Z",
          align: 'start',
        },
      },
      {
        element: '#charactere-player-1-demo',
        popover: {
          title: 'Joueur 1',
          description: 'Choix du personnage fait par le joueur 1 : Venom',
          side: 'right',
          align: 'center',
        },
      },
      {
        element: '#charactere-player-2-demo',
        popover: {
          title: 'Joueur 2',
          description: 'Choix du personnage fait par le joueur 2 : Broly',
          side: 'left',
          align: 'center',
        },
      },
      {
        element: '#phrase-attribue-demo',
        popover: {
          title: 'Phrase à écrire pour le joueur 1',
          description: 'Chaque joueur aura son tour pour écrire la phrase qui lui aura été attribué de manière au hazard'
        },
      },
    ],
  });
  
  
  d.drive();

};

export default DemoGame;
