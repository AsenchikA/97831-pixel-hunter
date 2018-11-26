const GameRules = {
  TIME_QUICK_ANSWER: 10,
  TIME_SLOW_ANSWER: 20,
  RIGHT_ANSWER_POINTS_NUMBER: 100,
  EXTRA_POINTS_NUMBER: 50,
  REQUIRED_ANSWERS_NUMBER: 10,
  MAX_LEVEL: 10,
  MAX_TIME: 30
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

const levels = [
  {
    template: `firstGameBlock`,
    options: new Set([Images.paintings[0], Images.photos[0]])
  },
  {
    template: `secondGameBlock`,
    options: new Set([Images.paintings[1]])
  },
  {
    template: `thirdGameBlock`,
    options: new Set([Images.paintings[2], Images.photos[2]])
  },
  {
    template: `firstGameBlock`,
    options: new Set([Images.paintings[1], Images.photos[1]])
  },
  {
    template: `secondGameBlock`,
    options: new Set([Images.photos[1]])
  },
  {
    template: `thirdGameBlock`,
    options: new Set([Images.paintings[1], Images.photos[1]])
  },
  {
    template: `firstGameBlock`,
    options: new Set([Images.paintings[2], Images.photos[2]])
  },
  {
    template: `secondGameBlock`,
    options: new Set([Images.paintings[0]])
  },
  {
    template: `thirdGameBlock`,
    options: new Set([Images.paintings[1], Images.photos[1]])
  },
  {
    template: `firstGameBlock`,
    options: new Set([Images.paintings[2], Images.photos[2]])
  },
];

const INITIAL_GAME_STATE = {
  level: 1,
  lives: 3,
  time: 0,
  answers: []
};

const gameState = Object.assign({}, INITIAL_GAME_STATE);

const rightAnswers = [
  [`photo`, `paint`],
  `photo`,
  `img1`,
  [`photo`, `paint`],
  `photo`,
  `img1`,
  [`photo`, `paint`],
  `photo`,
  `img1`,
  [`photo`, `paint`],
];


export {GameRules, INITIAL_GAME_STATE, gameState, levels, rightAnswers};
