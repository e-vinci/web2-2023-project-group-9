
import { clearPage } from '../../utils/render';
import { getAuthenticatedUser } from '../../utils/auths';

const HandleSuggestedPhrasePage = () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML = `
  <section class="mainContent">
    <div id="container-add-suggested-phrase">
      <div id="container-form-add-suggested-phrase">
        <h3> Proposez des phrases <h3>
        <br>
        <form method="POST" > 
          <label for="add-phrase">La phrase a proposer : </label>
          <input type="text" id="add-phrase" name="add-phrase">
          <br>
          <input type="submit" value="Ajouter phrase" id="btnAddPhrase">
        </form>
        <br>
        <div class="phrase_error"></div>
      </div>
    </div>
  <section>`;

  const btnAddPhrase = document.querySelector('#btnAddPhrase');
  btnAddPhrase.addEventListener('click', addOnePhrase);

  async function addOnePhrase(e) {
    const infoUser = getAuthenticatedUser();
    const userToken = infoUser.token;
  
    console.log(userToken);

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
        'Authorization': `${userToken}`
      },
    };

    const response = await fetch('/api/game/addSuggestedPhrase', option);

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const newPhrase = response.json();

    console.log(`new phrase add : ${newPhrase}`);

    phraseError.textContent = "Phrase ajoutée";
  }

};

export default HandleSuggestedPhrasePage;
