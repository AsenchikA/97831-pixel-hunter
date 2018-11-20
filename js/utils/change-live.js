import {GameRules} from './game-constants.js';

const changeNumberLives = (gameState, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Number of lives should be of type number`);
  }
  if (lives > GameRules.MAX_LIVES_NUMBER) {
    throw new Error(`Number of lives should not more max number`);
  }
  if (lives < 0) {
    throw new Error(`Number of lives should not be negative value`);
  }
  const newGame = Object.assign({}, gameState, {
    lives
  });
  return newGame;
};

export default changeNumberLives;
