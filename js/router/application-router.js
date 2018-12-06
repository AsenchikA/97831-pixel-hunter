import intro from "../controllers/intro-screen.js";
import {renderScreen} from "../utils/render.js";
import greeting from "../controllers/greeting-screen.js";
import rules from "../controllers/rules-screen.js";
import GameModel from "../models/game-model.js";
import GameScreen from "../controllers/game-screen.js";

export default class Router {
  static showIntro() {
    renderScreen(intro().element);
  }
  static showGreeting() {
    renderScreen(greeting().element);
  }
  static showRules() {
    renderScreen(rules().element);
  }

  static showGame(userName) {
    const model = new GameModel(userName);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
    renderScreen(gameScreen.element);
  }

  // static showStats(stats) {
  //   const statistics = new StatsScreen(stats);
  //   changeView(statistics.element);
  // }

}
