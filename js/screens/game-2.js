import wrapElement from './../utils/wrap-element.js';
import {timerTemplate, livesTemplate} from './header.js';
import statsIcons from '../data/stats-icons.js';
import {gameState} from '../data/game-data.js';
import updateGame from '../utils/update-game.js';

export default (options) => {
  const template = `<header class="header">
  ${timerTemplate(30)}
  ${livesTemplate(gameState.lives)}
  </header>
  <section class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      ${[...options].map((option, optionIndex) => `<img src=${option} alt=\`Option ${optionIndex + 1}\` width="705" height="455">`)}
      <label class="game__answer  game__answer--photo">
        <input class="visually-hidden" name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input class="visually-hidden" name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  ${statsIcons}
  </section>`;

  const element = wrapElement(template);

  const gameForm = element.querySelector(`form`);

  gameForm.addEventListener(`change`, () => {
    const answers = [];
    const answerItem = Array.from(gameForm.querySelectorAll(`input`)).find((input) => input.checked);
    if (answerItem) {
      answers.push(answerItem.value);
      updateGame(answers, gameState.level, gameState.time);
    }
  });

  return element;
};
