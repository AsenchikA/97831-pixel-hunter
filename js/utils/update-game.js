import {rightAnswers, gameState, levels} from '../data/game-data.js';
import changeNumberLives from './change-live.js';
import {renderScreen} from './render.js';
import changeLevel from './change-level.js';
import firstGameBlock from './../screens/game-1.js';
import secondGameBlock from './../screens/game-2.js';
import thirdGameBlock from './../screens/game-3.js';

const GameTypes = {
  // firstGameBlock,
  secondGameBlock: () => secondGameBlock(levels[gameState.level - 1].options),
  thirdGameBlock: () => thirdGameBlock(levels[gameState.level - 1].options)
};

const TIME_TO_ANSWER = {
  fast: 10,
  correct: 20,
  slow: 30
};

const answerEstimate = (answer, level, time) => {
  let estimate = `wrong`;
  if (rightAnswers[level - 1] === answer) {
    answerEstimate = `correct`;
    if (time < TIME_TO_ANSWER.fast) {
      answerEstimate = `fast`;
    } else if (TIME_TO_ANSWER > TIME_TO_ANSWER.correct) {
      answerEstimate = `slow`;
    }
  }
  return estimate;
};

const updateGame = (answer, level, time) => {
  const estimate = answerEstimate(answer, level, time);
  gameState.answers.push(estimate);
  gameState.lives = changeNumberLives(gameState, estimate).lives;
  gameState.level = changeLevel(gameState, gameState.level + 1).level;
  renderScreen(GameTypes[levels[gameState.level - 1].template]);
};

export default updateGame;
