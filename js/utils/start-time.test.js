import {assert} from 'chai';
import changeTime from './start-time.js';


describe(`Check time changer`, () => {
  // it(`should change time`, () => {
  //   assert.equal(changeTime(10), 0);
  //   assert.equal(changeTime(5), 0);
  // });

  it(`should not allow set invalid value`, () => {
    assert.throws(() => changeTime(105), /Time should not more max number/);
    assert.throws(() => changeTime(-1), /Time should not be negative value/);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => changeTime([]), /Time should be of type number/);
    assert.throws(() => changeTime(), /Time should be of type number/);
  });
});
