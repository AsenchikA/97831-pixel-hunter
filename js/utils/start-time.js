import {GameRules} from './game-constants.js';

const startTimer = (delay, tickCallback = () => { }) => {
  if (typeof delay !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (delay > GameRules.MAX_TIME) {
    throw new Error(`Time should not more max number`);
  }
  if (delay < 0) {
    throw new Error(`Time should not be negative value`);
  }

  let time = delay;

  return {
    tick() {
      time = time - 1;
      tickCallback();
    },
    get time() {
      return time;
    }
  };
};

export default startTimer;
