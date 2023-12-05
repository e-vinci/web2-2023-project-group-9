// Router.js
import { removePathPrefix, usePathPrefix } from '../../utils/path-prefix';
import routes from './routes';
import Navbar from '../Navbar/Navbar';

const Router = () => {
  onFrontendLoad();
  onNavBarClick();
  onHistoryChange();
};

function onNavBarClick() {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  

  navbarWrapper.addEventListener('click', (e) => {
    const navBarItemClicked = e.target;
    const uri = navBarItemClicked?.dataset?.uri;

    // Ignore les clics sur les liens internes
    if (!uri || uri.startsWith('#')) {
      return;
    }

    e.preventDefault();

    const componentToRender = routes[uri];
    if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);

    componentToRender();
    window.history.pushState({}, '', usePathPrefix(uri));
    Navbar();  
  });
}


function onHistoryChange() {
  window.addEventListener('popstate', () => {
    const uri = removePathPrefix(window.location.pathname);
    const componentToRender = routes[uri];
    componentToRender();
    Navbar()
  });
}

function onFrontendLoad() {
  window.addEventListener('load', () => {
    const uri = removePathPrefix(window.location.pathname);
    const componentToRender = routes[uri];
    if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);

    componentToRender();
    Navbar();
  });
}

export default Router;
