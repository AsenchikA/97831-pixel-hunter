import {assert} from 'chai';
import changeTime from './change-time.js';
import {INITIAL_GAME_STATE} from './game-constants.js';


describe(`Check time changer`, () => {
  it(`should change time`, () => {
    assert.equal(changeTime(INITIAL_GAME_STATE, 15).time, 15);
    assert.equal(changeTime(INITIAL_GAME_STATE, 0).time, 0);
  });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => changeTime(INITIAL_GAME_STATE, 105).time, /Time should not more max number/);
    assert.throws(() => changeTime(INITIAL_GAME_STATE, -1).time, /Time should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => changeTime(INITIAL_GAME_STATE, []).time, /Time should be of type number/);
    assert.throws(() => changeTime(INITIAL_GAME_STATE).time, /Time should be of type number/);
  });
});
