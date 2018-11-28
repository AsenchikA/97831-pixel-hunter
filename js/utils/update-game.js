import {gameState, LevelData, TimeToAnswer, GameRules} from '../data/game-data.js';
import changeNumberLives from './change-live.js';
import {renderScreen} from './render.js';
import changeLevel from './change-level.js';
import stats from './../screens/stats.js';

const answerEstimate = (answer, level, time) => {
  let estimate = `wrong`;
  if (LevelData[level - 1].answer === answer) {
    estimate = `correct`;
    if (time < TimeToAnswer.FAST) {
      estimate = `fast`;
    } else if (time > TimeToAnswer.CORRECT) {
      estimate = `slow`;
    }
  }
  return estimate;
};

const updateGame = (answer, level, time) => {
  const estimate = answerEstimate(answer, level, time);
  gameState.answers.push(estimate);
  gameState.lives = changeNumberLives(gameState, estimate).lives;
  gameState.level = changeLevel(gameState, gameState.level + 1).level;
  if (gameState.lives && gameState.level <= GameRules.MAX_LEVEL) {
    renderScreen(LevelData[gameState.level - 1].type());
  } else {
    renderScreen(stats(gameState));
  }
};

export default updateGame;
