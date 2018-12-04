import {GameRules} from "../data/game-data.js";
import AbstractView from "./abstract-view.js";

export class StatsIcons extends AbstractView {
  constructor(answers) {
    super();
    this.answers = answers;
  }
  get template() {
    return `
    <ul class="stats">
      ${this.answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
      ${new Array(GameRules.MAX_LEVEL - this.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
    </ul>
  `;
  }
}
