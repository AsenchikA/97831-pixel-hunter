const preprocessAnswers = (answers, type) => {
  const options = [];
  let rightAnswer = [];
  if (type === `one-of-three`) {
    if (answers[0].type === answers[1].type) {
      rightAnswer = `Option 3`;
    } else {
      rightAnswer = answers[0].type === answers[2].type ? `Option 2` : `Option 1`;
    }
    answers.forEach((answerItem) => {
      options.push(answerItem.image);
    });
  } else {
    answers.forEach((answerItem) => {
      rightAnswer.push(answerItem.type);
      options.push(answerItem.image);
    });
    rightAnswer = rightAnswer.join(`, `);
  }
  return {rightAnswer, options};
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
