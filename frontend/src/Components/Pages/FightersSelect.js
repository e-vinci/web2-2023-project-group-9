/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import anime from 'animejs';

import { clearAllPage } from '../../utils/render';
import Navigate from '../Router/Navigate';
import { createSessionForFighter1, createSessionForFighter2 } from '../../utils/game';

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
import captainAmericaPortrait2 from '../../img/PortraitFighters/captainP.png';
import gokuPortrait2 from '../../img/PortraitFighters/gokuP.png';
import gohanPortrait2 from '../../img/PortraitFighters/gohanP.png';
import wichFighter from '../../img/PortraitFighters/wichFighter.png'
import background from '../../img/BaseDuSite/backgroundFightSelect.jpg';
// import brolyFighter from '../../assets/Broly/sprite1_Broly.png'


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
    <section class="wichChoise1">
    <img src="${wichFighter}" class="combattant1">
    <p class="wichJ1">Joueur 1</p>
    </section>
    <section class="wichChoise2">
    <img src="${wichFighter}" class="combattant2">
    <p class="wichJ2">Joueur 2</p>
    </section>
    </section>
    <section class="main-container" id="main-container1">
    <button style="background-image: url('${brolyPortrait}')" class="brolyDBZ"></button>
    <button style="background-image: url('${venomPortrait}')" class="venomSP"></button>
    <button style="background-image: url('${spiderManPortrait}')" class="spiderMan"></button>
    <button style="background-image: url('${chunLiPortrait}')" class="chunLiTK"></button>
    <button style="background-image: url('${captainAmerica}')" class="captainAmerica"></button>
    <button style="background-image: url('${gokuPortrait}')" class="goku"></button>
    <button style="background-image: url('${gohanPortrait}')" class="gohan"></button>
    </section>

    <section class="main-container" id="main-container2" style="display:none;">
    <button style="background-image: url('${brolyPortrait}')" class="brolyDBZ"></button>
    <button style="background-image: url('${venomPortrait}')" class="venomSP"></button>
    <button style="background-image: url('${spiderManPortrait}')" class="spiderMan"></button>
    <button style="background-image: url('${chunLiPortrait}')" class="chunLiTK"></button>
    <button style="background-image: url('${captainAmerica}')" class="captainAmerica"></button>
    <button style="background-image: url('${gokuPortrait}')" class="goku"></button>
    <button style="background-image: url('${gohanPortrait}')" class="gohan"></button>
    </section>
    `;
    const buttons1 = document.querySelectorAll('#main-container1 button');
    const buttons2 = document.querySelectorAll('#main-container2 button');
    const img = document.querySelector('.combattant1');
    const nomCombattant1 = document.querySelector('.wichJ1');
    const wich = document.querySelector('.wichChoise1');
    const img2 = document.querySelector('.combattant2');
    const nomCombattant2 = document.querySelector('.wichJ2');
    const wich2 = document.querySelector('.wichChoise2');

    let player1Selected = false;
    function choixJ1(){
        let selectedFighter1 = null;
        buttons1.forEach((button) => {
            button.addEventListener("mouseover", () => {
                wich.style.marginLeft = '-100%';
                if (button.classList.contains('brolyDBZ')) {
                    img.src = `${brolyPortrait2}`;
                    img.style.transform = 'scaleX(-1)';
                    nomCombattant1.innerHTML = 'Brylon';
                    nomCombattant1.style.background = 'linear-gradient(to right, green, yellow)';
                    animationImg(img,-1500,'easeInOutExpo',500);
                    animationNom(nomCombattant1,-20,1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('venomSP')) {
                    img.src = `${venomPortrait2}`;
                    img.style.transform = 'scaleX(1)';
                    nomCombattant1.innerHTML = 'Venin';
                    nomCombattant1.style.background = 'linear-gradient(to right, blue, white)';
                    animationImg(img,1500,'easeInOutExpo',500);
                    animationNom(nomCombattant1,-20,1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('spiderMan')) {
                    img.src = `${spiderManPortrait2}`;
                    img.style.transform = 'scaleX(1)';
                    nomCombattant1.innerHTML = 'Arachno-Guy';
                    nomCombattant1.style.background = 'linear-gradient(to right, red, black)';
                    animationImg(img,1550,'easeInOutExpo',500);
                    animationNom(nomCombattant1,-20,1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('chunLiTK')) {
                    img.src = `${chunLiPortrait2}`;
                    img.style.transform = 'scaleX(1)';
                    nomCombattant1.innerHTML = 'Chin-Lai';
                    nomCombattant1.style.background = 'linear-gradient(to right, purple, blue)';
                    animationImg(img,1550,'easeInOutExpo',500);
                    animationNom(nomCombattant1,-20,1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('captainAmerica')) {
                    img.src = `${captainAmericaPortrait2}`;
                    img.style.transform = 'scaleX(1)';
                    nomCombattant1.innerHTML = 'Liberty Captain';
                    nomCombattant1.style.background = 'linear-gradient(to right, blue,red)';
                    animationImg(img,1500,'easeInOutExpo',500);
                    animationNom(nomCombattant1,-20,1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('goku')) {
                    img.src = `${gokuPortrait2}`;
                    img.style.transform = 'scaleX(1)';
                    nomCombattant1.innerHTML = 'Sun-Gako';
                    nomCombattant1.style.background = 'linear-gradient(to right, orange, green)';
                    animationImg(img,1500,'easeInOutExpo',500);
                    animationNom(nomCombattant1,-20,1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('gohan')) {
                    img.src = `${gohanPortrait2}`;
                    img.style.transform = 'scaleX(-1)';
                    nomCombattant1.innerHTML = 'Sun-Gaho';
                    nomCombattant1.style.background = 'linear-gradient(to right, purple, yellow)';
                    animationImg(img,-1500,'easeInOutExpo',500);
                    animationNom(nomCombattant1,-20,1500,'easeInOutExpo',500)
                }
            });
    
            function animationImg(targets,translateX,easing,duration){
                return anime({
                    targets,
                    translateX,
                    easing,
                    duration
                })
            }
            function animationNom(targets,skewX,translateX,easing,duration){
                return anime({
                    targets,
                    skewX,
                    translateX,
                    easing,
                    duration
                })
            }
        
            button.addEventListener("click", () => {
                if(!player1Selected && selectedFighter1 === button){
                    if (button.classList.contains('brolyDBZ')) {
                        nomCombattant1.innerHTML = 'Broly (Pret)';
                        createSessionForFighter1('broly');
                    }
                    if (button.classList.contains('venomSP')) {
                        nomCombattant1.innerHTML = 'Venom (Pret)';
                        createSessionForFighter1('venom');
                    }
                    if (button.classList.contains('spiderMan')) {
                        nomCombattant1.innerHTML = 'Spider-Man (Pret)';
                        createSessionForFighter1('spider-man');
                    }
                    if(button.classList.contains('chunLiTK')){
                        nomCombattant1.innerHTML = 'Chun-Li (Pret)';
                        createSessionForFighter1('chun-li');
                    }
                    if (button.classList.contains('captainAmerica')){
                        nomCombattant1.innerHTML = 'Captain-America (Pret)'
                        createSessionForFighter1('captain-america');
                    }
                    if (button.classList.contains('goku')){
                        nomCombattant1.innerHTML = 'Son-Goku (Pret)'
                        createSessionForFighter1('son-goku');
                    }
                    if (button.classList.contains('gohan')){
                        nomCombattant1.innerHTML = 'Son-Gohan (Pret)'
                        createSessionForFighter1('son-gohan');
                    }
                    selectedFighter1 = null;
                    player1Selected = true;
                    choixJ2();
                }else{
                    selectedFighter1 = button;
                }
            });
        }); 
    }

    function choixJ2(){
        let selectedFighter2 = null;
        const mainContent2 = document.querySelector('#main-container2');
        mainContent2.style.display = "flex";
        buttons2.forEach((button) => {
            button.addEventListener("mouseover", () => {
                wich2.style.marginRight = '-100%';
                if (button.classList.contains('brolyDBZ')) {
                    img2.src = `${brolyPortrait2}`;
                    img2.style.transform = 'scaleX(1)';
                    nomCombattant2.innerHTML = 'Broly';
                    nomCombattant2.style.background = 'linear-gradient(to right, green, yellow)';
                    animationImg(img2,-1500,'easeInOutExpo',500);
                    animationNom(nomCombattant2,-20,-1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('venomSP')) {
                    img2.src = `${venomPortrait2}`;
                    img2.style.transform = 'scaleX(-1)';
                    nomCombattant2.innerHTML = 'Venom';
                    nomCombattant2.style.background = 'linear-gradient(to right, blue, white)';
                    animationImg(img2,1500,'easeInOutExpo',500);
                    animationNom(nomCombattant2,-20,-1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('spiderMan')) {
                    img2.src = `${spiderManPortrait2}`;
                    img2.style.transform = 'scaleX(-1)';
                    nomCombattant2.innerHTML = 'Spider-Man';
                    nomCombattant2.style.background = 'linear-gradient(to right, red, black)';
                    animationImg(img2,1550,'easeInOutExpo',500);
                    animationNom(nomCombattant2,-20,-1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('chunLiTK')) {
                    img2.src = `${chunLiPortrait2}`;
                    img2.style.transform = 'scaleX(-1)';
                    nomCombattant2.innerHTML = 'Chun-Li';
                    nomCombattant2.style.background = 'linear-gradient(to right, purple, blue)';
                    animationImg(img2,1550,'easeInOutExpo',500);
                    animationNom(nomCombattant2,-20,-1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('captainAmerica')) {
                    img2.src = `${captainAmericaPortrait2}`;
                    img2.style.transform = 'scaleX(-1)';
                    nomCombattant2.innerHTML = 'Captain-America';
                    nomCombattant2.style.background = 'linear-gradient(to right, blue,red)';
                    animationImg(img2,1500,'easeInOutExpo',500);
                    animationNom(nomCombattant2,-20,-1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('goku')) {
                    img2.src = `${gokuPortrait2}`;
                    img2.style.transform = 'scaleX(-1)';
                    nomCombattant2.innerHTML = 'Son-Goku';
                    nomCombattant2.style.background = 'linear-gradient(to right, orange, green)';
                    animationImg(img2,1500,'easeInOutExpo',500);
                    animationNom(nomCombattant2,-20,-1500,'easeInOutExpo',500)
                }
                if (button.classList.contains('gohan')) {
                    img2.src = `${gohanPortrait2}`;
                    img2.style.transform = 'scaleX(1)';
                    nomCombattant2.innerHTML = 'Son-Gohan';
                    nomCombattant2.style.background = 'linear-gradient(to right, purple, yellow)';
                    animationImg(img2,-1500,'easeInOutExpo',500);
                    animationNom(nomCombattant2,-20,-1500,'easeInOutExpo',500)
                }
            });
    
            function animationImg(targets,translateX,easing,duration){
                return anime({
                    targets,
                    translateX,
                    easing,
                    duration
                })
            }
            function animationNom(targets,skewX,translateX,easing,duration){
                return anime({
                    targets,
                    skewX,
                    translateX,
                    easing,
                    duration
                })
            }
        
            button.addEventListener("click", () => {
                if(selectedFighter2 === button){
                    if (button.classList.contains('brolyDBZ')) {
                        nomCombattant2.innerHTML = 'Broly (Pret)';
                        createSessionForFighter2('broly')
                    }
                    if (button.classList.contains('venomSP')) {
                        nomCombattant2.innerHTML = 'Venom (Pret)';
                        createSessionForFighter2('venom')
                    }
                    if (button.classList.contains('spiderMan')) {
                        nomCombattant2.innerHTML = 'Spider-Man (Pret)';
                        createSessionForFighter2('spider-man')
                    }
                    if(button.classList.contains('chunLiTK')){
                        nomCombattant2.innerHTML = 'Chun-Li (Pret)';
                        createSessionForFighter2('chun-li')
                    }
                    if (button.classList.contains('captainAmerica')){
                        nomCombattant2.innerHTML = 'Captain-America (Pret)'
                        createSessionForFighter2('captain-america')
                    }
                    if (button.classList.contains('goku')){
                        nomCombattant2.innerHTML = 'Son-Goku (Pret)'
                        createSessionForFighter2('son-goku')
                    }
                    if (button.classList.contains('gohan')){
                        nomCombattant2.innerHTML = 'Son-Gohan (Pret)'
                        createSessionForFighter2('son-gohan')
                    }
                    // Réinitialisez la variable pour permettre de choisir un autre combattant
                    selectedFighter2 = null;
                    Navigate('/arenaSelect')
                }else{
                    selectedFighter2 = button;

                }
            });
        });
    }

    choixJ1();
};

export default FightersSelect;

