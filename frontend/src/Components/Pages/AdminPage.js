
import { clearPage } from '../../utils/render';

const AdminPage = () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML = `
    <section id="mainContent">
        <div id="container-admin-page">
            <div id="container-form-add-remove-phrase">
            <h3> Gerer les phrases <h3>
            <br>
                <form method="POST" > 
                    <label for="add-phrase">La phrase a ajouter : </label>
                    <input type="text" id="add-phrase" name="add-phrase">
                    <br>
                    <input type="submit" value="Ajouter phrase" id="btnAddPhrase">
                </form>
                <br>
                <form method="POST">
                    <label for="remove-phrase">La phrase a supprimer : </label>
                    <input type="text" id="remove-phrase" name="remove-phrase">
                    <br>
                    <input type="submit" value="supprimer phrase" id="btnRemovePhrase">
                </form>
                <br>
                <div class="phrase_error"></div>
            </div>
        </div>
        // <div id="container-form-add-remove-arene">
        //     <form> 
                
        //     </form>
        // </div>
        <div>
    <section>`;

  const btnAddPhrase = document.querySelector('#btnAddPhrase');
  btnAddPhrase.addEventListener('click', addOnePhrase);

  const btnRemovePhrase = document.querySelector('#btnRemovePhrase');
  btnRemovePhrase.addEventListener('click', removeOnePhrase);

  async function addOnePhrase(e) {
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

    const response = await fetch('/api/game/addPhrase', option);

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const newPhrase = response.json();

    console.log(`new phrase add : ${newPhrase}`);

    phraseError.textContent = "Phrase ajoutée"
  }

  async function removeOnePhrase(e){
    e.preventDefault();

    let error = '';

    const phraseId = document.querySelector('#remove-phrase').value;

    const phraseError = document.querySelector('.phrase_error');

    if(phraseId < 1) {
        error = 'id invalide';
        phraseError.textContent = error;
        return;
    }

    const option = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
    }

    const response = await fetch(`/api/game/deletePhrase/${phraseId}`, option);

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const removedPhrase = await response.json();

    console.log(`phrase removed : ${removedPhrase}`);

    phraseError.textContent = "Phrase supprimée";
}

};

export default AdminPage;
