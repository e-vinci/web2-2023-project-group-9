/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */

import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import anime from 'animejs';
// import Navigate from '../Router/Navigate';
import { clearAllPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

import backgroundDemo from '../../img/Arena/arene1.gif';
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
    <div id="loading">
      <p>3</p>
    </div>
    <div id="menu">
  <div id="menuGame">
    <i class="fas fa-times" aria-hidden="true" style="font-size: 50px";></i>
    <p class='titreMenu'>Menu</p>
    <p class='link'>
      <ul>
        <a href="" data-uri ="/"><li id="restartLink">Recommencer</li></a>
        <a href="" data-uri="/"><li id="continueGame">Continuer Partie</li></a>
        <a href="" data-uri="/"><li id="accueilLink">Quitter</li></a>
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
            <div class="lifeBarRightRed"></div>
            <div class="lifeBarRightGreen"></div>
        </div>
      </section>
      <div id="charactere-player-1-demo"></div>
      <div id="charactere-player-2-demo"></div>
  </div>
  <div id="phrase-demo"><p id="phrase-attribue-demo">Le monde regarde, sois un champion!</p></div>`;
  loadingPage();
  const charactereOfPlayer2 = document.querySelector('#charactere-player-2-demo');
  const charactereOfPlayer1 = document.querySelector('#charactere-player-1-demo');

  const menuOpen = document.querySelector('#menu');

  let times = document.querySelectorAll('.timeLeft, .timeRight');

  document.querySelector('#restartLink').addEventListener('click', (e) => {
    e.preventDefault();
    menuOpen.style.top = '-100%';
    setTimeout(() => {
      charactereOfPlayer1.classList.remove('transformVenom');
      charactereOfPlayer2.classList.remove('transformBroly');
      times.forEach((t) => {
        t.innerHTML = '00:00';
      });
      loadingPage();
    }, 500);
  });

  document.querySelector('#accueilLink').addEventListener('click', (e) => {
    e.preventDefault();
    Navigate('/');
  });

  document.querySelector('#continueGame').addEventListener('click', (e) => {
    e.preventDefault();
    menuOpen.style.top = '-100%';
  });

  const menu = document.querySelector('.home');
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    menuOpen.style.top = '0%';
  });

  const menuFerme = document.querySelector('.fa-times');
  menuFerme.addEventListener('click', (e) => {
    e.preventDefault();
    menuOpen.style.top = '-100%';
  });

  function loadingPage() {
    const loading = document.querySelector('#loading');
    loading.style.display = 'flex';
    const valueLoading = document.querySelector('#loading p');
    let currentValue = parseInt(valueLoading.innerHTML, 10);
    let intervalID = setInterval(() => {
      if (currentValue !== 0) {
        currentValue -= 1;
        valueLoading.innerHTML = currentValue;
        if (currentValue === 0) {
          valueLoading.innerHTML = 'FIGHT !';
        }
      } else {
        clearInterval(intervalID);
        loading.style.display = 'none';
        valueLoading.innerHTML = '3';
        setTimeout(() => {
          charactereOfPlayer1.classList.add('transformVenom');
          charactereOfPlayer2.classList.add('transformBroly');
          functionDriver();
        }, 200);
      }
    }, 500);
  }

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

  function functionDriver() {
    const d = driver({
      showProgress: true,
      popoverClass: 'driverjs-theme',
      steps: [
        {
          element: '.home',
          popover: {
            title: 'Menu Game',
            description:
              'Menu du jeux qui permettra aux joueurs de continuer, recommencer ou quitter la partie',
            side: 'bottom',
          },
        },
        {
          element: '#arene-demo',
          popover: {
            title: 'Arène',
            description: "Choix de l'arène fait par les 2 joueurs",
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
            description:
              'Chaque joueur aura son tour pour écrire la phrase qui lui aura été attribué de manière au hazard',
          },
        },
        {
          element: '.lifeBarContainerLeft',
          popover: {
            title: 'Barre de vie du joueur',
            description: 'A chaque tour le joueur verra sa vie baissée, si',
          },
        },
        {
          element: '.timeLeft',
          popover: {
            title: 'Le temps',
            description: 'pris pour écrire la phrase est inférieur au temps du joueur 2'
          },
        },
        {
            element: '#phrase-attribue-demo',
            popover: {
              title: 'Phrase à écrire',
              description: 'A vous de jouer, vous incarnez Venom !',
            },
        },
      ],
    });
    d.drive();
  }

  let text = document.querySelector('#phrase-attribue-demo');
  text.innerHTML = "Je m'appelle Sohaib";
  let contentOfText = text.textContent;
  let letters = contentOfText.split('');

  text.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join('');

  let currentIndex = 0;
  let timer;
  let countdown;
  let countdownStarted = false;

  const spans = text.querySelectorAll('span');
  const timeLeft = document.querySelector('.timeLeft');

  function startTimer() {
    let time = 0;
    timer = setInterval(() => {
      time++;
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      timeLeft.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
    }, 1000);
  }

  function startCountdown() {
    let count = 3;
    countdown = setInterval(() => {
      if (count > 0) {
        timeLeft.textContent = count.toString();
        count--;
      } else {
        clearInterval(countdown);
        startTimer();
      }
    }, 1000);
  }

  document.addEventListener('keydown', (e) => {
    if (currentIndex < contentOfText.length) {
      if (e.key.length === 1) {
        if(!countdown){
          startCountdown();
        }
        let letterSpan = spans[currentIndex];
        if (e.key === contentOfText[currentIndex]) {
          letterSpan.style.color = 'green';
          currentIndex++;
          if (currentIndex === contentOfText.length) {
            clearInterval(timer);
          }
        } else {
          letterSpan.style.color = 'red';
        }
      }
    }
  });
};

export default DemoGame;
