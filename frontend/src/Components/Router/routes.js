import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import FightersSelect from '../Pages/FightersSelect';
import ArenaSelect from '../Pages/ArenaSelect';
import GamePage from '../Pages/GamePage';
import DemoGame from '../Pages/DemoGamePage';
import HandleSuggestedPhrasePage from '../Pages/HandleSuggestedPhrasePage';
import HandlePhrasePage from '../Pages/HandlePhrasePage';


const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/fightersSelect' : FightersSelect,
  '/arenaSelect' : ArenaSelect,
  '/demo' : DemoGame,
  '/game' : GamePage,
  '/handleSuggestedPhrase' : HandleSuggestedPhrasePage,
  '/handlePhrase' : HandlePhrasePage
};

export default routes;
