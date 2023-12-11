import { clearPage } from '../../utils/render';
import { getAuthenticatedUser } from '../../utils/auths';

const HandlePhrase = async () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML += await renderHandlePhrase();
};

async function renderHandlePhrase() {
  const response = await fetch('/api/game/readSuggestedPhrases');

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const suggestedPhraseTable = await response.json();

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
    
      const infoUser = getAuthenticatedUser();
      const userToken = infoUser.token;
    
      console.log(userToken);
    
      const rowToRemove = e.target.closest('tr');
      const {phraseId} = e.target.dataset; // Récupère l'ID de la phrase depuis le bouton
    
      const infophrase = await getPhraseById(phraseId);
      const suggestedPhrase = infophrase.phrase;
    
      console.log(`la phrase ajouté est ${suggestedPhrase}`);
    
      const option = {
        method: 'POST',
        body: JSON.stringify({
          phrase: suggestedPhrase,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${userToken}`
        },
        credentials: 'include',
      };
    
      try {
        const response3 = await fetch('/api/game/addPhrase', option);
    
        if (!response3.ok)
          throw new Error(`fetch error : ${response3.status} : ${response3.statusText}`);
    
        const newPhrase = await response3.json();
    
        console.log(`new phrase add : ${newPhrase}`);
    
        removeAddedSuggestedPhrase(phraseId);
    
        rowToRemove.remove();
      } catch (error) {
        console.error('Error adding phrase:', error);
      }
    }

async function removeOneSuggestedPhraseInSuggestedPhrase(e) {
  e.preventDefault();

  const infoUser = getAuthenticatedUser();
  const userToken = infoUser.token;

  console.log(userToken);

  const {phraseId} = e.target.dataset; // Récupère l'ID de la phrase depuis le bouton
  const rowToRemove = e.target.closest('tr');

  const option = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${userToken}`
    },
    credentials: 'include',
  };

  try {
    const response2 = await fetch(
      `/api/game/deleteSuggestedPhrase/${phraseId}`,
      option,
    );

    if (!response2.ok)
      throw new Error(`fetch error : ${response2.status} : ${response2.statusText}`);

    const removedPhrase = await response2.json();

    console.log(`phrase removed : ${removedPhrase}`);

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

  async function getPhraseById(id) {
    const response4 = await fetch(`/api/game/readOneSuggestedPhrase/${id}`);

    if (!response4.ok)
      throw new Error(`fetch error : ${response4.status} : ${response4.statusText}`);

    const informationAboutPhrase = await response4.json();

    console.table(informationAboutPhrase);

    const phrase = informationAboutPhrase.suggestedPhrase;

    console.log(`getPhraseById ${phrase.phraseId}`);

    return { phrase, phraseId: id };
  }

  async function removeAddedSuggestedPhrase(id) {
    const infoUser = getAuthenticatedUser();
    const userToken = infoUser.token;

    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
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
      console.log(`l'id de la phrase ${phrase.id}`);
      phraseTableLines += `<tr>
                <td>${phrase.id}</td>
                <td>${phrase.suggestedPhrase}</td>
                <td>
                  <input type="submit" value="Ajouter" class="btnAddPhrase" data-phrase-id="${phrase.id}">
                  <input type="submit" value="Supprimer" class="btnRemovePhrase" data-phrase-id="${phrase.id}">
                </td>
            </tr>`;
    });
  }

  return phraseTableLines;
}

export default HandlePhrase;
