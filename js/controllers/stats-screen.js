import StatsIcons from "../views/stats-icons-view.js";
import {backButton} from "./header-screen.js";
import Stats from "../views/stats-view.js";

const statsIcons = (answers) => new StatsIcons(answers);

const statsScreen = (stats) => {
  const statistic = new Stats(stats);
  const header = statistic.element.querySelector(`.header`);
  header.insertBefore(backButton(), header.children[0]);
  return statistic;
};

export {statsIcons, statsScreen};
