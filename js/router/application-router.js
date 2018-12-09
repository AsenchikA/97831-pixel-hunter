import intro from "../controllers/intro-screen.js";
import {renderScreen} from "../utils/render.js";
import greeting from "../controllers/greeting-screen.js";
import rules from "../controllers/rules-screen.js";
import GameModel from "../models/game-model.js";
import GameScreen from "../controllers/game-screen.js";
import Loader from "../utils/loader.js";
import {statsScreen} from "../controllers/stats-screen.js";

let gameData;

export default class Router {
  static showIntro() {
    Loader.loadData()
            .then((data) => (gameData = data));
    renderScreen(intro().element);
  }
  static showGreeting() {
    renderScreen(greeting().element);
  }
  static showRules() {
    renderScreen(rules().element);
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
      .then((data) => renderScreen(statsScreen(data, isSuccessGame).element));
  }

}
