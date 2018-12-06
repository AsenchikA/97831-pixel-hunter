import {GameRules} from '../data/game-data.js';

const countPoints = (estimates, lives) => {
  let stats = {};
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (!(estimates instanceof Array)) {
    throw new Error(`Answers should be of type array`);
  }
  if (estimates.length !== GameRules.REQUIRED_ANSWERS_NUMBER) {
    stats = {
      estimates,
      total: -1
    };
    return stats;
  }

  if (lives > 0) {
    let correctAnswersCount = 0;
    let fastAnswersCount = 0;
    let slowAnswersCount = 0;
    estimates.forEach((answer) => {
      switch (answer) {
        case `correct`:
          correctAnswersCount++;
          break;
        case `fast`:
          fastAnswersCount++;
          break;
        case `slow`:
          slowAnswersCount++;
          break;
        default:
          break;
      }
    });
    const livesPoint = lives * GameRules.EXTRA_POINTS_NUMBER;
    const fastAnswersPoint = fastAnswersCount * GameRules.EXTRA_POINTS_NUMBER;
    const slowAnswersPoint = slowAnswersCount * GameRules.EXTRA_POINTS_NUMBER;

    const total = livesPoint + GameRules.RIGHT_ANSWER_POINTS_NUMBER * (correctAnswersCount + fastAnswersCount + slowAnswersCount) + fastAnswersPoint - slowAnswersPoint;

    stats = {
      estimates,
      lives: {
        count: lives,
        point: livesPoint
      },
      fastAnswers: {
        count: fastAnswersCount,
        point: fastAnswersPoint
      },
      slowAnswers: {
        count: slowAnswersCount,
        point: slowAnswersPoint
      },
      total
    };
  } else {
    stats = {
      estimates,
      total: -1
    };
  }

  return stats;
};

export default countPoints;
