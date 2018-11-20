import {assert} from 'chai';
import countPoints from './count-points.js';

describe(`Check counting points`, () => {
  it(`should count points`, () => {
    assert.equal(countPoints([
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15},
      {isCorrectAnswer: true, time: 15}],
    1), 1050);
    assert.equal(countPoints([
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5},
      {isCorrectAnswer: true, time: 5}],
    2), 1600);
    assert.equal(countPoints([
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25}],
    2), 600);
    assert.equal(countPoints([
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5}],
    2), 100);
  });

  it(`should not allow set invalid value`, () => {
    assert.equal(countPoints([
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25},
      {isCorrectAnswer: true, time: 25}],
    2), -1);
  });

  it(`should not allow set not correct value`, () => {
    assert.throws(() => countPoints([
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5},
      {isCorrectAnswer: false, time: 5}]), /Lives should be of type number/);
    assert.throws(() => countPoints(5, 5), /Answers should be of type array/);
  });
});
