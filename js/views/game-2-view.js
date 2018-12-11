import AbstractView from './abstract-view.js';
import StatsIcons from './stats-icons-view.js';
import Lives from './lives-view.js';

export default class GameScreen2 extends AbstractView {
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
    <form class="game__content  game__content--wide">
    ${this.options.map((option, optionIndex) => (
    `<div class="game__option">
        <img src=${option.url} alt="Option 1" width=${option.width} height=${option.height}>
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question${optionIndex + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
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
    const gameForm = this.element.querySelector(`form`);

    gameForm.addEventListener(`change`, () => {
      this.onContinue(event.target.value);
    });
  }
  onContinue() {

  }
}


