 /**
 * Helpers for duedate calculator
 */

const dueDateCalculator = require('./dueDateCalculator');

console.log("CALC", dueDateCalculator)

test('Main calculator: trash inputs', () => {
    expect(dueDateCalculator('2018-10-04 12:00', 0)).toThrow('The turnaround time should be larger than zero');
    expect(dueDateCalculator('bamboozle', 0)).toThrow('Issue creation date is invalid: bamboozle');
});

test('Main calculator: same week', () => {
    expect(dueDateCalculator('2018-10-04 12:00', 8)).toBe('2018-10-05 12:00');
    expect(dueDateCalculator('2018-10-04 12:00', 6)).toBe('2018-10-05 10:00');
});

test('Main calculator: same day', () => {
    expect(dueDateCalculator('2018-10-04 12:00', 1)).toBe('2018-10-04 13:00');
});

test('Main calculator: week overlap', () => {
    expect(dueDateCalculator('2018-10-04 12:00', 16)).toBe('2018-10-08 12:00');
    expect(dueDateCalculator('2018-10-04 12:00', 40)).toBe('2018-10-11 12:00');
    expect(dueDateCalculator('2018-10-04 12:00', 80)).toBe('2018-10-18 12:00');
    expect(dueDateCalculator('2018-10-04 12:00', 79)).toBe('2018-10-18 11:00');
});