import wrapElement from './../utils/wrap-element.js';
import renderScreen from './../utils/render-screen.js';
import secondGameBlock from './game-2.js';

const template = `<header class="header">
<button class="back">
  <span class="visually-hidden">Вернуться к началу</span>
  <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
    <use xlink:href="img/sprite.svg#arrow-left"></use>
  </svg>
  <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
    <use xlink:href="img/sprite.svg#logo-small"></use>
  </svg>
</button>
<div class="game__timer">NN</div>
<div class="game__lives">
  <img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
</div>
</header>
<section class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input class="visually-hidden" name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input class="visually-hidden" name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<ul class="stats">
  <li class="stats__result stats__result--wrong"></li>
  <li class="stats__result stats__result--slow"></li>
  <li class="stats__result stats__result--fast"></li>
  <li class="stats__result stats__result--correct"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
</ul>
</section>`;

const element = wrapElement(template);

const gameOptions = Array.from(element.querySelectorAll(`.game__option`));

const gameForm = element.querySelector(`form`);

gameForm.addEventListener(`change`, () => {
  const isTotalChecked = gameOptions.every((option) => {
    return Array.from(option.querySelectorAll(`input`)).some((input) => input.checked);
  });
  if (isTotalChecked) {
    renderScreen(secondGameBlock);
  }
});

export default element;