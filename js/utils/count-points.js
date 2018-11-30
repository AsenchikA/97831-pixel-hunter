import {GameRules} from '../data/game-data.js';

const answerToPoints = {
  correct: GameRules.RIGHT_ANSWER_POINTS_NUMBER,
  fast: GameRules.RIGHT_ANSWER_POINTS_NUMBER + GameRules.EXTRA_POINTS_NUMBER,
  slow: GameRules.RIGHT_ANSWER_POINTS_NUMBER - GameRules.EXTRA_POINTS_NUMBER,
  wrong: 0
};

const countPoints = (answers, lives) => {
  let resultPoints = 0;
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (!(answers instanceof Array)) {
    throw new Error(`Answers should be of type array`);
  }
  if (answers.length !== GameRules.REQUIRED_ANSWERS_NUMBER) {
    return -1;
  }

  if (lives > 0) {
    resultPoints = lives * GameRules.EXTRA_POINTS_NUMBER;
    resultPoints = resultPoints + answers.reduce((total, answer) => {
      return total + answerToPoints[answer];
    }, 0);
  } else {
    resultPoints = -1;
  }

  return resultPoints;
};

export default countPoints;
