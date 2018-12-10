import AbstractView from './abstract-view.js';
import {backButton} from '../controllers/header-screen.js';
import StatsIcons from './stats-icons-view.js';

export default class Stats extends AbstractView {
  constructor(stats) {
    super();
    this.stats = stats;
  }
  get template() {
    const successTable = (index) => {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">${index + 1}.</td>
          <td colspan="2">
            ${new StatsIcons(this.stats.estimates).template}
          </td>
          <td class="result__points">× 100</td>
          <td class="result__total"></td>
        </tr>
        ${this.stats.fastAnswers.count &&
        `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this.stats.fastAnswers.count} <span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">${this.stats.fastAnswers.point}</td>
        </tr>`}
        ${this.stats.lives.count &&
          `<tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this.stats.lives.count} <span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">× 50</td>
            <td class="result__total">${this.stats.lives.point}</td>
          </tr>`}
          ${this.stats.slowAnswers.count &&
          `<tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this.stats.slowAnswers.count} <span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">× 50</td>
            <td class="result__total">-${this.stats.slowAnswers.point}</td>
          </tr>`}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.stats.total}</td>
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
              ${new StatsIcons(this.stats.estimates).template}
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
    <h2 class="result__title">${this.stats.total !== -1 ? `Победа!` : `Увы и ах`}</h2>
    ${new Array(3)
        .fill(``)
        .map((item, index) => (this.stats.total !== -1 ? successTable(index) : failTable(index)))
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

