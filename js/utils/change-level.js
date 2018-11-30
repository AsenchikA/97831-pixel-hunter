import {GameRules} from '../data/game-data.js';

const changeLevel = (gameState, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level > GameRules.MAX_LEVEL) {
    throw new Error(`Level should not more max number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  const newGame = Object.assign({}, gameState, {
    level
  });
  return newGame;
};

export default changeLevel;
