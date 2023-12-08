import { clearPage } from '../../utils/render';

const HandlePhraseFromGamePage = async () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML += await renderHandlePhraseFromGame();
};

async function renderHandlePhraseFromGame() {

  const response = await fetch('/api/game');

  if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const tableOfPhraseFromGame = await response.json();

  const tableLine = getAllSuggestedPhrase(tableOfPhraseFromGame);

  const html = `
    <section class="mainContent">
        <div id="container-phrases-table"> 
            <div id="phrases-table">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>phrase suggeree</th>
                            <th>Supprimer</th>
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
setTimeout(() => {
    const btnRemovePhrase = document.querySelectorAll('.btnRemovePhrase');
    btnRemovePhrase.forEach((btn) => {
    btn.addEventListener('click', removeOneSuggestedPhraseInSuggestedPhrase);
    })
},0)

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
        `/api/game/deletePhrase/${infophrase.phraseId}`,
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

  async function getPhraseById() {
    const phraseId = document.querySelector('#idPhrase').value;

    const response4 = await fetch(`/api/game/readOnePhraseFromGame/${phraseId}`);

    if (!response4.ok)
      throw new Error(`fetch error : ${response4.status} : ${response4.statusText}`);

    const informationAboutPhrase = await response4.json();

    console.table(informationAboutPhrase);

    const phraseToken = informationAboutPhrase.phrase;

    console.log(phraseId);

    return { phraseId, phraseToken };
  }

  return html;

  function getAllSuggestedPhrase(table) {
    let phraseTableLines = '';

    if (Array.isArray(table)) {
      // Check if table is an array
      table.forEach((phrase) => {
        console.log(phrase); // Log the phrase object
        phraseTableLines += `<tr>
                      <td>${phrase.id}<input type="hidden" value="${phrase.id}" id="idPhrase"></td>
                      <td>${phrase.phrase}</td>
                      <td><input type="submit" value="supprimer" class="btnRemovePhrase"></td>
                  </tr>`;
      });
    }

    return phraseTableLines;
  }
}

export default HandlePhraseFromGamePage;
