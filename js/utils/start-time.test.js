import {assert} from 'chai';
import startTimer from './start-time.js';


describe(`Check time changer`, () => {

  const testTimer = startTimer(10, () => {}, () => {});

  testTimer.tick();
  testTimer.tick();

  it(`should change time`, () => {
    assert.equal(testTimer.time, 8);
  });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => startTimer(105), /Time should not more max number/);
    assert.throws(() => startTimer(-1), /Time should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => startTimer([]), /Time should be of type number/);
    assert.throws(() => startTimer(), /Time should be of type number/);
  });

  it(`should not allow work over start time`, () => {
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    testTimer.tick();
    assert.equal(testTimer.time, -1);
  });
});
