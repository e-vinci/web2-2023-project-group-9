import anime from 'animejs';
import arena from '../../img/Arena/areneDBZ.png';
import brolyPortrait from '../../img/PortraitFighters/Broly.png';
import venomPortrait from '../../img/PortraitFighters/Venom.png';
import chunLiPortrait from '../../img/PortraitFighters/Chun li.png';
import spiderManPortrait from '../../img/PortraitFighters/Spider man.png';
import captainAmerica from '../../img/PortraitFighters/Captain america.png';
import gokuPortrait from '../../img/PortraitFighters/Goku.png';
import gohanPortrait from '../../img/PortraitFighters/Gohan.png';
import { clearPage } from '../../utils/render';



const FightersPage = () => {
  clearPage();
  const main = document.querySelector('main');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  main.innerHTML += 
    `<section class="main-container">
    <button style="background-image: url('${brolyPortrait}')" class="brolyDBZ"></button>
    <button style="background-image: url('${venomPortrait}')" class="venomSP"></button>
    <button style="background-image: url('${spiderManPortrait}')" class="spiderMan"></button>
    <button style="background-image: url('${chunLiPortrait}')" class="chunLiTK"></button>
    <button style="background-image: url('${captainAmerica}')" class="captainAmerica"></button>
    <button style="background-image: url('${gokuPortrait}')" class="goku"></button>
    <button style="background-image: url('${gohanPortrait}')" class="gohan"></button>
  </section>

    
    <section id="sprite">
      <div id="brolyDBZ"></div>
      <div id="venomSP"></div>
      <div id="chunLiTK"></div>
      <div id="captainAmerica"></div>
      <div id="goku"></div>
      <div id="gohan"></div>
      <div id="spiderMan"></div>
    
    </section>
    <section id="arena">
    <img src="${arena}" alt="" class="arena">
    </section>   `;

  main.appendChild(mainContainer);

  const broly = document.querySelector('#brolyDBZ');
  const venom = document.querySelector('#venomSP');
  const chunLi = document.querySelector('#chunLiTK');
  const captainA = document.querySelector('#captainAmerica');

  createAnimation(broly, '-2006px 0px', 'steps(10)', 1500);
  createAnimation(venom, '-3940px 0px', 'steps(17)', 1500);
  createAnimation(chunLi, '-1302px 0px', 'steps(14)', 1500);
  createAnimation(captainA, '-441px 0px', 'steps(3)', 1500);

  const img = document.querySelectorAll('.main-container>button');
  const animation = document.querySelectorAll('#sprite>div');

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
    image.addEventListener('click', () => {
      console.log(
        'ici'
      )
     animationImg(image);
    });
  });

  function animationImg(nomImg) {
    // eslint-disable-next-line no-shadow
    animation.forEach((anime) => {
      if (nomImg.className === anime.id) {
        console.log(
          'là bas'
        )
        // eslint-disable-next-line no-param-reassign
        anime.style.display = 'block';
        // eslint-disable-next-line no-param-reassign
        anime.style.backgroundPosition = '50px' ;
      }
    });
    img.forEach((image) => {
      image.addEventListener('click', () => {
       animationImgHidden(image);
      });
    });
  }

  

  function animationImgHidden(nomImg) {
    // eslint-disable-next-line no-shadow
    animation.forEach((anime) => {
      if (nomImg.className === anime.id) {
        // eslint-disable-next-line no-param-reassign
        anime.style.display = 'none';
      }
    });
    img.forEach((image) => {
      image.addEventListener('click', () => {
       animationImg(image);
      });
    });
  } 


 /* const venom = document.querySelector('#venom');
  const chunLi = document.querySelector('#chunLi');
  const captainA = document.querySelector('#captainA'); */

 // const brolySurPlace = document.querySelector('#brolySurPlace');
 // const arenaElement = document.querySelector('.arena');

  // Fonction pour animer le sprite sheet de Broly
 // createAnimation(brolySurPlace, '-2006px 0px', 'steps(10)', 1500);
/* createAnimation(venom, '-3940px 0px', 'steps(17)', 1500);
  createAnimation(chunLi, '-1302px 0px', 'steps(14)', 1500);
  createAnimation(captainA, '-441px 0px', 'steps(3)', 1500); */

 /* function animateBrolySpriteSheet() {
    createAnimation(brolySurPlace, '-2006px 0px', 'steps(10)', 1500);
    // Affichage de l'arène
    arenaElement.style.display = 'block';
  } */

}; 


export default FightersPage;
