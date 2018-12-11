const preprocessAnswers = (answers, type) => {
  const imagesTypes = answers.map((answer) => answer.type);
  const options = answers.map((answer) => answer.image);

  if (type === `one-of-three`) {
    if (imagesTypes[0] === imagesTypes[1]) {
      return {
        rightAnswer: `Option 3`,
        options
      };
    } else {
      return {
        rightAnswer: imagesTypes[0] === imagesTypes[2] ? `Option 2` : `Option 1`,
        options
      };
    }
  } else {
    return {
      rightAnswer: imagesTypes.join(`, `),
      options
    };
  }
};

export const adaptServerData = (data) => {
  for (const level of Object.values(data)) {
    const {rightAnswer, options} = preprocessAnswers(level.answers, level.type);
    level.rightAnswer = rightAnswer;
    level.options = options;
    delete level.answers;
  }
  return data;
};
