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

const LevelScreens = {
  TWO_OF_TWO: `firstGameBlock`,
  ONE_QUESTION: `secondGameBlock`,
  ONE_FROM_THREE: `thirdGameBlock`
};

const Images = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

const LevelData = [
  {
    type: `gameScreen1`,
    options: [Images.paintings[0], Images.photos[0]],
    answer: [`photo`, `paint`]
  },
  {
    type: `gameScreen2`,
    options: Images.paintings[1],
    answer: `photo`
  },
  {
    type: `gameScreen3`,
    options: [Images.paintings[2], Images.photos[2], Images.paintings[0]],
    answer: `Option 1`
  },
  {
    type: `gameScreen1`,
    options: [Images.paintings[1], Images.photos[1]],
    answer: [`photo`, `paint`]
  },
  {
    type: `gameScreen2`,
    options: Images.photos[1],
    answer: `photo`
  },
  {
    type: `gameScreen3`,
    options: [Images.paintings[1], Images.photos[1], Images.photos[0]],
    answer: `Option 1`
  },
  {
    type: `gameScreen1`,
    options: [Images.paintings[2], Images.photos[2]],
    answer: [`photo`, `paint`]
  },
  {
    type: `gameScreen2`,
    options: Images.paintings[0],
    answer: `photo`
  },
  {
    type: `gameScreen3`,
    options: [Images.paintings[1], Images.photos[1], Images.photos[1]],
    answer: `Option 1`
  },
  {
    type: `gameScreen1`,
    options: [Images.paintings[2], Images.photos[2]],
    answer: [`photo`, `paint`]
  }
];

const INITIAL_GAME_STATE = {
  level: 1,
  lives: 3,
  time: 0,
  answers: []
};

const gameState = Object.assign({}, INITIAL_GAME_STATE);


export {GameRules, INITIAL_GAME_STATE, gameState, LevelData, LevelScreens, TimeToAnswer};
