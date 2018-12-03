import wrapElement from './../utils/wrap-element.js';
import {timerTemplate, livesTemplate, createButtonHeader} from './header.js';
import statsIcons from './stats-icons.js';
import {gameState} from '../data/game-data.js';
import updateGame from '../utils/update-game.js';
import cropImages from '../utils/crop-images.js';

export default (option) => {
  const template = `
  <header class="header">
    ${timerTemplate(30)}
    ${livesTemplate(gameState.lives)}
  </header>
  <section class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src=${option} alt="Option 1" width="705" height="455">
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
  ${statsIcons(gameState.answers)}
  </section>`;

  const element = wrapElement(template);

  const header = element.querySelector(`.header`);
  header.insertBefore(createButtonHeader(), header.children[0]);

  const gameForm = element.querySelector(`form`);

  gameForm.addEventListener(`change`, () => {
    updateGame(event.target.value, gameState.level, gameState.time);
  });

  const image = gameForm.querySelector(`.game__option img`);

  image.addEventListener(`load`, () => {
    const newSize = cropImages([image]);
    image.width = newSize[0].width;
    image.height = newSize[0].height;
  });

  return element;
};
