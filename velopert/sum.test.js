const { sum, sumOf } = require('./sum.js');

describe('sum', () => {
  it('calculate 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('calculate all numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
