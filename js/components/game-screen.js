import {GameScreen1} from '../views/game-1-view';
import {GameScreen2} from '../views/game-2-view';
import {GameScreen3} from '../views/game-3-view';
import updateGame from '../utils/update-game.js';
import {gameState} from '../data/game-data';

const gameScreen = (type, options, state) => {
  let screen = {};
  switch (type) {
    case `gameScreen1`:
      screen = new GameScreen1(options, state);
      break;
    case `gameScreen2`:
      screen = new GameScreen2(options, state);
      break;
    case `gameScreen3`:
      screen = new GameScreen3(options, state);
      break;
  }
  screen.onContinue = (answers) => updateGame(answers, gameState.level, gameState.time);
  return screen;
};

export default gameScreen;
