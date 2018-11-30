import wrapElement from './../utils/wrap-element.js';
import {timerTemplate, livesTemplate, createButtonHeader} from './header.js';
import statsIcons from './stats-icons.js';
import {gameState} from '../data/game-data.js';
import updateGame from '../utils/update-game.js';

export default (options) => {
  const template = `
  <header class="header">
    ${timerTemplate(30)}
    ${livesTemplate(gameState.lives)}
  </header>
  <section class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
  ${options.map((option, optionIndex) => (
    `<div class="game__option">
      <img src=${option} alt="Option ${optionIndex + 1}" width="304" height="455">
    </div>`
  ))}
  </form>
  ${statsIcons(gameState.answers)}
  </section>`;

  const element = wrapElement(template);

  const header = element.querySelector(`.header`);
  header.insertBefore(createButtonHeader(), header.children[0]);

  const gameForm = element.querySelector(`form`);

  gameForm.addEventListener(`click`, (event) => {
    if (event.target.parentNode.classList.contains(`game__option`)) {
      const answer = event.target.getAttribute(`alt`);
      updateGame(answer, gameState.level, gameState.time);
    }
  });

  return element;
};
