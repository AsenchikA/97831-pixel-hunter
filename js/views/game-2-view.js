import AbstractView from './abstract-view.js';
import {backButton, liveCounter} from '../controllers/header-screen.js';
import {StatsIcons} from './stats-icons-view.js';

export class GameScreen2 extends AbstractView {
  constructor(option, lives, estimates) {
    super();
    this.option = option;
    this.lives = lives;
    this.estimates = estimates;
  }
  get template() {
    return `
    <header class="header">
    ${liveCounter(this.lives).template}
    </header>
    <section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${this.option} alt="Option 1" width="705" height="455">
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
    ${new StatsIcons(this.estimates).template}
    </section>`;
  }
  bind() {
    const gameForm = this.element.querySelector(`form`);

    gameForm.addEventListener(`change`, () => {
      this.onContinue(event.target.value);
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


