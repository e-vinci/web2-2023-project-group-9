
// import arena from '../../img/Arena/areneDBZ.png';
import brolyPortrait from '../../img/PortraitFighters/Broly.png';
import venomPortrait from '../../img/PortraitFighters/Venom.png';
import chunLiPortrait from '../../img/PortraitFighters/Chun li.png';
import spiderManPortrait from '../../img/PortraitFighters/Spider man.png';
import captainAmerica from '../../img/PortraitFighters/Captain america.png';
import gokuPortrait from '../../img/PortraitFighters/Goku.png';
import gohanPortrait from '../../img/PortraitFighters/Gohan.png';
// import arenaDbz from '../../img/MyFighters/arenaDbz.jpg';
// import arenaCh from '../../img/MyFighters/arenaCh.jpg';
// import arenaNy from '../../img/MyFighters/arenaNy.jpg';
// import arenaCa from '../../img/MyFighters/arenaCa.jpg';


import backgroundFighters  from '../../img/BaseDuSite/backgroundFighters.jpg';

import { clearPage } from '../../utils/render';

const FightersPage = () => {
  clearPage();
  const header = document.querySelector('#navbarWrapper');
  header.style.position = 'absolute';
  const main = document.querySelector('main');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');
  main.style.backgroundImage = `url(${backgroundFighters})`;
  main.style.backgroundSize = 'cover';
  main.style.height = '100vh';
  main.appendChild(mainContainer);
  mainContainer.innerHTML = `
    <button style="background-image: url('${brolyPortrait}')" class="brolyDBZ"></button>
    <button style="background-image: url('${venomPortrait}')" class="venomSP"></button>
    <button style="background-image: url('${spiderManPortrait}')" class="spiderMan"></button>
    <button style="background-image: url('${chunLiPortrait}')" class="chunLiTK"></button>
    <button style="background-image: url('${captainAmerica}')" class="captainAmerica"></button>
    <button style="background-image: url('${gokuPortrait}')" class="goku"></button>
    <button style="background-image: url('${gohanPortrait}')" class="gohan"></button>

    <section id="arena">
      <div></div>
    </section>
  `;
  // const arena = document.querySelector('#arena');
  const sprite = document.querySelector('#arena div');
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) =>{
    if(button.className === 'brolyDBZ' || button.className === 'goku' || button.className === 'gohan'){
      button.addEventListener('click', ()=>{
        // arena.style.backgroundImage = `url(${arenaDbz})`;
        sprite.id = button.className // comme ça l'id du sprite il prend la classeName de l'image vu que dans le css les sprite c dans une idée qui est égale à la classeName des images  
      })
    }
    if(button.className === 'venomSP' || button.className === 'spiderMan'){
      button.addEventListener('click', ()=>{
        // arena.style.backgroundImage = `url(${arenaNy})`;
        sprite.id = button.className
      })
    }
    if(button.className === 'chunLiTK'){
      button.addEventListener('click', ()=>{
        // arena.style.backgroundImage = `url(${arenaCh})`;
        sprite.id = button.className
      })
    }
    if(button.className === 'captainAmerica'){
      button.addEventListener('click', ()=>{
        // arena.style.backgroundImage = `url(${arenaCa})`;
        sprite.id = button.className
      })
    }
  });

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
