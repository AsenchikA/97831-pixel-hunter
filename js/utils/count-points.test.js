import {assert} from 'chai';
import countPoints from './count-points.js';

describe(`Check counting points`, () => {
  it(`should count points`, () => {
    let estimates = [
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`];
    assert.deepEqual(countPoints(estimates, 1), {
      estimates,
      lives: {
        count: 1,
        point: 50
      },
      fastAnswers: {
        count: 0,
        point: 0
      },
      slowAnswers: {
        count: 0,
        point: 0
      },
      total: 1050});
    estimates = [
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`];
    assert.deepEqual(countPoints(estimates, 2), {
      estimates,
      lives: {
        count: 2,
        point: 100
      },
      fastAnswers: {
        count: 10,
        point: 500
      },
      slowAnswers: {
        count: 0,
        point: 0
      },
      total: 1600});
    estimates = [
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`];
    assert.deepEqual(countPoints(estimates, 2), {
      estimates,
      lives: {
        count: 2,
        point: 100
      },
      fastAnswers: {
        count: 0,
        point: 0
      },
      slowAnswers: {
        count: 10,
        point: 500
      },
      total: 600});
    estimates = [
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`,
      `wrong`];
    assert.deepEqual(countPoints(estimates, 2), {
      estimates,
      lives: {
        count: 2,
        point: 100
      },
      fastAnswers: {
        count: 0,
        point: 0
      },
      slowAnswers: {
        count: 0,
        point: 0
      },
      total: 100});
  });

  it(`should not allow set invalid value`, () => {
    let estimates = [
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`];
    assert.deepEqual(countPoints(estimates, 2), {
      estimates,
      total: -1
    });
    estimates = [
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`];
    assert.deepEqual(countPoints(estimates, 0), {
      estimates,
      total: -1
    });
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
