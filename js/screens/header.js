import greetengBlock from './../screens/greeteng.js';
import renderScreen from './../utils/render-screen.js';
import {INITIAL_GAME_STATE} from '../data/game-data.js';

const renderBackButtonTemplate = () => {
  const button = `<button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
    </button>`;

  // button.addEventListener(`click`, () => {
  //   renderScreen(greetengBlock);
  // });

  return button;
};

const timerTemplate = (time) => `<div class="game__timer">${time}</div>`;

const livesTemplate = (lives) => `<div class="game__lives">
${new Array(lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`).join(``)}
${new Array(INITIAL_GAME_STATE.lives - lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`).join(``)}
</div>`;

export {renderBackButtonTemplate, timerTemplate, livesTemplate};
