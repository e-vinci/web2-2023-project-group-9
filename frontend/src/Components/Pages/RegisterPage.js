// eslint-disable-next-line no-unused-vars
import { clearPage, renderPageTitle } from '../../utils/render';
import Navigate from '../Router/Navigate';
import { checkEmail, checkPassword, checkUserName } from '../../utils/validator';


/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const RegisterPage = () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML = renderRegisterPage();

  const paragrapheRegister = document.querySelector('#paragrapheLogin');
  paragrapheRegister.addEventListener('click', (e) => {
    e.preventDefault();
    Navigate('/login');
  });

  // eslint-disable-next-line camelcase
  const submit_register = document.querySelector('#submitRegister');
  // eslint-disable-next-line camelcase
  submit_register.addEventListener('click', addOneUser);

  function renderRegisterPage() {
    const formRegisterPage = `
    <section class = "mainContent">
    <div id="containerLoginPage">
    <div id="containerForm">
        <form method="post">
            <label for="pseudo">Pseudo :</label>
            <input type="text" id="pseudo" name="pseudo" required>
            <br>
            <label for="mail">Email :</label>
            <input type="text" id="mail" name="mail" required>
            <br>
            <label for="motdepasse">Mot de passe :</label>
            <input type="password" id="motdepasse" name="motdepasse" required>
            <br>
            <label for="motdepasse">retapez mot de passe :</label>
            <input type="password" id="motdepasse2" name="motdepasse" required>
            <br>
            <p id="paragrapheLogin">Avez-vous un compte ? <a href="#"> Connectez-vous</a></p>
            <br>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkRGPD" />
                <label class="form-check-label" for="checkRGPD">en soumettant ce formulaire, j'accepte que Mortal Keyboard utilise mes donnees dans le strict cadre de nos services tout en respectant le <a href="https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679&from=FR">RGPD</a></label>
            </div>
            <br>
            <input type="submit" value="Inscription" id="submitRegister">
        </form><br>
        <div class="phrase_error"></div>
        </div>
    </div>
    </section>
    `;

    return formRegisterPage;
  };

  const password = document.querySelector('#motdepasse');

  password.addEventListener('focus',  () => {
    const driverObj = driver({
      popoverClass: "driverjs-theme",
      stagePadding: 0,
      onDestroyed: () => {
        document?.activeElement?.blur();
      }
    });
    driverObj.highlight({
      element: password,
      popover : {
        title: "Condition pour valider votre mot de passe :",
        description: "- Il faut que votre mot de passe aie une taille de 8 caractères minimum.<br>- Il faut au minimum 1 majuscule dans votre mot de passe.<br>- Il faut au minimum 2 minuscules dans votre mot de passe.<br>- Il faut au minimum 2 nombres dans votre mot de passe.<br>- Il faut au minimum un caractére spécial.",
        side: 'right'
      }
    });        
  })
};

/**
 * Asynchronously adds a new user by sending a POST request to the server.
 *
 * @param {Event} e - The submit event triggering the form submission.
 * 
 * @returns {Promise<void>} A Promise that resolves after the user is added successfully.
 */
async function addOneUser(e) {
  e.preventDefault();

  const username = document.querySelector('#pseudo').value;
  const email = document.querySelector('#mail').value;
  const password = document.querySelector('#motdepasse').value;
  const password2 = document.querySelector('#motdepasse2').value;
  const term = document.querySelector('#checkRGPD').checked;

  const phraseError = document.querySelector('.phrase_error');

  const emailError = checkEmail(email);
  const usernameError = checkUserName(username);
  const passwordError = checkPassword(password);

  if (usernameError) {
    phraseError.textContent = usernameError;
    return;
  }

  if (emailError) {
    phraseError.textContent = emailError;
    return;
  }

  if(password !== password2){
    phraseError.textContent = 'Les mots de passe sont differents';
    return;
  }

  if (passwordError) {
    phraseError.textContent = passwordError;
    return;
  }

  if (!term) {
    phraseError.textContent = 'Acceptez les termes !';
    return;
  }

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const response = await fetch(`${process.env.API_BASE_URL}/auths/register`, options); // fetch return a promise => we wait for the response

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const newUser = await response.json(); // json() returns a promise => we wait for the data

  // eslint-disable-next-line no-console
  console.log('New user added : ', newUser);

  Navigate('/login');
}

export default RegisterPage;
