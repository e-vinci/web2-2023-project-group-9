import anime from 'animejs';
import { clearAllPage } from '../../utils/render';
// eslint-disable-next-line import/named
import { getPhraseRandom } from '../../utils/phrasesGame';
import Navigate from '../Router/Navigate';

import backgroundDemo from '../../img/Arena/arene6.gif';
import vsFight from '../../img/Arena/vsFight.png';

const GamePage = async () => {
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

  function loadingPage(){
  const loading = document.querySelector('#loading')
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
      setTimeout(() =>{
        avatarOfPlayer1.classList.add('transformVenom');
        avatarOfPlayer2.classList.add('transformBroly');
      },200);
    }
  }, 1000)};

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

  const player1LifeGreenDisplay = document.querySelector('.lifeBarLeftGreen');
  const player1LifeRedDisplay = document.querySelector('.lifeBarLeftRed');
  const player2LifeGreenDisplay = document.querySelector('.lifeBarRightGreen');
  const player2LifeRedDisplay = document.querySelector('.lifeBarRightRed');

  const timerDisplayLeft = document.querySelector('.timeLeft');
  const timerDisplayRight = document.querySelector('.timeRight');

  const gameTimerData = {
    timer: null,
    isRunning: false,
    countDown: 20000
  };

  const gamePreparationTimerData = {
    isPreparationTime: false,
    preparationCountDown: 5,
  };

  await switchText();
  startPreparationTimer();

  document.addEventListener('keydown', handleKeyboardInput);

  function handleKeyboardInput(e) {
    if (!gamePreparationTimerData.isPreparationTime) {
      const specialKeys = ["F1", "Enter", "Home", "CapsLock"];
      const {key} = e;
      
      if (specialKeys.includes(key)) {
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
          timerDisplayLeft.textContent = gameTimerData.countDown;
        } else {
          timerDisplayRight.textContent = gameTimerData.countDown;
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
    gameTimerData.countDown = 20000;

    if (players.currentPlayer === 1) {
      timerDisplayLeft.textContent = gameTimerData.countDown;
    } else {
      timerDisplayRight.textContent = gameTimerData.countDown;
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
      avatarOfPlayer2.setAttribute('id', 'player2_attack');
      setTimeout(() => {
        avatarOfPlayer1.setAttribute('id', 'player1_blesse');
      }, 1000);
      setTimeout(() => {
        avatarOfPlayer2.setAttribute('id', 'player2');
        avatarOfPlayer1.setAttribute('id', 'player1_seReleve');
        setTimeout(() => {
          avatarOfPlayer1.setAttribute('id', 'player1');
        }, 1000);
      }, 2000);
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
      avatarOfPlayer1.setAttribute('id', 'player1_attack');
      setTimeout(() => {
        avatarOfPlayer2.setAttribute('id', 'player2_blesse');
      }, 1000);
      setTimeout(() => {
        avatarOfPlayer1.setAttribute('id', 'player1');
        avatarOfPlayer2.setAttribute('id', 'player2_seReleve');
        setTimeout(() => {
          avatarOfPlayer2.setAttribute('id', 'player2');
        }, 1000);
      }, 2000);
      setTimeout(() => {
        players.player2Life -= 10;
        let player2LifeRed = 0
        player2LifeRed += 10;
        // console.log(player2LifeRed);
        player2LifeGreenDisplay.style.flex = `${player2LifeRed}%`;
        player2LifeRedDisplay.style.flex = `${players.player2Life}%`;
        phraseBlockBlock.style.visibility = 'visible';
      }, 1000);
    }
    if (players.player1Life <= 0) {
      avatarOfPlayer1.setAttribute('id', 'player1_mort');
      // console.log("Player 2 wins!");
    } else if (players.player2Life <= 0) {
      avatarOfPlayer2.setAttribute('id', 'player2_mort');
      // console.log("Player 1 wins!");
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
  
        gameTimerData.countDown -= 100; // Décompter de 100 millisecondes
  
        const seconds = Math.floor(gameTimerData.countDown / 1000); // Conversion en secondes
        const milliseconds = gameTimerData.countDown % 1000; // Partie des millisecondes restantes
  
        if (players.currentPlayer === 1) {
          timerDisplayLeft.textContent = `${seconds}:${String(milliseconds).padStart(3, '0')}`;
        } else {
          timerDisplayRight.textContent = `${seconds}:${String(milliseconds).padStart(3, '0')}`;
        }
      } else {
        handleTimerFinish();
      }
    }
  }
  
  
  

  function handleTimerFinish() {
    clearInterval(gameTimerData.timer);
    gameTimerData.isRunning = false;

    if (players.currentPlayer === 1) {
      timerDisplayLeft.textContent = 'Time is up';
    } else {
      timerDisplayRight.textContent = 'Time is up';
    }

    if (!players.isRoundOver) {
      textGameData.letterIndex = 0;
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
        clearInterval(preparationInterval);
        gamePreparationTimerData.isPreparationTime = false;
        startTimer();

        if (players.currentPlayer === 1) {
          timerDisplayLeft.textContent = gameTimerData.countDown;
        } else {
          timerDisplayRight.textContent = gameTimerData.countDown;
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
