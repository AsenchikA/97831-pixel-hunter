import {assert} from 'chai';
import countPoints from './count-points.js';

describe(`Check counting points`, () => {
  it(`should count points`, () => {
    assert.equal(countPoints([
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`],
    1), 1050);
    assert.equal(countPoints([
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`],
    2), 1600);
    assert.equal(countPoints([
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`],
    2), 600);
    assert.equal(countPoints([
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`],
    2), 100);
  });

  it(`should not allow set invalid value`, () => {
    assert.equal(countPoints([
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`],
    2), -1);
    assert.equal(countPoints([
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`],
    0), -1);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => countPoints([
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`]), /Lives should be of type number/);
    assert.throws(() => countPoints(5, 5), /Answers should be of type array/);
  });
});
