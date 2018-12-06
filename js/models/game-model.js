import {INITIAL_GAME_STATE, LevelData, GameRules} from "../data/game-data";
import changeLevel from "../utils/change-level";
import createTimer from "../utils/start-time";

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }
  get state() {
    return this._state;
  }
  get currentLevel() {
    return LevelData[this._state.level - 1];
  }
  set levelEstimate(estimate) {
    this._state.estimates.push(estimate);
  }
  tick() {
    this._state = createTimer.tick();
  }
  isDead() {
    return this._state.lives <= 0;
  }
  hasNextLevel() {
    return this._state.level + 1 <= GameRules.MAX_LEVEL;
  }
  restart() {
    this._state = Object.assign({}, INITIAL_GAME_STATE);
  }
  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }
  decreaseLives() {
    this._state.lives--;
  }
}