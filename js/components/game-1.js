import wrapElement from './../utils/wrap-element.js';
import {timerTemplate, livesTemplate, createButtonHeader} from './header.js';
import statsIcons from './stats-icons.js';
import {gameState} from '../data/game-data.js';
import updateGame from '../utils/update-game.js';
import cropImages from '../utils/crop-images.js';

export default (options) => {
  const template = `
  <header class="header">
    ${timerTemplate(30)}
    ${livesTemplate(gameState.lives)}
  </header>
  <section class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    ${options.map((option, optionIndex) => (
    `<div class="game__option">
      <img src=${option} alt="Option ${optionIndex + 1}" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name="question${optionIndex + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name="question${optionIndex + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
      </div>`
  ))}
  </form>
  ${statsIcons(gameState.answers)}
  </section>`;


  const element = wrapElement(template);

  const header = element.querySelector(`.header`);
  header.insertBefore(createButtonHeader(), header.children[0]);

  const gameOptions = Array.from(element.querySelectorAll(`.game__option`));

  const gameForm = element.querySelector(`form`);

  gameForm.addEventListener(`change`, () => {
    const answers = [];
    gameOptions.forEach((option) => {
      const answerItem = Array.from(option.querySelectorAll(`input`)).find((input) => input.checked);
      if (answerItem) {
        answers.push(answerItem.value);
      }
    });
    if (answers && answers.length === 2) {
      updateGame(answers, gameState.level, gameState.time);
    }
  });

  const images = Array.from(gameForm.querySelectorAll(`.game__option img`));

  const countImages = images.length;
  let countLoadedImages = 0;

  images.forEach((image) => {
    image.addEventListener(`load`, () => {
      countLoadedImages++;
      if (countLoadedImages === countImages) {
        const newSizes = cropImages(images);
        images.forEach((imageItem, imageIndex) => {
          imageItem.width = newSizes[imageIndex].width;
          imageItem.height = newSizes[imageIndex].height;
        });
      }
    });
  });

  return element;
};
