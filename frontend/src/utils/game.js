// eslint-disable-next-line import/prefer-default-export, consistent-return
const getPhraseRandom = async () => {
    try {
      const response = await fetch('/api/game');
  
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
      const phrases = await response.json();
  
      // console.table(phrases);
  
      const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];
  
      return phraseAleatoire.phrase;
    } catch (err) {
      console.error('GamePage::error: ', err);
    }
  };

  const createSessionForFighter1 = (fighter1) => {
    sessionStorage.setItem('fighter1', fighter1);
  }

  const createSessionForFighter2 = (fighter2) => {
    sessionStorage.setItem('fighter2', fighter2);
  }

  const createSessionForArena = (arena) => {
    sessionStorage.setItem('arena', arena);
  }

  const removeAllSession = () => {
    sessionStorage.removeItem('arena');
    sessionStorage.removeItem('fighter1');
    sessionStorage.removeItem('fighter2');
  }

  export {
    getPhraseRandom, 
    createSessionForArena,
    createSessionForFighter1,
    createSessionForFighter2,
    removeAllSession
  }
  