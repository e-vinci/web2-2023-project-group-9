// eslint-disable-next-line no-unused-vars
import { clearPage } from '../../utils/render';
import { checkInformationsBeforeLogin } from '../../utils/validator';
import Navigate from '../Router/Navigate';
import { setAuthenticatedUser } from '../../utils/auths';

const LoginPage = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = renderLoginPage();

  // eslint-disable-next-line camelcase
  const link_to_registerPage = document.querySelector('#paragrapheLogin a');
  // eslint-disable-next-line camelcase
  link_to_registerPage.addEventListener('click', (e) => {
    e.preventDefault();
    Navigate('/register');
  });

  const btnConnection = document.querySelector('#btn_connection');

  btnConnection.addEventListener('click', onLogin);

  function renderLoginPage() {
    const formLoginPage = `
    <section class = "mainContent">
    <div id="containerLoginPage">
        <div id="containerForm">
            <form action="#" method="post">
                <label for="pseudo">Pseudo / Email :</label>
                <input type="text" id="pseudo" name="pseudo" required>
                <br>
                <label for="motdepasse">Mot de passe :</label>
                <input type="password" id="motdepasse" name="motdepasse" required>
                <br>
                <p id="paragrapheLogin">Si vous n'avez pas de compte,<a href="#"> Inscrivez-vous</a></p>
                <br>
                <input type="submit" value="Se connecter" id="btn_connection">
            </form>
            <br>
            <div class="phrase_error"></div> 
        </div> 
    </div>
    </section>
    `;

    return formLoginPage;
  }
};

/**
 * Handles the login process when the login form is submitted.
 *
 * @param {Event} e - The submit event triggering the form submission.
 *
 * @returns {void} This function does not have a direct return value.
 */
async function onLogin(e) {
  e.preventDefault();

  const user = document.querySelector('#pseudo').value;
  const password = document.querySelector('#motdepasse').value;

  const phraseError = document.querySelector('.phrase_error');

  const data = {
    username : user,
    password
  }

  const messageCheck = checkInformationsBeforeLogin(data);

  if(messageCheck){
    phraseError.textContent = messageCheck;
    return;
  }

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username: user,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch('/api/auths/login', options);
    if (!response.ok) {
      throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    }

    const newSession = await response.json();
    const authenticatedUser = setAuthenticatedUser(newSession);
    console.log('New user added : ', authenticatedUser);

    // Navigate to the home page on successful login.
    Navigate('/');
  } catch (error) {
    phraseError.textContent = "Pseudo, email ou le mot de passe est invalide";
    console.error('Login failed:', error.message);
  }
}

export default LoginPage;
