/* eslint-disable no-unused-vars */
import anime from 'animejs';
import { clearAllPage } from '../../utils/render';
import brolyPortrait from '../../img/PortraitFighters/Broly.png';
import venomPortrait from '../../img/PortraitFighters/Venom.png';
import chunLiPortrait from '../../img/PortraitFighters/Chun li.png';
import spiderManPortrait from '../../img/PortraitFighters/Spider man.png';
import captainAmerica from '../../img/PortraitFighters/Captain america.png';
import gokuPortrait from '../../img/PortraitFighters/Goku.png';
import gohanPortrait from '../../img/PortraitFighters/Gohan.png';
import brolyPortrait2 from '../../img/PortraitFighters/brolyP.png';
import venomPortrait2 from '../../img/PortraitFighters/venomP.png';
import spiderManPortrait2 from '../../img/PortraitFighters/spiderP.png';
import chunLiPortrait2 from '../../img/PortraitFighters/chunP.png';
import background from '../../img/BaseDuSite/backgroundFightSelect.jpg';

const body = document.querySelector('body');
 
const FightersSelect  = () =>{
    clearAllPage();
    body.style.backgroundImage = `url(${background})`;
    body.style.backgroundSize = 'cover';
    body.style. backgroundRepeat = 'no-repeat';
    const main = document.querySelector('main');
    main.innerHTML = `
    <section id="fightersSelect">
    <section id="titleOfFigtersSelect">Choisissez Vos Combattants</section>
    <section id="choixJ1">
        <img alt="" class="combattant1">
        <p class="nomCombattant1"></p>
    </section>
    </section>
    <section class="main-container">
    <button style="background-image: url('${brolyPortrait}')" class="brolyDBZ"></button>
    <button style="background-image: url('${venomPortrait}')" class="venomSP"></button>
    <button style="background-image: url('${spiderManPortrait}')" class="spiderMan"></button>
    <button style="background-image: url('${chunLiPortrait}')" class="chunLiTK"></button>
    <button style="background-image: url('${captainAmerica}')" class="captainAmerica"></button>
    <button style="background-image: url('${gokuPortrait}')" class="goku"></button>
    <button style="background-image: url('${gohanPortrait}')" class="gohan"></button>
    </section>
    `;
    const buttons = document.querySelectorAll('button');
    const img = document.querySelector('.combattant1');
    const nomCombattant1 = document.querySelector('.nomCombattant1');

    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            if (button.classList.contains('brolyDBZ')) {
                img.src = `${brolyPortrait2}`;
                img.style.transform = 'scaleX(-1)';
                nomCombattant1.innerHTML = 'Broly';
                nomCombattant1.style.background = 'linear-gradient(to right, green, white)';
                anime({
                    targets: img,
                    translateX: -1500,
                    easing: 'easeInOutExpo',
                })
                anime({
                    targets : nomCombattant1,
                    skewX: -20,
                    translateX: 1500,
                    easing: 'easeInOutExpo',
                });
            }
            if (button.classList.contains('venomSP')) {
                img.src = `${venomPortrait2}`;
                img.style.transform = 'scaleX(1)';
                nomCombattant1.innerHTML = 'Venom';
                nomCombattant1.style.background = 'linear-gradient(to right, blue, white)';
                anime({
                    targets: img,
                    translateX: 1500,
                    easing: 'easeInOutExpo',
                })
                anime({
                    targets : nomCombattant1,
                    skewX: -20,
                    translateX: 1500,
                    easing: 'easeInOutExpo',
                });
            }
            if (button.classList.contains('spiderMan')) {
                img.src = `${spiderManPortrait2}`;
                img.style.transform = 'scaleX(1)';
                nomCombattant1.innerHTML = 'Spider-Man';
                nomCombattant1.style.background = 'linear-gradient(to right, red, white)';
                anime({
                    targets: img,
                    translateX: 1550,
                    easing: 'easeInOutExpo',
                })
                anime({
                    targets : nomCombattant1,
                    skewX: -20,
                    translateX: 1500,
                    easing: 'easeInOutExpo',
                });
            }
            if (button.classList.contains('chunLiTK')) {
                img.src = `${chunLiPortrait2}`;
                img.style.transform = 'scaleX(1)';
                nomCombattant1.innerHTML = 'Chun-Li';
                nomCombattant1.style.background = 'linear-gradient(to right, purple, white)';
                anime({
                    targets: img,
                    translateX: 1550,
                    easing: 'easeInOutExpo',
                })
                anime({
                    targets : nomCombattant1,
                    skewX: -20,
                    translateX: 1500,
                    easing: 'easeInOutExpo',
                });
            }
        });
    
        button.addEventListener("click", () => {
            if (button.classList.contains('brolyDBZ')) {
                nomCombattant1.innerHTML = 'Broly (selectionner)';
            }
            if (button.classList.contains('venomSP')) {
                nomCombattant1.innerHTML = 'Venom (selectionner)';
            }
            if (button.classList.contains('spiderMan')) {
                nomCombattant1.innerHTML = 'Spider-Man (selectionner)';
            }
            if(button.classList.contains('chunLiTK')){
                nomCombattant1.innerHTML = 'Chun-Li (selectionner)';
            }
        });
    });    
};

export default FightersSelect;

