import wrapElement from './../utils/wrap-element.js';
import renderScreen from './../utils/render-screen.js';
import thirdGameBlock from './game-3.js';
import {renderBackButtonTemplate, timerTemplate, livesTemplate} from './header.js';
import statsIcons from '../data/stats-icons.js';
import {levels, gameState} from '../data/game-data.js';

const template = `<header class="header">
${renderBackButtonTemplate()}
${timerTemplate(30)}
${livesTemplate(gameState.lives)}
</header>
<section class="game">
<p class="game__task">Угадай, фото или рисунок?</p>
<form class="game__content  game__content--wide">
  <div class="game__option">
  ${[...levels[gameState.level - 1].options].map((option, optionIndex) => (
    `<img src=${option} alt=\`Option ${optionIndex + 1}\` width="705" height="455">`
  ))}
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
${statsIcons}
</section>`;

const element = wrapElement(template);

const gameForm = element.querySelector(`form`);

gameForm.addEventListener(`change`, () => {
  renderScreen(thirdGameBlock);
});

export default element;
