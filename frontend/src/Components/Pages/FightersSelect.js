import { clearAllPage } from '../../utils/render';

import background from '../../img/BaseDuSite/backgroundFightSelect.jpg';

const body = document.querySelector('body');
 
const FightersSelect  = () =>{
    clearAllPage();
    body.style.backgroundImage = `url(${background})`;
    body.style.backgroundSize = 'cover';
    const main = document.querySelector('main');
    main.innerHTML = `
    
    `;
};

export default FightersSelect;

