import {GameScreen1} from '../views/game-1-view.js';
import {GameScreen2} from '../views/game-2-view.js';
import {GameScreen3} from '../views/game-3-view.js';
import createTimer from '../utils/start-time.js';
import {GameRules} from '../data/game-data.js';
import getAnswerEstimate from '../utils/get-estimate.js';
import Router from '../router/application-router.js';
import {renderScreen} from '../utils/render.js';

export default class GameScreen {
  constructor(gameModel) {
    this.gameModel = gameModel;
    this._timer = null;
  }
  get element() {
    return this.root;
  }
  init() {
    this.updateRoot();
    // this.startTimer();
  }
  getGameScreen(type) {
    const {options} = this.gameModel.currentLevel;
    const {lives, estimates} = this.gameModel.state;
    let screen = {};
    switch (type) {
      case `gameScreen1`:
        screen = new GameScreen1(options, lives, estimates);
        break;
      case `gameScreen2`:
        screen = new GameScreen2(options, lives, estimates);
        break;
      case `gameScreen3`:
        screen = new GameScreen3(options, lives, estimates);
        break;
    }
    screen.onContinue = (answers) => this.onGetAnswer(answers);
    return screen.element;
  }
  startTimer() {
    createTimer(GameRules.MAX_TIME, this.updateHeader(), this.stopTimer());
  }
  onGetAnswer(answers) {
    const estimate = getAnswerEstimate(answers, this.gameModel.currentLevel.answer, this.gameModel.state);
    this.gameModel.levelEstimate = estimate;
    if (estimate === `wrong`) {
      this.gameModel.decreaseLives();
    }
    this.gameModel.nextLevel();
    if (!this.gameModel.isDead() && this.gameModel.hasNextLevel()) {
      this.updateRoot();
      renderScreen(this.element);
    } else {
      Router.showStats();
    }
  }
  updateRoot() {
    this.root = this.getGameScreen(this.gameModel.currentLevel.type);
  }
  _tick() {
    this.model.tick();
    this.updateHeader();
    this._timer = setTimeout(() => this._tick(), 1000);
  }
}
