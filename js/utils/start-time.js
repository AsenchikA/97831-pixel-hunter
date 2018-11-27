import {GameRules} from '../data/game-data.js';

const startTimer = (delay, tickCallback = () => { }, timerEndCallback = () => { }) => {
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
      if (time > 0) {
        time = time - 1;
        if (time === 0) {
          timerEndCallback();
        } else {
          tickCallback();
        }
      }
    },
    get time() {
      return time;
    }
  };
};

export default startTimer;
