import {renderScreen} from "../utils/render.js";
import GameModel from "../models/game-model.js";
import GameScreen from "../controllers/game-screen.js";
import Stats from "../views/stats-view.js";
import GreetingScreen from "../controllers/greeting-screen.js";
import RulesScreen from "../controllers/rules-screen.js";
import IntroScreen from "../controllers/intro-screen.js";

export default class Router {
  static showIntro() {
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
    const model = new GameModel(userName);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
    renderScreen(gameScreen.element);
  }

  static showStats(stats) {
    const statistics = new Stats(stats);
    renderScreen(statistics.element);
  }

}
