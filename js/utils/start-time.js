import {GameRules} from './game-constants.js';

const startTimer = (time, tickCallback = () => { }, stopCallback = () => { }) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time > GameRules.MAX_TIME) {
    throw new Error(`Time should not more max number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  let gameTime = time;
  const timer = setInterval(() => {
    if (gameTime < 0) {
      clearInterval(timer);
      stopCallback();
    } else {
      gameTime = gameTime - 1;
      tickCallback();
    }
  }, 1000);
};

export default startTimer;
