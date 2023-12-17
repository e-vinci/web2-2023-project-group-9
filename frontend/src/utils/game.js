
 
const getPhraseRandom = async () => {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/game`);
  
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
      const phrases = await response.json();
  
      // console.table(phrases);
  
      const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];
  
      return phraseAleatoire.phrase;
    } catch (err) {
      console.error('GamePage::error: ', err);
      return null;
    }
  };

  /**
 * `createSessionForFighter1` is a function that creates a session for the first fighter.
 * @param {string} fighter1 - The name of the first fighter.
 */
  const createSessionForFighter1 = (fighter1) => {
    sessionStorage.setItem('fighter1', fighter1);
  }

  /**
 * `createSessionForFighter2` is a function that creates a session for the second fighter.
 * @param {string} fighter2 - The name of the second fighter.
 */
  const createSessionForFighter2 = (fighter2) => {
    sessionStorage.setItem('fighter2', fighter2);
  }

  /**
 * `createSessionForArena` is a function that creates a session for the arena.
 * @param {string} arena - The name of the arena.
 */
  const createSessionForArena = (arena) => {
    sessionStorage.setItem('arena', arena);
  }

  /**
 * `removeAllSession` is a function that removes all previously created sessions.
 */
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
  