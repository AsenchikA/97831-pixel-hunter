import {TimeToAnswer, GameRules} from '../data/game-data.js';
const getAnswerEstimate = (answer, rightAnswer, time) => {
  let estimate = `wrong`;
  if (rightAnswer === answer) {
    estimate = `correct`;
    if (GameRules.MAX_TIME - time < TimeToAnswer.FAST) {
      estimate = `fast`;
    } else if (GameRules.MAX_TIME - time > TimeToAnswer.CORRECT) {
      estimate = `slow`;
    }
  }
  return estimate;
};

export default getAnswerEstimate;
