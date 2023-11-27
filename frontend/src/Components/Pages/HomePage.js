/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import anime from 'animejs';
import Typewriter from 'typewriter-effect/dist/core';
/* eslint-disable camelcase */
import titrePage from '../../img/ImageAcceuil/titrePageAcceuil.png';
import decorBouton from '../../img/BaseDuSite/imgButton.png';
import imgBroly from '../../img/ImageAcceuil/broly.jpg';
import imgVenom from '../../img/ImageAcceuil/venom.jpg';
import imgChunLi from '../../img/ImageAcceuil/chunLi.jpg';
import imgCaptainA from '../../img/ImageAcceuil/captainA.jpg';

import imgArene1 from '../../img/ImageAcceuil/arene1.gif';
import imgArene2 from '../../img/ImageAcceuil/arene2.gif';
import imgArene3 from '../../img/ImageAcceuil/arene3.gif';
import imgArene4 from '../../img/ImageAcceuil/arene4.gif';
import imgArene5 from '../../img/ImageAcceuil/arene5.gif';
import imgArene6 from '../../img/ImageAcceuil/arene6.gif';
import imgArene7 from '../../img/ImageAcceuil/arene7.gif';
import imgArene8 from '../../img/ImageAcceuil/arene8.gif';
import imgArene9 from '../../img/ImageAcceuil/arene9.gif';


import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const imgSection1 = { imgBroly, imgVenom, imgChunLi, imgCaptainA };
const imgSection2 = { imgArene1, imgArene2, imgArene3, imgArene4, imgArene5, imgArene6, imgArene7, imgArene8, imgArene9};

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
  <section id = "titleOfMain"></section>
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
  </section>
  <section id = "mainMiddleContent">
    <section id="sectionTwoAcceuil">
      <img src="${imgSection1.imgBroly}" alt="" class="broly">
      <img src="${imgSection1.imgVenom}" alt="" class="venom">
      <img src="${imgSection1.imgCaptainA}" alt="" class="captainA">
      <img src="${imgSection1.imgChunLi}" alt="" class="chunLi">
      <div class="textSectionMain">
      <p class="titreSectionMain">Decouvrez </br> Des Combattants </br> Iconiques</p>
      <p class="phraseSectionMain">Un univers où la frappe rapide est l'arme ultime, 
      peuplé de personnages captivants et diversifiés. 
      Parmi une vaste galerie de combattants, 
      chacun affiche un style de frappe singulier, des compétences spéciales uniques et des histoires qui les distinguent.</p>
      <section id="spriteAccueil"><div id="broly"></div></section>
      <section id="spriteAccueil"><div id="venom"></div></section>
      <section id="spriteAccueil"><div id="captainA"></div></section>
      <section id="spriteAccueil"><div id="chunLi"></div></section>
      </div>
    </section>
    <section id="sectionTreeAcceuil">
    <div class="textSectionMain2">
    <p class="titreSectionMain">Des arenes </br> A couper </br> Le soufFle</p>
    <p class="phraseSectionMain">Une variété qui offre une expérience de combat unique à chaque affrontement. 
    Plongez-vous dans tout type de décor, il y en a pour tout le monde !</p>
    </div>
    <div id="areneAccueil">
    <img src="${imgSection2.imgArene1}" alt="" class="arene">
    <img src="${imgSection2.imgArene2}" alt="" class="arene">
    <img src="${imgSection2.imgArene3}" alt="" class="arene">
    <img src="${imgSection2.imgArene4}" alt="" class="arene">
    <img src="${imgSection2.imgArene5}" alt="" class="arene">
    <img src="${imgSection2.imgArene6}" alt="" class="arene">
    <img src="${imgSection2.imgArene7}" alt="" class="arene">
    <img src="${imgSection2.imgArene8}" alt="" class="arene">
    <img src="${imgSection2.imgArene9}" alt="" class="arene">
    </div>
    </section>
    <section id="sectionTreeAcceuil">
    </section>
  </section>
`;

  const link_to_registerPage = document.querySelector('#link_to_registerPage');

  link_to_registerPage.addEventListener('click', (e) => {
    e.preventDefault();
    Navigate('/register');
  });

  const titleOfMain = document.querySelector('#titleOfMain');

  titleOfMain.appendChild(titre);
  titleOfMain.appendChild(slogan);

  const broly = document.querySelector('#broly');
  const venom = document.querySelector('#venom');
  const chunLi = document.querySelector('#chunLi');
  const captainA = document.querySelector('#captainA');
  createAnimation(broly, '-2006px 0px', 'steps(10)', 1500);
  createAnimation(venom, '-3940px 0px', 'steps(17)', 1500);
  createAnimation(chunLi, '-1302px 0px', 'steps(14)', 1500);
  createAnimation(captainA, '-441px 0px', 'steps(3)', 1500);
  const img = document.querySelectorAll('#sectionTwoAcceuil>img');
  const animation = document.querySelectorAll('#spriteAccueil>div');
  const spriteAccueil = document.querySelectorAll('#spriteAccueil');
  const sectionTwoAcceuil = document.querySelector('#sectionTwoAcceuil');
  const areneAcceuil = document.querySelectorAll('#areneAccueil .arene');

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
      document.querySelector('.phraseSectionMain').style.display = 'none'
      sectionTwoAcceuil.style.maxWidth = '70%'
      spriteAccueil.forEach((div) =>{
        div.style.display = 'block'
      })
      timeoutId = setTimeout(() => {
        animationImg(image);
      }, 1000);
    });

    image.addEventListener('mouseout', () => {
      clearTimeout(timeoutId);
      image.style.filter = 'brightness(100%)';
      image.style.transition = '1s';
      sectionTwoAcceuil.style.maxWidth = '85%'
      hideAnimations();
      spriteAccueil.forEach((div) =>{
        div.style.display = 'none'
      })
      document.querySelector('.phraseSectionMain').style.display = 'block';
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

  areneAcceuil.forEach((i) => {
    i.addEventListener('mouseover', () => {
      anime({
        targets: i,
        scale: 1.2,
        opacity: 2, // Assurez-vous que l'opacité de l'image survolée est complètement visible
        easing: 'easeInOutQuad',
      });
  
      // Anime les autres images pour les flouter
      areneAcceuil.forEach((otherImage) => {
        if (otherImage !== i) {
          anime({
            targets: otherImage,
            scale: 1,
            opacity: 0.5,
            filter: 'blur(5px)', 
            easing: 'easeInQuad',
          });
        }
      });
    });
  
    i.addEventListener('mouseout', () => {
      anime({
        targets: i,
        scale: 1,
        opacity: 1,
        easing: 'easeInQuad',
      });
  
      areneAcceuil.forEach((otherImage) => {
        if (otherImage !== i) {
          anime({
            targets: otherImage,
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            easing: 'easeInOutQuad',
          });
        }
      });
    });
  });
};

export default HomePage;
