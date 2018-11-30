import wrapElement from './../utils/wrap-element.js';
import statsIcon from './stats-icons.js';
import {createButtonHeader} from './header.js';
import {GameRules} from '../data/game-data.js';
import countPoints from '../utils/count-points.js';


export default (gameState) => {
  const {lives, answers} = gameState;
  const resultPoints = countPoints(answers, lives);
  const template = `
  <header class="header">
  </header>
  <section class="result">
  <h2 class="result__title">${resultPoints > 0 ? `Победа!` : `Увы и ах`}</h2>
  ${new Array(3).fill(``).map((item, index) => {
    let table = ``;
    if (resultPoints > 0) {
      table = `
      <table class="result__table">
        <tr>
          <td class="result__number">${index + 1}.</td>
          <td colspan="2">
            ${statsIcon(answers)}
          </td>
          <td class="result__points">× 100</td>
          <td class="result__total"></td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">1 <span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total"></td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${lives} <span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">${lives * GameRules.EXTRA_POINTS_NUMBER}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">2 <span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">-100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>  
      `;
    } else {
      table = `
        <table class="result__table">
          <tr>
            <td class="result__number">${index + 1}.</td>
            <td>
              ${statsIcon(answers)}
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>
      `;
    }
    return table;
  }).join(``)}
  </section>`;

  const element = wrapElement(template);

  element.querySelector(`.header`).appendChild(createButtonHeader());

  return element;
};
