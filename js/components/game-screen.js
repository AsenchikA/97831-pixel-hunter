import {GameScreen1} from '../views/game-1-view';
import {GameScreen2} from '../views/game-2-view';
import {GameScreen3} from '../views/game-3-view';
import updateGame from '../utils/update-game.js';
import {gameState} from '../data/game-data';

const gameScreen1 = (options, state) => {
  const screen = new GameScreen1(options, state);
  screen.onContinue = (answers) => updateGame(answers, gameState.level, gameState.time);
  return screen;
};
const gameScreen2 = (options, state) => {
  const screen = new GameScreen2(options, state);
  screen.onContinue = (answers) => updateGame(answers, gameState.level, gameState.time);
  return screen;
};
const gameScreen3 = (options, state) => {
  const screen = new GameScreen3(options, state);
  screen.onContinue = (answers) => updateGame(answers, gameState.level, gameState.time);
  return screen;
};

export {gameScreen1, gameScreen2, gameScreen3};
