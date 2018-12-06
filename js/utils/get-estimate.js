import {TimeToAnswer} from '../data/game-data.js';
const getAnswerEstimate = (answer, rightAnswer, time) => {
  let estimate = `wrong`;
  if (rightAnswer === answer) {
    estimate = `correct`;
    if (time < TimeToAnswer.FAST) {
      estimate = `fast`;
    } else if (time > TimeToAnswer.CORRECT) {
      estimate = `slow`;
    }
  }
  return estimate;
};

export default getAnswerEstimate;
