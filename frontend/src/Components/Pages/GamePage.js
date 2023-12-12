/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import anime from 'animejs';
import { clearAllPage } from '../../utils/render';
// eslint-disable-next-line import/named
import { getPhraseRandom, removeAllSession } from '../../utils/game';
import Navigate from '../Router/Navigate';

import vsFight from '../../img/Arena/vsFight.png';
import arena1 from '../../img/Arena/arene1.gif';
import arena2 from '../../img/Arena/arene2.gif';
import arena3 from '../../img/Arena/arene3.gif';
import arena4 from '../../img/Arena/arene4.gif';
import arena5 from '../../img/Arena/arene5.gif';
import arena6 from '../../img/Arena/arene6.gif';
import arena7 from '../../img/Arena/arene7.gif';
import arena8 from '../../img/Arena/arene8.gif';
import arena9 from '../../img/Arena/arene9.gif';

const GamePage = async () => {
  clearAllPage();
  const main = document.querySelector('main');

  const fighter1 = sessionStorage.getItem('fighter1');
  const fighter2 = sessionStorage.getItem('fighter2');
  const arena = sessionStorage.getItem('arena');

  if(arena === 'arena1'){
    main.style.backgroundImage = `url(${arena1})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  } else if(arena === 'arena2'){
    main.style.backgroundImage = `url(${arena2})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }else if(arena === 'arena3'){
    main.style.backgroundImage = `url(${arena3})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }else if(arena === 'arena4'){
    main.style.backgroundImage = `url(${arena4})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }else if(arena === 'arena5'){
    main.style.backgroundImage = `url(${arena5})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }else if(arena === 'arena6'){
    main.style.backgroundImage = `url(${arena6})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }else if(arena === 'arena7'){
    main.style.backgroundImage = `url(${arena7})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }else if(arena === 'arena8'){
    main.style.backgroundImage = `url(${arena8})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }else if(arena === 'arena9'){
    main.style.backgroundImage = `url(${arena9})`;
    main.style.backgroundSize = 'cover';
    main.style.height = '100vh';
  }
  
  const arenaImages = {
    arena1,
    arena2,
    arena3,
    arena4,
    arena5,
    arena6,
    arena7,
    arena8,
    arena9,
  };

  main.style.backgroundImage = `url(${arenaImages[arena] || arena9})`;
  main.style.backgroundSize = 'cover';
  main.style.height = '100vh';

  main.innerHTML = `
  <div id="loading">
  <p>3</p>
  </div>
    <div id="menu">
      <div id="menuGame">
        <i class="fas fa-times" aria-hidden="true" style="font-size: 50px;"></i>
        <p class='titreMenu'>Menu</p>
        <p class='link'>
          <ul>
            <a href="" data-uri="/" id="restartLink"><li>Recommencer</li></a>
            <a href="" data-uri="/" id="continueGame"><li>Continuer Partie</li></a>
            <a href="" data-uri="/" id="accueilLink"><li>Quitter</li></a>
          </ul>
        </p>
      </div>
    </div>
    <div id="arene-demo">
      <section id="headGame">
        <div class="home"><i class="fas fa-home" style="font-size: 50px; color: white;"></i></div>
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
    <div id="phrase-game"><p id="phrase-attribue-game"></p></div>
  `;

  loadingPage();

  const avatarOfPlayer1 = document.querySelector('#charactere-player-1-demo');
  const avatarOfPlayer2 = document.querySelector('#charactere-player-2-demo');
  
  const menuOpen = document.querySelector('#menu');

  const times = document.querySelectorAll('.timeLeft, .timeRight');

  function loadingPage() {
    const loading = document.querySelector('#loading');
    loading.style.display = 'flex';
    const valueLoading = document.querySelector('#loading p');
    let currentValue = parseInt(valueLoading.innerHTML, 10);
    const intervalID = setInterval(() => {
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
          switchText();
          startPreparationTimer();
          if(fighter1 === 'broly'){
            avatarOfPlayer1.classList.add('transformBrolyL');
          }else if(fighter1 === 'venom'){
            avatarOfPlayer1.classList.add('transformVenom');
          }

          if(fighter2 === 'venom'){
            avatarOfPlayer2.classList.add('transformVenomR');
          }else if(fighter2 === 'broly'){
            avatarOfPlayer2.classList.add('transformBroly');
          }

        }, 200);
      }
    }, 1000);
  }

  transformation(avatarOfPlayer2, 1500);
  transformation(avatarOfPlayer1, 1500);

  function transformation(target, duration) {
    return anime({
      targets: target,
      loop: true,
      duration,
    });
  }

 const restarLink = document.querySelector('#restartLink')
  restarLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    menuOpen.style.top = '-100%';
    setTimeout(() =>{
      avatarOfPlayer1.classList.remove('transformVenom');
      avatarOfPlayer2.classList.remove('transformBroly');
      times.forEach((t) =>{
        // eslint-disable-next-line no-param-reassign
        t.innerHTML = '00:00'
      })
      loadingPage();
    },500);
  });

  document.querySelector('#accueilLink').addEventListener('click',(e)=>{
    e.preventDefault();
    removeAllSession();
    Navigate('/');
  })

  document.querySelector('#continueGame').addEventListener('click',(e) =>{
    e.preventDefault();
    menuOpen.style.top = '-100%';
  })

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

  const phraseBlock = document.querySelector('#phrase-attribue-game');
  const phraseBlockBlock = document.querySelector('#phrase-game');
  const player1LifeGreenDisplay = document.querySelector('.lifeBarLeftGreen');
  const player1LifeRedDisplay = document.querySelector('.lifeBarLeftRed');
  const player2LifeGreenDisplay = document.querySelector('.lifeBarRightGreen');
  const player2LifeRedDisplay = document.querySelector('.lifeBarRightRed');
  const timerDisplayLeft = document.querySelector('.timeLeft');
  const timerDisplayRight = document.querySelector('.timeRight');


  const textGameData = {
    letterIndex: 0,
    idText: 0,
    phrase: null,
    isFinishedTyping: false,
  };

  const players = {
    currentPlayer: 1,
    player1Life: 100,
    player2Life: 100,
    player1Time: 0,
    player2Time: 0,
    roundCount: 0,
    isRoundOver: false,
  };

  function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  
  const gameTimerData = {
    timer: null,
    isRunning: false,
    countDown: 1000
  };

  const gamePreparationTimerData = {
    isPreparationTime: false,
    preparationCountDown: 5,
  };

  document.addEventListener('keydown', handleKeyboardInput);

  function handleKeyboardInput(e) {
    if (!gamePreparationTimerData.isPreparationTime) {
      const {key} = e;
      
      if (key.length > 1) {
        return; // Ignore the special keys
      }
      
      const currentLetter = textGameData.phrase[textGameData.letterIndex];
      
      if (key === currentLetter) {
        handleCorrectKey();
      } else {
        handleIncorrectKey();
      }
    }
  }

  function handleCorrectKey() {
    const letterSpanTrue = phraseBlock.querySelector(
      `span:nth-child(${textGameData.letterIndex + 1})`,
    );
    letterSpanTrue.style.color = 'green';

    if (textGameData.letterIndex === textGameData.phrase.length - 1) {
      textGameData.letterIndex = 0;
      resetPhraseStyles();
      updatePlayersAndCheckGameOver();

      // eslint-disable-next-line no-plusplus
      players.roundCount++;

      if (players.roundCount === 2) {
        reduceLife();
        players.roundCount = 0;
        resetCounters();
      }

      gamePreparationTimerData.isPreparationTime = true;
      gamePreparationTimerData.preparationCountDown = 5;

      if (players.currentPlayer === 1) {
        timerDisplayLeft.textContent = gamePreparationTimerData.preparationCountDown;
      } else {
        timerDisplayRight.textContent = gamePreparationTimerData.preparationCountDown;
      }

      document.removeEventListener('keydown', handleKeyboardInput);

      startPreparationTimer();

      setTimeout(() => {
        gamePreparationTimerData.isPreparationTime = false;
        if (players.currentPlayer === 1) {
          timerDisplayLeft.textContent = formatTime(gameTimerData.countDown);
        } else {
          timerDisplayRight.textContent = formatTime(gameTimerData.countDown);
        }
        document.addEventListener('keydown', handleKeyboardInput);
      }, 5000);
    } else {
      // eslint-disable-next-line no-plusplus
      textGameData.letterIndex++;
    }
  }

  function handleIncorrectKey() {
    const letterSpanFalse = phraseBlock.querySelector(
      `span:nth-child(${textGameData.letterIndex + 1})`,
    );
    letterSpanFalse.style.color = 'red';
  }

  function resetPhraseStyles() {
    phraseBlock.querySelectorAll('span').forEach((span) => {
      // eslint-disable-next-line no-param-reassign
      span.style.color = 'black';
    });
  }

  async function updatePlayersAndCheckGameOver() {
    players.currentPlayer = players.currentPlayer === 1 ? 2 : 1;   
    gameTimerData.countDown = 1000;

    if (players.currentPlayer === 1) {
      timerDisplayLeft.textContent = formatTime(gameTimerData.countDown);
    } else {
      timerDisplayRight.textContent = formatTime(gameTimerData.countDown);
    }

    if (players.currentPlayer === 1) {
      phraseBlock.style.marginLeft = '0%';
    } else {
      phraseBlock.style.marginLeft = '70%';
    }

    await switchText();
  }

  function reduceLife() {
    if (players.player1Time > players.player2Time) {
      phraseBlockBlock.style.visibility = 'hidden';
      setTimeout(() => {
        players.player1Life -= 10;
        let player1LifeRed = 0
        player1LifeRed += 10;
        // console.log(player1LifeRed);
        player1LifeGreenDisplay.style.flex = `${players.player1Life}%`;
        player1LifeRedDisplay.style.flex = `${player1LifeRed}%`;
        phraseBlockBlock.style.visibility = 'visible';
      }, 1000);
    } else if (players.player1Time < players.player2Time) {
      phraseBlockBlock.style.visibility = 'hidden';
      setTimeout(() => {
        players.player2Life -= 10;
        let player2LifeRed = 0
        player2LifeRed += 10;
        // console.log(player2LifeRed);
        player2LifeRedDisplay.style.flex = `${player2LifeRed}%`;
        player2LifeGreenDisplay.style.flex = `${players.player2Life}%`;
        phraseBlockBlock.style.visibility = 'visible';
      }, 1000);
    }
    if (players.player1Life <= 0) {
      console.log("Player 2 wins!");
    } else if (players.player2Life <= 0) {
      console.log("Player 1 wins!");
    }
    gamePreparationTimerData.isPreparationTime = true;
    document.addEventListener('keydown', handleKeyboardInput);
  }

  function resetCounters() {
    players.player1Time = 0;
    players.player2Time = 0;
  }

  function updateTimer() {
    if (!gamePreparationTimerData.isPreparationTime) {
      if (gameTimerData.countDown > 0) {
        if (players.currentPlayer === 1) {
          players.player1Time += 100; // Ajouter 100 millisecondes
        } else {
          players.player2Time += 100; // Ajouter 100 millisecondes
        }
  
        gameTimerData.countDown += 100; // Décompter de 100 millisecondes
  
        if (players.currentPlayer === 1) {
          timerDisplayLeft.textContent = formatTime(gameTimerData.countDown);
        } else {
          timerDisplayRight.textContent = formatTime(gameTimerData.countDown);
        }
      } else {
        handleTimerFinish();
      }
    }
  }
  
  function handleTimerFinish() {
    // clearInterval(gameTimerData.timer);
    // gameTimerData.isRunning = false;

    if (!players.isRoundOver) {
      textGameData.letterIndex = 0;
      gameTimerData.countDown = 1000;
      players.isRoundOver = true;
      resetPhraseStyles();
      updatePlayersAndCheckGameOver();
    }
  }

  function startTimer() {
    if (!gameTimerData.isRunning) {
      gameTimerData.timer = setInterval(updateTimer, 100); // Mettre à jour toutes les 100 millisecondes
      gameTimerData.isRunning = true;
    }
  }

  function startPreparationTimer() {
    gamePreparationTimerData.isPreparationTime = true;
    gamePreparationTimerData.preparationCountDown = 5;

    if (players.currentPlayer === 1) {
      timerDisplayLeft.textContent = gamePreparationTimerData.preparationCountDown;
    } else {
      timerDisplayRight.textContent = gamePreparationTimerData.preparationCountDown;
    }

    const preparationInterval = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      gamePreparationTimerData.preparationCountDown--;

      if (players.currentPlayer === 1) {
        timerDisplayLeft.textContent = gamePreparationTimerData.preparationCountDown;
      } else {
        timerDisplayRight.textContent = gamePreparationTimerData.preparationCountDown;
      }

      if (gamePreparationTimerData.preparationCountDown <= 0) {
        gamePreparationTimerData.isPreparationTime = false;
        clearInterval(preparationInterval);
        startTimer();

        if (players.currentPlayer === 1) {
          timerDisplayLeft.textContent = formatTime(gameTimerData.countDown);
        } else {
          timerDisplayRight.textContent = formatTime(gameTimerData.countDown);
        }

        document.addEventListener('keydown', handleKeyboardInput);
      }
    }, 1000);
  }

  async function switchText() {
    textGameData.phrase = await getPhraseRandom();
    phraseBlock.innerHTML = textGameData.phrase
      .split('')
      .map((letter) => `<span>${letter}</span>`)
      .join('');
  }
  
};

export default GamePage;
