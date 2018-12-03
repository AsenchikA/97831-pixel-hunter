import {statsIcons} from '../components/stats.js';
import {GameRules} from '../data/game-data.js';
import AbstractView from './abstract-view.js';
import {backButton} from '../components/header.js';

export class Stats extends AbstractView {
  constructor(gameState, resultPoints) {
    super();
    this.lives = gameState.lives;
    this.answers = gameState.answers;
    this.resultPoints = resultPoints;
  }
  get template() {
    const successTable = (index) => {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">${index + 1}.</td>
          <td colspan="2">
            ${statsIcons(this.answers).template}
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
          <td class="result__extra">${this.lives} <span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">${this.lives * GameRules.EXTRA_POINTS_NUMBER}</td>
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
    };
    const failTable = (index) => {
      return `
        <table class="result__table">
          <tr>
            <td class="result__number">${index + 1}.</td>
            <td>
              ${statsIcons(this.answers).template}
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>
      `;
    };
    return `
    <header class="header">
    </header>
    <section class="result">
    <h2 class="result__title">${this.resultPoints > 0 ? `Победа!` : `Увы и ах`}</h2>
    ${new Array(3)
      .fill(``)
      .map((item, index) => this.resultPoints > 0 ? successTable(index) : failTable(index))
      .join(``)}
    </section>`;
  }
  render() {
    const wrapper = super.render();
    const header = wrapper.querySelector(`.header`);
    header.insertBefore(backButton(), header.children[0]);
    return wrapper;
  }
}

