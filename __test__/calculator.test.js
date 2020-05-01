const { sum, sub, div, mult } = require('../calculator')

describe('CALCULATOR', () => {
  test('SUM: adds 1 + 2 to equal 3', () => {
    const num1 = 1;
    const num2 = 2;
  
    expect(sum(num1, num2)).toBe(3);
  })
  
  test('SUB: subtracts 2 - 1 to equal 1', () => {
    const num1 = 1;
    const num2 = 2;
  
    expect(sub(num1,num2)).toBe(1);
  })

  test('MULT: multiplication 2 * 2 to be 4', () => {
    const num1 = 2;
    const num2 = 2;

    expect(mult(num1, num2)).toBe(4);
  })

  test('DIV: division 2 / 2 to equal 1', () => {
    const num1 = 2;
    const num2 = 2;

    expect(div(num1, num2)).toBe(1)
  })

  test('DIV: division by 0 to equal Error message', () => {
    const num1 = 2;
    const num2 = 0;

    expect(div(num1, num2)).toBe('Cannot divide by 0');
  })
})