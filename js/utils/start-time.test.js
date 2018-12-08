import {assert} from 'chai';
import startTimer from './start-time.js';


describe(`Check time changer`, () => {

  it(`should not allow set invalid value`, () => {
    assert.throws(() => startTimer(105), /Time should not more max number/);
    assert.throws(() => startTimer(-2), /Time should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => startTimer([]), /Time should be of type number/);
    assert.throws(() => startTimer(), /Time should be of type number/);
  });
});
