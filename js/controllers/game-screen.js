import GameScreen1 from '../views/game-1-view.js';
import GameScreen2 from '../views/game-2-view.js';
import GameScreen3 from '../views/game-3-view.js';
import getTimer from '../utils/start-time.js';
import getAnswerEstimate from '../utils/get-estimate.js';
import Router from '../router/application-router.js';
import {renderScreen} from '../utils/render.js';
import countPoints from '../utils/count-points.js';
import Timer from '../views/timer-view.js';
import BackButton from './back-button-screen.js';
import {GameRules} from '../data/game-data.js';

export default class GameScreen {
  constructor(gameModel) {
    this.gameModel = gameModel;
    this.timerElement = new Timer(this.gameModel.state.time).element;
    this._timer = null;
  }
  get element() {
    return this.root;
  }
  init() {
    this.gameModel.restart();
    this.updateRoot();
    this._startTimer();
  }
  _startTimer() {
    const timer = getTimer(this.gameModel.state.time, () => {
      this.gameModel.decreaseTime();
      this.updateTimer();
    }, () => this._stopTimer());
    this._timer = setInterval(() => timer.tick(), 1000);
  }
  _stopTimer() {
    this.onGetAnswer(``);
  }
  updateRoot() {
    this.root = this.getGameScreen(this.gameModel.currentLevel.type);
    this.rootHeader = this.root.querySelector(`.header`);
    this.rootHeader.insertBefore(new BackButton().element, this.rootHeader.children[0]);
    this.rootHeader.insertBefore(this.timerElement, this.rootHeader.children[1]);
  }
  updateTimer() {
    const timerElement = new Timer(this.gameModel.state.time).element;
    if (this.gameModel.state.time <= GameRules.DANGEROUS_TIME) {
      timerElement.classList.add(`timer--blink`);
    }
    this.rootHeader.replaceChild(timerElement, this.rootHeader.children[1]);
    this.timerElement = timerElement;
  }
  getGameScreen(type) {
    const {question, options} = this.gameModel.currentLevel;
    const {lives, estimates} = this.gameModel.state;
    let screen = {};
    switch (type) {
      case `two-of-two`:
        screen = new GameScreen1(question, options, lives, estimates);
        break;
      case `tinder-like`:
        screen = new GameScreen2(question, options, lives, estimates);
        break;
      case `one-of-three`:
        screen = new GameScreen3(question, options, lives, estimates);
        break;
    }
    screen.onContinue = (answers) => this.onGetAnswer(answers);
    return screen.element;
  }
  onGetAnswer(answers) {
    clearInterval(this._timer);
    const estimate = getAnswerEstimate(answers, this.gameModel.currentLevel.rightAnswer, this.gameModel.state.time);
    this.gameModel.levelEstimate = estimate;
    if (estimate === `wrong`) {
      this.gameModel.decreaseLives();
    }
    if (!this.gameModel.isDead() && this.gameModel.hasNextLevel()) {
      this.changeLevel();
    } else {
      this.showStatsScreen();
    }
  }
  changeLevel() {
    this.gameModel.nextLevel();
    this.updateTimer();
    this.updateRoot();
    renderScreen(this.element);
    this._startTimer();
  }
  showStatsScreen() {
    const {lives, estimates} = this.gameModel.state;
    const stats = countPoints(estimates, lives);
    const isSuccessGame = stats.total !== -1;
    Router.showStats(stats, isSuccessGame, this.gameModel.playerName);
  }
}
