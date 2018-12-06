import {GameRules} from "../data/game-data.js";
import AbstractView from "./abstract-view.js";

export class StatsIcons extends AbstractView {
  constructor(estimates) {
    super();
    this.estimates = estimates;
  }
  get template() {
    return `
    <ul class="stats">
      ${this.estimates.map((estimate) => `<li class="stats__result stats__result--${estimate}"></li>`).join(``)}
      ${new Array(GameRules.MAX_LEVEL - this.estimates.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
    </ul>
  `;
  }
}
