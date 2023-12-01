    // eslint-disable-next-line import/prefer-default-export, consistent-return
    export const getPhraseRandom = async () => {
        try {
        //     const response = await fetch('/api/game');

        //     if (!response.ok) {
        //         throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        //     }

        //     const result = await response.json();

        //     // console.log('JSON result:', result); // Ajoutez cette ligne pour déboguer

        //     const phrasesArray = result.phrases;

        //     if (!phrasesArray || phrasesArray.length === 0) {
        //         throw new Error('Empty or missing "phrases" array in JSON.');
        //     }

        //     const phraseAleatoire = phrasesArray[Math.floor(Math.random() * phrasesArray.length)];

        //     // console.log('Random phrase:', phraseAleatoire); // Ajoutez cette ligne pour déboguer

        //     return phraseAleatoire;
        // } catch (error) {
        //     console.error('Error in getPhraseRandom:', error);
        //     // eslint-disable-next-line no-undef
        //     return 'Erreur : Impossible de récupérer la phrase.';

        const response = await fetch('/api/game');

        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const phrases = await response.json();

        console.table(phrases);

        const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];

        return phraseAleatoire;

        }catch(err){
            console.error('GamePage::error: ', err);
        }

    };

