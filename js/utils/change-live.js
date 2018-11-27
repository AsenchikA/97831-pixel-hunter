const changeNumberLives = (gameState, answer) => {
  if (typeof answer !== `string`) {
    throw new Error(`Answer should be of type string`);
  }
  if (gameState.lives <= 0) {
    throw new Error(`Number of lives should not zero or less than zero`);
  }

  const newGame = Object.assign({}, gameState);

  if (answer === `wrong`) {
    newGame.lives = newGame.lives - 1;
  }
  return newGame;
};

export default changeNumberLives;
