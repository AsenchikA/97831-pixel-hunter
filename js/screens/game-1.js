import wrapElement from './../utils/wrap-element.js';
import {renderBackButtonTemplate, timerTemplate, livesTemplate} from './header.js';
import statsIcons from '../data/stats-icons.js';
import {levels, gameState} from '../data/game-data.js';
import changeLevel from '../utils/change-level.js';
import updateGame from '../utils/update-game.js';

const template = `<header class="header">
${renderBackButtonTemplate()}
${timerTemplate(30)}
${livesTemplate(gameState.lives)}
</header>
<section class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  ${[...levels[gameState.level - 1].options].map((option, optionIndex) => (
    `<div class="game__option">
    <img src=${option} alt=\`Option ${optionIndex + 1}\` width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name=\`question${optionIndex + 1}\` type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name=\`question${optionIndex + 1}\` type="radio" value="paint">
      <span>Рисунок</span>
    </label>
    </div>`
  ))}
</form>
${statsIcons}
</section>`;

const element = wrapElement(template);

const gameOptions = Array.from(element.querySelectorAll(`.game__option`));

const gameForm = element.querySelector(`form`);

gameForm.addEventListener(`change`, () => {
  let answers = [];
  gameOptions.forEach((option) => {
    // answers = answers.push(option.querySelectorAll(`input`).find((input) => input.checked));
    let answerItem = Array.from(option.querySelectorAll(`input`)).find((input) => input.checked);
    if (answerItem) {
      answers.push(answerItem);
    }
  });
  if (answers && answers.length === 2) {
    gameState.level = changeLevel(gameState, gameState.level + 1).level;
    // renderScreen(secondGameBlock);
    updateGame(answers, gameState.level, gameState.time);
  }
});

export default element;
