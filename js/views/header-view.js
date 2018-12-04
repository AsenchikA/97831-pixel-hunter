import {INITIAL_GAME_STATE} from '../data/game-data.js';
import AbstractView from './abstract-view.js';

export class ButtonHeader extends AbstractView {
  constructor() {
    super();
  }
  get template() {
    return `<button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
    </button>`;
  }
  bind() {
    this.element.addEventListener(`click`, () => {
      this.onClick();
    });
  }
  onClick() {

  }
}

export class Timer extends AbstractView {
  constructor(time) {
    super();
    this.time = time;
  }
  get template() {
    return `<div class="game__timer">${this.time}</div>`;
  }
}

export class Lives extends AbstractView {
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

