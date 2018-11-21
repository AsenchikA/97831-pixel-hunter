import {GameRules} from './game-constants.js';

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
    resultPoints = resultPoints + lives * GameRules.EXTRA_POINTS_NUMBER;
    answers.forEach((answer) => {
      if (answer === `correct`) {
        resultPoints = resultPoints + GameRules.RIGHT_ANSWER_POINTS_NUMBER;
      }
      if (answer === `fast`) {
        resultPoints = resultPoints + GameRules.RIGHT_ANSWER_POINTS_NUMBER + GameRules.EXTRA_POINTS_NUMBER;
      }
      if (answer === `slow`) {
        resultPoints = resultPoints + GameRules.RIGHT_ANSWER_POINTS_NUMBER - GameRules.EXTRA_POINTS_NUMBER;
      }
    });
  } else {
    resultPoints = -1;
  }

  return resultPoints;
};

export default countPoints;
