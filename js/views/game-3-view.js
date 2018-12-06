import AbstractView from './abstract-view.js';
import {backButton, liveCounter, timer} from '../controllers/header-screen.js';
import {statsIcons} from '../components/stats.js';

export class GameScreen3 extends AbstractView {
  constructor(options, lives, estimates) {
    super();
    this.options = options;
    this.lives = lives;
    this.estimates = estimates;
  }
  get template() {
    return `
    <header class="header">
    ${timer(30).template}
    ${liveCounter(this.lives).template}
    </header>
    <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
    ${this.options.map((option, optionIndex) => (
    `<div class="game__option">
        <img src=${option} alt="Option ${optionIndex + 1}" width="304" height="455">
      </div>`
  ))}
    </form>
    ${statsIcons(this.estimates).template}
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
  render() {
    const wrapper = super.render();
    const header = wrapper.querySelector(`.header`);
    header.insertBefore(backButton(), header.children[0]);
    return wrapper;
  }
  onContinue() {

  }
}

