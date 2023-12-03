import { clearAllPage } from '../../utils/render';
// eslint-disable-next-line import/named
import { getPhraseRandom } from '../../utils/phrasesGame';

const GamePage = async () => {
  clearAllPage();

  document.body.classList.add('areneGame');

  const main = document.querySelector('main');
  main.innerHTML = `
    <div id="container">
      <div id="player1_life"></div>
      <div id="player1"></div>
  
      <div id="player2_life"></div>
      <div id="player2"></div>
  
      <div id="timer"></div>
      <div id="phrase_block"></div>
    </div>`;

  const phraseBlock = document.querySelector('#phrase_block');

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

  const avatarOfPlayer1 = document.querySelector('#player1');
  const avatarOfPlayer2 = document.querySelector('#player2');
  const player1LifeDisplay = document.querySelector('#player1_life');
  const player2LifeDisplay = document.querySelector('#player2_life');
  player1LifeDisplay.innerText = players.player1Life;
  player2LifeDisplay.innerText = players.player2Life;

  const timerDisplay = document.querySelector('#timer');

  const gameTimerData = {
    timer: null,
    isRunning: false,
    countDown: 20,
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
      const { key } = e;
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
      timerDisplay.textContent = gamePreparationTimerData.preparationCountDown;

      // Empêcher la saisie du joueur suivant pendant la préparation
      document.removeEventListener('keydown', handleKeyboardInput);

      startPreparationTimer();

      setTimeout(() => {
        gamePreparationTimerData.isPreparationTime = false;
        timerDisplay.textContent = gameTimerData.countDown;
        document.addEventListener('keydown', handleKeyboardInput);
      }, 5000); // Délai de 5 secondes
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
    gameTimerData.countDown = 20;
    timerDisplay.textContent = gameTimerData.countDown;
    await switchText();
  }

  function reduceLife() {
    if (players.player1Time > players.player2Time) {
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
        player1LifeDisplay.innerText = players.player1Life;
        player1LifeDisplay.style.width = `${players.player1Life}px`;
      }, 1000);
    } else if (players.player1Time < players.player2Time) {
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
        player2LifeDisplay.innerText = players.player2Life;
        player2LifeDisplay.style.width = `${players.player2Life}px`;
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
          // eslint-disable-next-line no-plusplus
          players.player1Time++;
        }
        if (players.currentPlayer === 2) {
          // eslint-disable-next-line no-plusplus
          players.player2Time++;
        }
        // eslint-disable-next-line no-plusplus
        gameTimerData.countDown--;
        timerDisplay.textContent = gameTimerData.countDown;
      } else {
        handleTimerFinish();
      }
    }
  }

  function handleTimerFinish() {
    clearInterval(gameTimerData.timer);
    gameTimerData.isRunning = false;
    timerDisplay.textContent = "Time's up";

    if (!players.isRoundOver) {
      textGameData.letterIndex = 0;
      players.isRoundOver = true;
      resetPhraseStyles();
      updatePlayersAndCheckGameOver();
    }
  }

  function startTimer() {
    if (!gameTimerData.isRunning) {
      gameTimerData.timer = setInterval(updateTimer, 1000);
      gameTimerData.isRunning = true;
    }
  }

  // Fonction pour démarrer le compte à rebours de préparation
  function startPreparationTimer() {
    gamePreparationTimerData.isPreparationTime = true;
    gamePreparationTimerData.preparationCountDown = 5;
    timerDisplay.textContent = gamePreparationTimerData.preparationCountDown;

    const preparationInterval = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      gamePreparationTimerData.preparationCountDown--;
      timerDisplay.textContent = gamePreparationTimerData.preparationCountDown;

      if (gamePreparationTimerData.preparationCountDown <= 0) {
        clearInterval(preparationInterval);
        gamePreparationTimerData.isPreparationTime = false;
        startTimer(); // Commencez le timer du jeu après la préparation
        timerDisplay.textContent = gameTimerData.countDown;
        document.addEventListener('keydown', handleKeyboardInput);
      }
    }, 1000);
  }

  async function switchText() {
    textGameData.phrase = await getPhraseRandom();

    // console.log(textGameData.phrase);
    phraseBlock.innerHTML = textGameData.phrase
      .split('')
      .map((letter) => `<span>${letter}</span>`)
      .join('');
  }
};

export default GamePage;
