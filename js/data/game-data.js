const GameRules = {
  RIGHT_ANSWER_POINTS_NUMBER: 100,
  EXTRA_POINTS_NUMBER: 50,
  REQUIRED_ANSWERS_NUMBER: 10,
  MAX_LEVEL: 10,
  MAX_TIME: 30
};


const TimeToAnswer = {
  FAST: 10,
  CORRECT: 20,
  SLOW: 30
};

const INITIAL_GAME_STATE = {
  level: 1,
  lives: 3,
  time: 30,
  estimates: []
};

export {GameRules, INITIAL_GAME_STATE, TimeToAnswer};
