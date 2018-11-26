import wrapElement from './../utils/wrap-element.js';
import renderScreen from './../utils/render-screen.js';
import statsBlock from './stats.js';
import {renderBackButtonTemplate, timerTemplate, livesTemplate} from './header.js';
import statsIcons from '../data/stats-icons.js';

const template = `<header class="header">
${renderBackButtonTemplate}
${timerTemplate}
${livesTemplate}
</header>
<section class="game">
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
  </div>
</form>
${statsIcons}
</section>`;

const element = wrapElement(template);

const gameForm = element.querySelector(`form`);

gameForm.addEventListener(`click`, (event) => {
  if (event.target.parentNode.classList.contains(`game__option`)) {
    renderScreen(statsBlock);
  }
});

export default element;
