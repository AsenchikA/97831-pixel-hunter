import BackButton from "./back-button-screen.js";
import Stats from "../views/stats-view.js";

export default class StatsScreen {
  constructor(stats, isSuccessGame) {
    this.stats = stats;
    this.isSuccessGame = isSuccessGame;
  }
  get element() {
    const statistic = new Stats(this.stats, this.isSuccessGame);
    const header = statistic.element.querySelector(`.header`);
    header.insertBefore(new BackButton().element, header.children[0]);
    return statistic.element;
  }
}
