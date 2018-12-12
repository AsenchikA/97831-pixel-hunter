import AbstractView from './abstract-view.js';
import StatsIcons from './stats-icons-view.js';
import Lives from './lives-view.js';
import cropImages from '../utils/crop-images.js';

export default class GameScreen1 extends AbstractView {
  constructor(question, options, lives, estimates) {
    super();
    this.question = question;
    this.options = options;
    this.lives = lives;
    this.estimates = estimates;
  }
  get template() {
    return `
    <header class="header">
      ${new Lives(this.lives).template}
    </header>
    <section class="game">
    <p class="game__task">${this.question}</p>
    <form class="game__content">
      ${this.options.map((option, optionIndex) => (
    `<div class="game__option">
        <img src=${option.url} alt="Option ${optionIndex + 1}" width=${option.width} height=${option.height}>
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${optionIndex + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${optionIndex + 1}" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
        </div>`
  ))}
    </form>
    ${new StatsIcons(this.estimates).template}
    </section>`;
  }
  bind() {
    const gameOptions = Array.from(this.element.querySelectorAll(`.game__option`));
    const gameForm = this.element.querySelector(`form`);

    gameForm.addEventListener(`change`, () => {
      const answers = [];
      gameOptions.forEach((option) => {
        const answerItem = Array.from(option.querySelectorAll(`input`)).find((input) => input.checked);
        if (answerItem) {
          answers.push(answerItem.value);
        }
      });
      if (answers && answers.length === 2) {
        this.onContinue(answers.join(`, `)); 
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
  }

  onContinue() {
  }
}
