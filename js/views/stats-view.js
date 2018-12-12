import AbstractView from './abstract-view.js';
import StatsIcons from './stats-icons-view.js';

export default class Stats extends AbstractView {
  constructor(data, isSuccessGame) {
    super();
    this.data = data;
    this.isSuccessGame = isSuccessGame;
  }
  get template() {
    const successTable = (gameItem, index) => {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">${index + 1}.</td>
          <td colspan="2">
            ${new StatsIcons(gameItem.estimates).template}
          </td>
          <td class="result__points">× 100</td>
          <td class="result__total"></td>
        </tr>
        ${gameItem.fastAnswers.count ?
    `<tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${gameItem.fastAnswers.count} <span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${gameItem.fastAnswers.point}</td>
    </tr>`
    :
    ``}
        ${gameItem.lives.count ?
    `<tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${gameItem.lives.count} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${gameItem.lives.point}</td>
      </tr>`
    :
    ``}
          ${gameItem.slowAnswers.count ?
    `<tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${gameItem.slowAnswers.count} <span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">-${gameItem.slowAnswers.point}</td>
    </tr>`
    :
    ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${gameItem.total}</td>
        </tr>
      </table>  
      `;
    };
    const failTable = (gameItem, index) => {
      return `
        <table class="result__table">
          <tr>
            <td class="result__number">${index + 1}.</td>
            <td>
              ${new StatsIcons(gameItem.estimates).template}
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
    <h2 class="result__title">${this.isSuccessGame ? `Победа!` : `Увы и ах`}</h2>
    ${this.data.map((gameItem, index) => (gameItem.total !== -1 ? successTable(gameItem, index) : failTable(gameItem, index))).join(``)}
    </section>`;
  }
}

