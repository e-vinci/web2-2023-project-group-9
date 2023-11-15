// eslint-disable-next-line no-unused-vars
import { clearPage, renderPageTitle } from '../../utils/render';
import Navigate from '../Router/Navigate';

const RegisterPage = () => {
  clearPage();

  const main = document.querySelector('main');
  main.innerHTML = renderRegisterPage();

  const paragrapheRegister = document.querySelector("#paragrapheLogin");
  paragrapheRegister.addEventListener("click", (e) => {
    e.preventDefault();
    Navigate('/login');
  });

  function renderRegisterPage() {
    const formRegisterPage = `<div id="containerLoginPage">
    <div id="containerForm">
        <form action="#" method="post">
            <label for="pseudo">Pseudo :</label>
            <input type="text" id="pseudo" name="pseudo" required>
            <br>
            <label for="mail">Email :</label>
            <input type="text" id="mail" name="mail" required>
            <br>
            <label for="motdepasse">Mot de passe :</label>
            <input type="password" id="motdepasse" name="motdepasse" required>
            <br>
            <p id="paragrapheLogin">Avez-vous un compte ? <a href="#"> Connectez-vous</a></p>
            <br>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkRGPD" />
                <label class="form-check-label" for="checkRGPD">en soumettant ce formulaire, j'accepte que Mortal Keyboard utilise mes données dans le strict cadre de nos services tout en respectant le <a href="https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679&from=FR">RGPD</a></label>
            </div>
            <br>
            <input type="submit" value="Inscription">
            <div id="error-message"></div>
        </form>
    </div>
</div>`;

    return formRegisterPage;
  };
};

export default RegisterPage;
