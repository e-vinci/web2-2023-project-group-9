import { clearPage } from '../../utils/render';

const HandlePhrase = async () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML += await renderHandlePhrase();
};

async function renderHandlePhrase() {
    
    const response = await fetch('/api/game/readSuggestedPhrases');
    
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const suggestedPhraseTable = await response.json(); // Ensure that the data is parsed as JSON

    console.table(suggestedPhraseTable);

    const tableLine = getAllSuggestedPhrase(suggestedPhraseTable);

    const html = `
        <section class="mainContent">
            <div id="container-suggested-phrases-table"> 
                <div id="suggested-phrases-table">
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>phrase suggeree</th>
                            </tr>
                        </thead>
                        <tbody>
                           ${tableLine}
                        </tbody>
                    </table>
                </div>    
            </div>
            <br>
            <br>
            <div id="container-add-suggested-phrase">
                <div id="container-form-add-suggested-phrase">
                    <h3> Gerer les phrases <h3>
                    <br>
                    <form method="POST" > 
                        <label for="add-phrase">La phrase a ajouter/supprimer : </label>
                        <input type="text" id="add-phrase" name="add-phrase">
                        <br>
                        <input type="submit" value="Ajouter phrase" id="btnAddPhrase">
                        <input type="submit" value="Supprimer phrase" id="btnRemovePhrase">
                    </form>
                    <br>
                    <div class="phrase_error"></div>
                </div>
             </div>
        </section>
    `;

    const btnAddPhrase = document.querySelector("#btnAddPhrase");
    btnAddPhrase.addEventListener('click', addOneSuggestedPhraseInPhrases);

    async function addOneSuggestedPhraseInPhrases(e) {
        let error = '';
        e.preventDefault();
    
        const phrase = document.querySelector('#add-phrase').value;
    
        const phraseError = document.querySelector('.phrase_error');
    
        if (phrase.length < 5) {
          error = 'Phrase trop courte';
          phraseError.textContent = error;
          return;
        }
    
        const option = {
          method: 'POST',
          body: JSON.stringify({
            phrase,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
    
        const response2 = await fetch('/api/game/addPhrase', option);
    
        if (!response2.ok) throw new Error(`fetch error : ${response2.status} : ${response2.statusText}`);
    
        const newPhrase = response.json();
    
        console.log(`new phrase add : ${newPhrase}`);
    
        phraseError.textContent = "Phrase ajoutée";
    }

    async function removeOneSuggestedPhraseInSuggestedPhrase(e) {
        let error = '';
        e.preventDefault();
    
        const phrase = document.querySelector('#add-phrase').value;
    
        const phraseError = document.querySelector('.phrase_error');
    
        if (phrase.length < 5) {
          error = 'Phrase trop courte';
          phraseError.textContent = error;
          return;
        }
    
        const option = {
          method: 'DELETE',
          body: JSON.stringify({
            // 
          }),
        };
    
        const response2 = await fetch('/api/game/addPhrase', option);
    
        if (!response2.ok) throw new Error(`fetch error : ${response2.status} : ${response2.statusText}`);
    
        const newPhrase = response.json();
    
        console.log(`new phrase add : ${newPhrase}`);
    
        phraseError.textContent = "Phrase ajoutée";
    }

    return html;
}

function getAllSuggestedPhrase(table) {
    let phraseTableLines = '';

    if (Array.isArray(table)) { // Check if table is an array
        table.forEach((phrase) => {
            console.log(phrase); // Log the phrase object
            phraseTableLines += `<tr>
                <td>${phrase.id}</td>
                <td>${phrase.suggestedPhrase}</td>
            </tr>`;
        });
    }

    return phraseTableLines;
}




export default HandlePhrase;
