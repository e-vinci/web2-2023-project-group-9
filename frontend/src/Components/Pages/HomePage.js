/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import anime from 'animejs';
import Typewriter from 'typewriter-effect/dist/core';
/* eslint-disable camelcase */
import titrePage from '../../img/ImageAcceuil/titrePageAcceuil.png';
import decorBouton from '../../img/BaseDuSite/imgButton.png';
import imgBroly from '../../img/ImageAcceuil/imgBroly.jpg';
import imgVenom from '../../img/ImageAcceuil/imgVenom.jpg';
import imgChunLi from '../../img/ImageAcceuil/imgChunLi.jpg';
import imgCaptainA from '../../img/ImageAcceuil/imgCaptainA.jpg';

import imgArene1 from '../../img/ImageAcceuil/arene1.gif';
import imgArene2 from '../../img/ImageAcceuil/arene2.gif';
import imgArene3 from '../../img/ImageAcceuil/arene3.gif';
import imgArene4 from '../../img/ImageAcceuil/arene4.gif';

import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const imgSection1 = {imgBroly,imgVenom,imgChunLi,imgCaptainA};
const imgSection2 = {imgArene1,imgArene2,imgArene3,imgArene4};

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');

  // Créez un élément img
  const titre = document.createElement('img');
  titre.src = titrePage;
  titre.id = 'h1Acceuil';

  // Créez une élément pour notre slogan;
  const slogan = document.createElement('p');
  slogan.classList.add('slogan');

  // Création de l'animation avec typerwritter
  const typewriter = new Typewriter(slogan, {
    loop: false,
    delay: 55,
  });

  // Utilisez la méthode `typeString` pour configurer l'animation
  typewriter.typeString('<i>taper vite pour taper fort<i>').start();

  // Créez des éléments img pour les images des boutons
  const imgInscription = document.createElement('img');
  imgInscription.src = decorBouton;

  const imgDemo = document.createElement('img');
  imgDemo.src = decorBouton;

  main.innerHTML += `
  <section id = "mainContent">
  </section>
  <section id ="buttonSection">
    <div id="inscription">
      <p class="pboutton" id="link_to_registerPage">S'inscrire</p>
      ${imgInscription.outerHTML}
    </div>
    <div id="demo">
      <p class="pboutton">Demo</p>
      ${imgDemo.outerHTML}
    </div>
  </section>
  <section id = "mainMiddleContent">
    <section id="sectionTwoAcceuil">
    <img src="${imgSection1.imgBroly}" alt="" class="broly">
    <img src="${imgSection1.imgVenom}" alt="" class="venom">
    <img src="${imgSection1.imgChunLi}" alt="" class="chunLi">
    <img src="${imgSection1.imgCaptainA}" alt="" class="captainA">
    <div class="textSectionMain">
    <p class="titreSectionMain">Decouvrez </br> Des Combattants </br> Iconiques</p>
    <p class="phraseSectionMain">Un univers où la frappe rapide est l'arme ultime, 
    peuplé de personnages captivants et diversifiés. 
    Parmi une vaste galerie de combattants, 
    chacun affiche un style de frappe singulier, des compétences spéciales uniques et des histoires qui les distinguent.</p>
    </div>
    </section>
    <section id="spriteAcceuil">
      <div id="broly"></div>
      <div id="venom"></div>
      <div id="chunLi"></div>
      <div id="captainA"></div>
    </section>
    <section id="mainMiddleContent">
      <section id="sectionTwoAcceuil">
        <div class="textSectionMain2">
        <p class="titreSectionMain">Des arenes </br> A couper </br> Le souffle</p>
        <p class="phraseSectionMain">Une variété qui offre une expérience de combat unique à chaque affrontement. 
        Plongez-vous dans tout type de décor, il y en a pour tout le monde !</p>
        </div>
        <img src="${imgSection2.imgArene1}" alt="" class="arene1">
        <img src="${imgSection2.imgArene2}" alt="" class="arene2">
        <img src="${imgSection2.imgArene3}" alt="" class="arene3">
        <img src="${imgSection2.imgArene4}" alt="" class="arene4">
      </section>
    </section>
  </section>
`;

  const link_to_registerPage = document.querySelector('#link_to_registerPage');

  link_to_registerPage.addEventListener('click', (e) => {
    e.preventDefault();
    Navigate('/register');
  });

  const mainContent = document.querySelector('#mainContent');

  mainContent.appendChild(titre);
  mainContent.appendChild(slogan);

  const broly = document.querySelector('#broly');
  const venom = document.querySelector('#venom');
  const chunLi = document.querySelector('#chunLi');
  const captainA = document.querySelector('#captainA');
  createAnimation(broly, '-2006px 0px', 'steps(10)', 1500);
  createAnimation(venom, '-3940px 0px', 'steps(17)', 1500);
  createAnimation(chunLi, '-1302px 0px', 'steps(14)', 1500);
  createAnimation(captainA, '-441px 0px', 'steps(3)', 1500);
  const img = document.querySelectorAll('#sectionTwoAcceuil>img');
  const animation = document.querySelectorAll('#spriteAcceuil>div');

  function createAnimation(target, startPosition, easing, duration) {
    return anime({
      targets: target,
      backgroundPosition: startPosition,
      easing,
      duration,
      loop: true,
    });
  }

  img.forEach((image) => {
    let timeoutId; // Variable pour stocker l'ID du timer

    image.addEventListener('mouseover', () => {
      image.style.filter = 'brightness(50%)';
      timeoutId = setTimeout(() => {
        animationImg(image);
      }, 1000);
    });

    image.addEventListener('mouseout', () => {
      clearTimeout(timeoutId);
      image.style.filter = 'brightness(100%)';
      image.style.transition = '1s';
      hideAnimations();
    });
  });

  function animationImg(nomImg) {
    animation.forEach((animeElement) => {
      if (nomImg.className === animeElement.id) {
        animeElement.style.visibility = 'visible';
      }
    });
  }

  function hideAnimations() {
    animation.forEach((a) => {
      a.style.visibility = 'hidden';
    });
  }
};

export default HomePage;
