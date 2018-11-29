import wrapElement from './../utils/wrap-element.js';
import {renderScreen} from '../utils/render.js';
import {createButtonHeader} from './header.js';
import {gameState, LevelData} from '../data/game-data.js';
import levelTypes from './../data/level-types.js';

const template = `
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

const element = wrapElement(template);

element.querySelector(`.header`).appendChild(createButtonHeader());

const rulesButton = element.querySelector(`.rules__button`);
rulesButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  const nextLevel = LevelData[gameState.level - 1];
  renderScreen((levelTypes[nextLevel.type])(nextLevel.options));
});

const rulesInput = element.querySelector(`.rules__input`);
rulesInput.addEventListener(`keyup`, (event) => {
  if (event.target.value && rulesButton.hasAttribute(`disabled`)) {
    rulesButton.removeAttribute(`disabled`);
  }
  if (!event.target.value && !rulesButton.getAttribute(`disabled`)) {
    rulesButton.setAttribute(`disabled`, true);
  }
});

export default element;
