import {backButton} from "./header-screen.js";
import Stats from "../views/stats-view.js";

export default class StatsScreen {
  constructor(stats) {
    this.stats = stats;
  }
  get element() {
    const statistic = new Stats(this.stats);
    const header = statistic.element.querySelector(`.header`);
    header.insertBefore(backButton(), header.children[0]);
    return statistic.element;
  }
}
