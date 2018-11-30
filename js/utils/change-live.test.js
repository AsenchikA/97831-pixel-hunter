import {assert} from 'chai';
import changeNumberLives from './change-live.js';
import {INITIAL_GAME_STATE} from '../data/game-data.js';


describe(`Check lives changer`, () => {
  it(`should change number of lives`, () => {
    assert.equal(changeNumberLives(INITIAL_GAME_STATE, `wrong`).lives, 2);
    assert.equal(changeNumberLives(INITIAL_GAME_STATE, `fast`).lives, 3);
    assert.equal(changeNumberLives(INITIAL_GAME_STATE, `slow`).lives, 3);
    assert.equal(changeNumberLives(INITIAL_GAME_STATE, `correct`).lives, 3);
  });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => changeNumberLives({
      level: 0,
      lives: 0,
      time: 0
    }, `fast`).lives, /Number of lives should not zero or less than zero/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => changeNumberLives(INITIAL_GAME_STATE, []).lives, /Answer should be of type string/);
  });
});
