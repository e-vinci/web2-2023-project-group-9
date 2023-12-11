import { clearAllPage } from '../../utils/render';
import background from '../../img/BaseDuSite/backgroundFighters.jpg';

import arena1 from '../../img/Arena/arene1.gif';
import arena2 from '../../img/Arena/arene2.gif';
import arena3 from '../../img/Arena/arene3.gif';
import arena4 from '../../img/Arena/arene4.gif';
import arena5 from '../../img/Arena/arene5.gif';
import arena6 from '../../img/Arena/arene6.gif';
import arena7 from '../../img/Arena/arene7.gif';
import arena8 from '../../img/Arena/arene8.gif';
import arena9 from '../../img/Arena/arene9.gif';


const body = document.querySelector('body');



const ArenaSelect = () => {

    clearAllPage();
    body.style.backgroundImage = `url(${background})`;
    body.style.backgroundSize = 'cover';
    body.style. backgroundRepeat = 'no-repeat';

   // removeExistingCarousel(); // Supprime le carrousel existant s'il y en a un


    const carouselHTML =   `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="${arena1}" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena2}" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena3}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena4}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena5}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena6}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena7}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena8}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${arena9}" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    
  </div>
  
  `;

     body.innerHTML+= carouselHTML;
     
     const carouselElement = document.querySelector('#carouselExampleControls');
     const carouselItems = carouselElement.querySelectorAll('.carousel-item');
     let currentIndex = 0;
 
     const nextButton = carouselElement.querySelector('.carousel-control-next');
     const prevButton = carouselElement.querySelector('.carousel-control-prev');
 
     const showSlide = (index) => {
         carouselItems.forEach((item, i) => {
             if (i === index) {
                 item.classList.add('active');
             } else {
                 item.classList.remove('active');
             }
         });
     };
 
     nextButton.addEventListener('click', (e ) => {
        e.preventDefault();
         currentIndex = (currentIndex + 1) % carouselItems.length;
         showSlide(currentIndex);
     });
 
     prevButton.addEventListener('click', (e) => {
        e.preventDefault()
         currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
         showSlide(currentIndex);
     });
 

    
}

export default ArenaSelect;