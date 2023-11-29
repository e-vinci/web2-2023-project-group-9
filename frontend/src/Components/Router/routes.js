import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import FightersPage from '../Pages/FightersPage';
import FightersSelect from '../Pages/FightersSelect';
import ArenaSelect from '../Pages/ArenaSelect';
import GamePage from '../Pages/GamePage';


const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/fighters' : FightersPage,
  '/fightersSelect' : FightersSelect,
  '/arenaSelect' : ArenaSelect,
  '/game' : GamePage
};

export default routes;
