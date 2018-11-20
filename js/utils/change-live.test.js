import {assert} from 'chai';
import changeNumberLives from './change-live.js';
import {INITIAL_GAME_STATE} from './game-constants.js';


describe(`Check lifes changer`, () => {
  it(`should change number of lifes`, () => {
    assert.equal(changeNumberLives(INITIAL_GAME_STATE, 2).lives, 2);
    assert.equal(changeNumberLives(INITIAL_GAME_STATE, 0).lives, 0);
  });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => changeNumberLives(INITIAL_GAME_STATE, 5).lives, /Number of lives should not more max number/);
    assert.throws(() => changeNumberLives(INITIAL_GAME_STATE, -1).lives, /Number of lives should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => changeNumberLives(INITIAL_GAME_STATE, []).lives, /Number of lives should be of type number/);
    assert.throws(() => changeNumberLives(INITIAL_GAME_STATE).lives, /Number of lives should be of type number/);
  });
});
