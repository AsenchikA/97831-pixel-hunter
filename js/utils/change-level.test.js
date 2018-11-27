import {assert} from 'chai';
import changeLevel from './change-level.js';
import {INITIAL_GAME_STATE} from './game-constants.js';


describe(`Check level changer`, () => {
  it(`should change level`, () => {
    assert.equal(changeLevel(INITIAL_GAME_STATE, 2).level, 2);
    assert.equal(changeLevel(INITIAL_GAME_STATE, 0).level, 0);
  });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME_STATE, 15).level, /Level should not more max number/);
    assert.throws(() => changeLevel(INITIAL_GAME_STATE, -1).level, /Level should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME_STATE, []).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_GAME_STATE).level, /Level should be of type number/);
  });
});
