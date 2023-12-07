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
                                <th>Ajouter/Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                           ${tableLine}
                        </tbody>
                    </table>
                </div>    
            </div>
        </section>
    `;

  async function addOneSuggestedPhraseInPhrases(e) {
    e.preventDefault();

    const rowToRemove = e.target.closest('tr');
    const infophrase = await getPhraseById();
    const suggestedPhrase = infophrase.phrase;

    console.log(`la phrase ajoité est ${suggestedPhrase}`);

    const option = {
      method: 'POST',
      body: JSON.stringify({
        phrase: suggestedPhrase,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Move addedPhrase inside the fetch block
    try {
      const response3 = await fetch('/api/game/addPhrase', option);

      if (!response3.ok)
        throw new Error(`fetch error : ${response3.status} : ${response3.statusText}`);

      const newPhrase = await response3.json();

      console.log(`new phrase add : ${newPhrase}`);

      const idOfPhrase = infophrase.phraseId;

      console.log(`l'id de la phrase ajouté est ${idOfPhrase}`);

      removeAddedSuggestedPhrase(idOfPhrase);
      
      rowToRemove.remove();

    } catch (error) {
      console.error('Error adding phrase:', error);
    }
  }

  async function removeOneSuggestedPhraseInSuggestedPhrase(e) {
    e.preventDefault();

    const infophrase = await getPhraseById();
    const rowToRemove = e.target.closest('tr');

    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response2 = await fetch(
        `/api/game/deleteSuggestedPhrase/${infophrase.phraseId}`,
        option,
      );

      if (!response2.ok)
        throw new Error(`fetch error : ${response2.status} : ${response2.statusText}`);

      const removedPhrase = await response2.json();

      console.log(`phrase removed : ${removedPhrase}`);

      // Remove the row from the table in the DOM
      rowToRemove.remove();
    } catch (error) {
      console.error('Error removing phrase:', error);
    }
  }

  setTimeout(() => {
    const btnAddPhrase = document.querySelectorAll('.btnAddPhrase');
    btnAddPhrase.forEach((btn) => {
      btn.addEventListener('click', addOneSuggestedPhraseInPhrases);
    });

    const btnRemovePhrase = document.querySelectorAll('.btnRemovePhrase');
    btnRemovePhrase.forEach((btn) => {
      btn.addEventListener('click', removeOneSuggestedPhraseInSuggestedPhrase);
    });
  }, 0);

  async function getPhraseById() {
    const phraseId = document.querySelector('#idPhrase').value;

    const response4 = await fetch(`/api/game/readOneSuggestedPhrase/${phraseId}`);

    if (!response4.ok)
      throw new Error(`fetch error : ${response4.status} : ${response4.statusText}`);

    const informationAboutPhrase = await response4.json();

    console.table(informationAboutPhrase);

    const phrase = informationAboutPhrase.suggestedPhrase;

    console.log(phrase);

    return { phrase, phraseId };
  }

  async function removeAddedSuggestedPhrase(id) {
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response5 = await fetch(`/api/game/deleteSuggestedPhrase/${id}`, option);

    if (!response5.ok)
      throw new Error(`fetch error : ${response5.status} : ${response5.statusText}`);

    const removedPhrase = await response5.json();

    console.log(`phrase removed : ${removedPhrase}`);
  }

  return html;
}

function getAllSuggestedPhrase(table) {
  let phraseTableLines = '';

  if (Array.isArray(table)) {
    // Check if table is an array
    table.forEach((phrase) => {
      console.log(phrase); // Log the phrase object
      phraseTableLines += `<tr>
                <td>${phrase.id}<input type="hidden" value="${phrase.id}" id="idPhrase"></td>
                <td>${phrase.suggestedPhrase}</td>
                <td><input type="submit" value="Ajouter" class="btnAddPhrase"> <input type="submit" value="supprimer" class="btnRemovePhrase"></td>
            </tr>`;
    });
  }

  return phraseTableLines;
}

export default HandlePhrase;
