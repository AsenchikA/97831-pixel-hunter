import {GameRules} from './game-constants.js';

const changeTime = (gameState, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time > GameRules.MAX_TIME) {
    throw new Error(`Time should not more max number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }
  const newGame = Object.assign({}, gameState, {
    time
  });
  return newGame;
};

export default changeTime;
