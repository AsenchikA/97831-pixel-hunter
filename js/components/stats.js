import {Stats} from "../views/stats-view";

export default (gameState, resultPoints) => {
  const stats = new Stats(gameState, resultPoints);
  return stats;
};
