import backgroundImage from '../../img/BaseDuSite/BackgroundFightersSelect.jpg'
import { clearPage } from '../../utils/render';

const FightersSelect  = () =>{
    clearPage();
    const main = document.querySelector('main');
    const body = document.body.style;
    main.innerHTML = ' '
    body.backgroundImage = `url(${backgroundImage})`;
    body.maxWidth = '100%';
    body.backgroundRepeat = 'no-repeat';
    body.backgroundPosition = 'center top';
    body.backgroundSize = 'cover';
};

export default FightersSelect;

