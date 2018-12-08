import {GameRules} from '../data/game-data.js';

const createTimer = (delay, tickCallback = () => { }, timerEndCallback = () => { }) => {
  if (typeof delay !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (delay > GameRules.MAX_TIME) {
    throw new Error(`Time should not more max number`);
  }
  if (delay < -1) {
    throw new Error(`Time should not be negative value`);
  }

  let time = delay;

  if (time >= 0) {
    tickCallback();
  } else {
    timerEndCallback();
  }
};

export default createTimer;
