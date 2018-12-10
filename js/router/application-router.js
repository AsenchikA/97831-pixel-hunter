import {renderScreen} from "../utils/render.js";
import GameModel from "../models/game-model.js";
import GameScreen from "../controllers/game-screen.js";
import Loader from "../utils/loader.js";
import GreetingScreen from "../controllers/greeting-screen.js";
import RulesScreen from "../controllers/rules-screen.js";
import IntroScreen from "../controllers/intro-screen.js";
import StatsScreen from "../controllers/stats-screen.js";


let gameData;

export default class Router {
  static showIntro() {
    Loader.loadData()
            .then((data) => (gameData = data));
    const introScreen = new IntroScreen();
    renderScreen(introScreen.element);
  }
  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    renderScreen(greetingScreen.element);
  }
  static showRules() {
    const rulesScreen = new RulesScreen();
    renderScreen(rulesScreen.element);
  }

  static showGame(userName) {
    const model = new GameModel(gameData, userName);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
    renderScreen(gameScreen.element);
  }

  static showStats(stats, isSuccessGame, playerName) {
    Loader.saveResult(playerName, stats)
      .then(() => Loader.loadStats(playerName))
      .then((data) => renderScreen(new StatsScreen(data, isSuccessGame).element));
  }

}
