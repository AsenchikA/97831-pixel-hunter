import AbstractView from './abstract-view.js';
import headerButton from '../components/header-button.js';

export class Rules extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <header class="header">
    </header>
    <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
    </section>`;
  }

  bind() {
    const rulesButton = this.element.querySelector(`.rules__button`);
    rulesButton.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.onContinue();
    });

    const rulesInput = this.element.querySelector(`.rules__input`);
    rulesInput.addEventListener(`keyup`, (event) => {
      if (event.target.value && rulesButton.hasAttribute(`disabled`)) {
        rulesButton.removeAttribute(`disabled`);
      }
      if (!event.target.value && !rulesButton.getAttribute(`disabled`)) {
        rulesButton.setAttribute(`disabled`, true);
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
