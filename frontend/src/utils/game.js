// eslint-disable-next-line import/prefer-default-export, consistent-return
export const getPhraseRandom = async () => {
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

  export const createSessionForFighter1 = (fighter1) => {
    sessionStorage.setItem('fighter1', fighter1);
  }

  export const createSessionForFighter2 = (fighter2) => {
    sessionStorage.setItem('fighter2', fighter2);
  }
  