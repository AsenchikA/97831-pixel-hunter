import {Stats} from "../views/stats-view";
import {StatsIcons} from "../views/stats-icons-view";

const stats = (gameState, resultPoints) => new Stats(gameState, resultPoints);
const statsIcons = (answers) => new StatsIcons(answers);

export {stats, statsIcons};
