import AbstractView from './abstract-view.js';
import headerButton from '../components/header-button.js';
import timer from '../components/timer.js';
import lives from '../components/lives.js';
import statsIcons from '../components/stats-icons.js';

export class GameScreen1 extends AbstractView {
  constructor(options, gameState) {
    super();
    this.options = options;
    this.gameState = gameState;
  }
  get template() {
    return `
    <header class="header">
      ${timer(30).template}
      ${lives(this.gameState.lives).template}
    </header>
    <section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      ${this.options.map((option, optionIndex) => (
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
    ${statsIcons(this.gameState.answers).template}
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
        this.onContinue(answers);
      }
    });
  }
  render() {
    const wrapper = super.render();
    const header = wrapper.querySelector(`.header`);
    header.insertBefore(headerButton(), header.children[0]);
    return wrapper;
  }

  onContinue() {
  }
}
