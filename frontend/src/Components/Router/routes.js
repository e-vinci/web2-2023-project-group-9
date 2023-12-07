import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import FightersPage from '../Pages/FightersPage';
import FightersSelect from '../Pages/FightersSelect';
import ArenaSelect from '../Pages/ArenaSelect';
import GamePage from '../Pages/GamePage';
import DemoGame from '../Pages/DemoGamePage';
import HandleSuggestedPhrasePage from '../Pages/HandleSuggestedPhrasePage';
import HandlePhrase from '../Pages/HandlePhrasePage';


const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/fighters' : FightersPage,
  '/fightersSelect' : FightersSelect,
  '/arenaSelect' : ArenaSelect,
  '/demo' : DemoGame,
  '/game' : GamePage,
  '/handleSuggestedPhrase' : HandleSuggestedPhrasePage,
  '/handlePhrase' : HandlePhrase
};

export default routes;
