// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 6, b: 2, action: Action.Add, expected: 8 },
  { a: 6, b: 2, action: Action.Subtract, expected: 4 },
  { a: 6, b: 2, action: Action.Multiply, expected: 12 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 6, b: 2, action: Action.Exponentiate, expected: 36 },
];

describe.each(testCases)('simpleCalculator', ({ a, b, action, expected }) => {
  test('should implement test cases', () => {
    const result = simpleCalculator({ a, b, action });
    expect(result).toBe(expected);
  });
});
