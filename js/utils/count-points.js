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
  answers.forEach((answer) => {
    if (answer.isCorrectAnswer) {
      resultPoints = resultPoints + GameRules.RIGHT_ANSWER_POINTS_NUMBER;

      if (answer.time < GameRules.TIME_QUICK_ANSWER) {
        resultPoints = resultPoints + GameRules.EXTRA_POINTS_NUMBER;
      }
      if (answer.time > GameRules.TIME_SLOW_ANSWER) {
        resultPoints = resultPoints - GameRules.EXTRA_POINTS_NUMBER;
      }

    }
  });

  if (lives) {
    resultPoints = resultPoints + lives * GameRules.EXTRA_POINTS_NUMBER;
  }

  return resultPoints;
};

export default countPoints;
