/* eslint-disable no-undef */
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
import anime, { easings } from 'animejs';
// import Navigate from '../Router/Navigate';
import { clearAllPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

import backgroundDemo from '../../img/Arena/arene5.gif';
import vsFight from '../../img/Arena/vsFight.png';

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
        <div class='timeRight'>00:15</div>
        <div class="lifeBarContainerRight">
            <div class="lifeBarRightRed"></div>
            <div class="lifeBarRightGreen"></div>
        </div>
      </section>
      <div id="charactere-player-1-demo" class="baseV"></div>
      <div id="charactere-player-2-demo" class="baseB"></div>
  </div>
  <div id="phrase-demo"><p id="phrase-attribue-demo">Bienvenue dans la communauté Mortal Keyboard!</p></div>`;
  const charactereOfPlayer2 = document.querySelector('#charactere-player-2-demo');
  const charactereOfPlayer1 = document.querySelector('#charactere-player-1-demo');
  const phrase = document.querySelector('#phrase-demo');
  const menuOpen = document.querySelector('#menu');
  const times = document.querySelectorAll('.timeLeft, .timeRight');
  const timeLeft = document.querySelector('.timeLeft');
  const text = document.querySelector('#phrase-attribue-demo');
  const player1LifeGreenDisplay = document.querySelector('.lifeBarLeftGreen');
  const player1LifeRedDisplay = document.querySelector('.lifeBarLeftRed');
  const player2LifeGreenDisplay = document.querySelector('.lifeBarRightGreen');
  const player2LifeRedDisplay = document.querySelector('.lifeBarRightRed');

  let timer;
  let countdown;
  let contentOfText = text.textContent;
  let letters = contentOfText.split('');
  let spans;

  loadingPage();

  function startCountdown() {
    let count = 5;
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

  function startTimer() {
    write(0);
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

  function write(currentIndex, resetIndex = false) {
    text.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join('');
    spans = text.querySelectorAll('span');
    if(resetIndex){
      document.removeEventListener('keydown',keydownHandler);
    }
    function keydownHandler(e) {
      if (currentIndex < contentOfText.length) {
        if (e.key.length === 1) {
          let letterSpan = spans[currentIndex];
          if (e.key === contentOfText[currentIndex]) {
            letterSpan.style.color = 'green';
            if (!resetIndex) {
              currentIndex++;
            }else{
              currentIndex = 1
              resetIndex = false;
            }            
            if (currentIndex === contentOfText.length) {
              clearInterval(timer);
              let timerFinal = [];
              times.forEach((time) => {
                timerFinal.push(time.innerHTML);
              });
              let result = compareTime(timerFinal);
              setColors(result);
            }
          } else {
            letterSpan.style.color = 'red';
          }
        }
      }
    }
    document.addEventListener('keydown', keydownHandler);
    return keydownHandler;
  }

  document.querySelector('#restartLink').addEventListener('click', (e) => {
    e.preventDefault();
    menuOpen.style.top = '-100%';
    phrase.style.top = '50%';
    charactereOfPlayer1.classList.remove('transformVenom');
    charactereOfPlayer2.classList.remove('transformBroly');
    clearInterval(timer); 
    clearInterval(countdown);
    timeLeft.innerHTML = '00:00';
    times.forEach((time) => {
      time.style.color = 'white';
    });
    write(0, true);
    player1LifeGreenDisplay.style.flex = `100%`;
    player1LifeRedDisplay.style.flex = `0%`;
    player2LifeGreenDisplay.style.flex = `100%`;
    player2LifeRedDisplay.style.flex = `0%`;
    charactereOfPlayer1.className = 'baseV';
    charactereOfPlayer2.className = 'baseB';
    phrase.style.visibility = 'visible';
    loadingPage();
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
          functionDriver();
        }, 200);
      }
    }, 500);
  }

  function transformation(target, duration) {
    return anime({
      targets: target,
      duration,
      complete: () => {
        charactereOfPlayer1.classList.add('onTheSpotVenom');
        charactereOfPlayer2.classList.add('onTheSpotBroly');
      },
    });
  }

  function functionDriver() {
    let countdownStarted = false;
    const d = driver({
      showButtons: ['next', 'previous', 'close'],
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
            description:
              'A chaque tour le joueur verra sa vie baissée, si le temps pris pour écrire la phrase est inférieur au temps du joueur 2',
          },
        },
        {
          element: '.timeLeft',
          popover: {
            title: 'Le temps',
            description:
              "il y aura un temps de préparation de 5 secondes pour chaque joueur suivi par un cronomètre qui s'arrétera des que le joueur entre la dernière lettre de la phrase",
          },
        },
        {
          element: '.timeRight',
          popover: {
            title: 'Le temps',
            description: 'Nous supposons que le joueur 2 à taper une phrase avec à un temps de',
          },
        },
        {
          element: '#phrase-attribue-demo',
          popover: {
            title: 'La phrase à taper',
            description:
              'A vous de jouer, vous incarnez Venom, le compte à rebours commencera à la fin du Tutoriel, Enjoy !',
          },
        },
      ],
      onDestroyed: () => {
        if (!countdownStarted) { // Démarrer le compte à rebours uniquement si ce n'est pas déjà en cours
          startCountdown();
          countdownStarted = true;
        }
        transformation(charactereOfPlayer2, 1500);
        transformation(charactereOfPlayer1, 1500);
        charactereOfPlayer1.classList.add('transformVenom');
        charactereOfPlayer2.classList.add('transformBroly');
      },
      onCloseClick: () => {
        d.destroy();
        if (!countdownStarted) { // Démarrer le compte à rebours uniquement si ce n'est pas déjà en cours
          startCountdown();
          countdownStarted = true;
        }
        transformation(charactereOfPlayer2, 1500);
        transformation(charactereOfPlayer1, 1500);
        charactereOfPlayer1.classList.add('transformVenom');
        charactereOfPlayer2.classList.add('transformBroly');
      },
    });
    d.drive();
  }

  function compareTime(timerFinal) {
    const timeInSeconds = timerFinal.map((timeString) => {
      const [minutes, seconds] = timeString.split(':').map(Number);
      return minutes * 60 + seconds;
    });

    // Comparer les temps
    if (timeInSeconds[0] < timeInSeconds[1]) {
      return 'player1'; // Joueur 1 a mis moins de temps
    }
    if (timeInSeconds[0] > timeInSeconds[1]) {
      return 'player2'; // Joueur 2 a mis moins de temps
    }
    return 'equal'; // Les joueurs ont mis le même temps
  }

  function setColors(result) {
    if (result === 'player1') {
      times[0].style.color = 'green';
      times[1].style.color = 'red';
      phrase.style.visibility = 'hidden';
      charactereOfPlayer1.classList.add('attackVenom')
      shiftV(charactereOfPlayer1,1500);
    } else if (result === 'player2') {
      times[0].style.color = 'red';
      times[1].style.color = 'green';
      phrase.style.visibility = 'hidden';
      charactereOfPlayer2.classList.add('attackBroly')
      shiftB(charactereOfPlayer2,1500);
    } else if(result === 'equal'){
      phrase.style.visibility = 'hidden';
      times.forEach((time) => {
        time.style.color = 'orange';
      });
    }
  }

  // charactereOfPlayer2.classList.remove('transformBroly');
  // charactereOfPlayer2.classList.add('moveBroly');

  // shift(charactereOfPlayer2,1500);

  function shiftV(target,duration) {
      return anime({
          targets: target,
          translateX: {
            value: '+=600px',
            duration,
          },
          easing : 'easeOutQuad',
          update: (anim) =>{
            const currentTranslateX = parseInt(anim.animations[0].currentValue, 10);

            if(currentTranslateX === +550){
              charactereOfPlayer2.classList.add('sufferAttackB');
              player2LifeGreenDisplay.style.flex = `75%`;
              player2LifeRedDisplay.style.flex = `25%`;
            }
          },
          complete: () => {
            anime({
              targets: target,
              translateX: 0,
              duration: 500, 
              easing: 'linear',
              complete: () =>{
                charactereOfPlayer1.className = 'onTheSpotVenom';
                charactereOfPlayer2.className = 'onTheSpotBroly';
                const d = driver({
                  showButtons: ['next', 'previous', 'close'],
                  showProgress: true,
                  popoverClass: 'driverjs-theme',
                  steps : [{
                      element: '#arene-demo', 
                      popover: {
                      title: 'Terminé',
                      description: 'Vous avez terminé la démo, pour plus de combat, inscrivez-vous pour défier vos copains :)',
                      position: 'center'
                      },
                    }]
                })
                d.drive();
              }
            });
          },
      });
  }

  function shiftB(target,duration){
    return anime({
      targets:target,
      translateX:{
        value:'-=600px',
        duration
      },
      easing : 'easeOutQuad',
      update: (anim) =>{
        const currentTranslateX = parseInt(anim.animations[0].currentValue, 10);

        if(currentTranslateX === -550){
          charactereOfPlayer1.classList.add('sufferAttackV');
          anime({
            targets: charactereOfPlayer1,
            complete: () =>{
              anime({
                targets: charactereOfPlayer1,
              })
              anime({
                targets: target,
                translateX: 0, 
                duration: 500,
                easing: 'linear',
                complete: () =>{
                  charactereOfPlayer1.className = 'onTheSpotVenom';
                  charactereOfPlayer2.className = 'onTheSpotBroly';
                }
              });
            }
          })
          player1LifeGreenDisplay.style.flex = `75%`;
          player1LifeRedDisplay.style.flex = `25%`;
          const d = driver({
            showButtons: ['next', 'previous', 'close'],
            showProgress: true,
            popoverClass: 'driverjs-theme',
            steps : [{
                element: '#arene-demo', 
                popover: {
                title: 'Terminé',
                description: 'Vous avez terminé la démo, pour plus de combat, inscrivez-vous pour défier vos copains :)',
                position: 'center'
                },
              }]
          })
          d.drive();
        }
      },
    });
  }
};

export default DemoGame;
