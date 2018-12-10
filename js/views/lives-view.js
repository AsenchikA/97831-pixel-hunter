import {INITIAL_GAME_STATE} from '../data/game-data.js';
import AbstractView from './abstract-view.js';

export default class Lives extends AbstractView {
  constructor(lives) {
    super();
    this.lives = lives;
  }
  get template() {
    const lostLives = new Array(INITIAL_GAME_STATE.lives - this.lives).fill(`img/heart__empty.svg`);
    const leftLives = new Array(this.lives).fill(`img/heart__full.svg`);
    return `
    <div class="game__lives">
      ${leftLives
        .concat(lostLives)
        .map((src) => `<img src="${src}" class="game__heart" alt="Life" width="31" height="27">`)
        .join(``)}
    </div>`;
  }
}

