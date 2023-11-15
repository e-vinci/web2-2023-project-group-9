// eslint-disable-next-line no-unused-vars
import { clearPage, renderPageTitle } from '../../utils/render';
import Navigate from '../Router/Navigate';

const LoginPage = () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML = renderLoginPage();

  // eslint-disable-next-line camelcase
  const link_to_registerPage = document.querySelector("#paragrapheLogin a");
  // eslint-disable-next-line camelcase
  link_to_registerPage.addEventListener("click", (e) => {
    e.preventDefault();
    Navigate('/register');
  });

  function renderLoginPage() {
    const formLoginPage = `
    <div id="containerLoginPage">
        <div id="containerForm">
            <form action="#" method="post">
                <label for="pseudo">Pseudo / Email :</label>
                <input type="text" id="pseudo" name="pseudo" required>
                <br>
                <label for="motdepasse">Mot de passe :</label>
                <input type="password" id="motdepasse" name="motdepasse" required>
                <br>
                <p id="paragrapheLogin">Si vous n'avez pas de compte ? <a href="#"> Inscrivez-vous</a></p>
                <br>
                <input type="submit" value="Se connecter">
            </form> 
        </div> 
    </div>`;

    return formLoginPage;
  };

};

export default LoginPage;
