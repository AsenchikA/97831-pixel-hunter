import AbstractView from './abstract-view.js';
import StatsIcons from './stats-icons-view.js';
import Lives from './lives-view.js';

export default class GameScreen3 extends AbstractView {
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
    <form class="game__content  game__content--triple">
    ${this.options.map((option, optionIndex) => (
    `<div class="game__option">
        <img src=${option.url} alt="Option ${optionIndex + 1}" width=${option.width} height=${option.height}>
      </div>`
  ))}
    </form>
    ${new StatsIcons(this.estimates).template}
    </section>`;
  }
  bind() {
    const gameForm = this.element.querySelector(`form`);

    gameForm.addEventListener(`click`, (event) => {
      if (event.target.parentNode.classList.contains(`game__option`)) {
        const answer = event.target.getAttribute(`alt`);
        this.onContinue(answer);
      }
    });
  }
  onContinue() {

  }
}

