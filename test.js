const assert = require('assert');

const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sumOfOther', () => {
  it('Expected [9,8,7,6]', () => {
    const initial = [1,2,3,4];
    const result = [9,8,7,6];
    assert.deepStrictEqual(sumOfOther(initial), result);
  });
});

describe('make', () => {
  const sum = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  const minus = (a, b) => a - b;
  const divide = (a, b) => a / b;

  it('Expected 10', () => {
    const result = 10;
    assert.deepStrictEqual(make(1)(2)(3,4)(sum), result);
  });

  it('Expected 24', () => {
    const result = 24;
    assert.deepStrictEqual(make(1)(2)(3,4)(multiply), result);
  });

  it('Expected 0', () => {
    const result = 0;
    assert.deepStrictEqual(make(9)(2)(3,4)(minus), result);
  });

  it('Expected 4', () => {
    const result = 4;
    assert.deepStrictEqual(make(96)(2)(3,4)(divide), result);
  });
});

describe('recursion', () => {
  it('Expected [[100], [90, 120], [70,99,110,130]]', () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    const result = [[100], [90, 120], [70,99,110,130]];
    assert.deepStrictEqual(recursion(tree), result);
  });
});