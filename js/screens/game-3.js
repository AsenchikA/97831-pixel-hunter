import wrapElement from './../utils/wrap-element.js';
import {timerTemplate, livesTemplate} from './header.js';
import statsIcons from '../data/stats-icons.js';
import {gameState} from '../data/game-data.js';

export default (options) => {
  const template = `<header class="header">
  ${timerTemplate(30)}
  ${livesTemplate(gameState.lives)}
  </header>
  <section class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
  ${[...options].map((option, optionIndex) => (
    `<div class="game__option">
      <img src=${option} alt=\`Option ${optionIndex + 1}\` width="304" height="455">
    </div>`
  ))}
  </form>
  ${statsIcons}
  </section>`;

  const element = wrapElement(template);

  // const gameForm = element.querySelector(`form`);

  // gameForm.addEventListener(`click`, (event) => {
  //   if (event.target.parentNode.classList.contains(`game__option`)) {
  //   }
  // });

  return element;
};
