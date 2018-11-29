import {INITIAL_GAME_STATE} from '../data/game-data.js';
import greetengBlock from './../components/greeteng.js';
import {renderScreen} from './../utils/render.js';
import wrapElement from './../utils/wrap-element.js';

const createButtonHeader = () => {
  const buttonTemplate = `<button class="back">
  <span class="visually-hidden">Вернуться к началу</span>
  <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
    <use xlink:href="img/sprite.svg#arrow-left"></use>
  </svg>
  <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
    <use xlink:href="img/sprite.svg#logo-small"></use>
  </svg>
  </button>`;
  const buttonElement = wrapElement(buttonTemplate);

  buttonElement.addEventListener(`click`, () => {
    renderScreen(greetengBlock);
  });
  return buttonElement;
};


const timerTemplate = (time) => `<div class="game__timer">${time}</div>`;

const livesTemplate = (lives) => {
  const lostLives = new Array(INITIAL_GAME_STATE.lives - lives).fill(`img/heart__empty.svg`);
  const leftLives = new Array(lives).fill(`img/heart__full.svg`);

  const livesTemplates = `
  <div class="game__lives">
    ${leftLives
      .concat(lostLives)
      .map((src) => `<img src="${src}" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
  </div>`;

  return livesTemplates;

};

export {createButtonHeader, timerTemplate, livesTemplate};
