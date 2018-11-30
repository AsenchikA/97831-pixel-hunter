import {gameState, LevelData, TimeToAnswer, GameRules} from '../data/game-data.js';
import changeNumberLives from './change-live.js';
import {renderScreen} from './render.js';
import changeLevel from './change-level.js';
import stats from './../components/stats.js';
import levelTypes from './../data/level-types.js';

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
  if (gameState.lives > 0 && gameState.level <= GameRules.MAX_LEVEL) {
    const nextLevel = LevelData[gameState.level - 1];
    renderScreen(levelTypes[nextLevel.type](nextLevel.options));
  } else {
    renderScreen(stats(gameState));
  }
};

export default updateGame;
