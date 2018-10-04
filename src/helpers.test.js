/**
 * Helpers for duedate calculator
 */

const helpers = require('./helpers');
const MILLISECONDS_IN_DAY = 60*60*24*1000

test('Zero padding', () => {
    expect(helpers.zeroPad(1)).toBe('01');
});

test('Date to timestamp', () => {
    expect(helpers.dateToTimestamp('2018-01-01 12:00')).toBe(1514804400000);
    expect(helpers.dateToTimestamp('garbage')).toBeFalsy();
});

test('Timestamp to date', () => {
    expect(helpers.timestampToDate(1514804400000)).toBe('2018-01-01 12:00');
    expect(helpers.timestampToDate(-1248710)).toBeFalsy();
    expect(helpers.timestampToDate('garbage')).toBeFalsy();
});

test('Calculate duration day units', () => {
    expect(helpers.expandWorkHoursToNormalTime(8)).toBe(MILLISECONDS_IN_DAY);
    expect(helpers.expandWorkHoursToNormalTime(4)).toBe(MILLISECONDS_IN_DAY/2);
    expect(helpers.expandWorkHoursToNormalTime(16)).toBe(MILLISECONDS_IN_DAY*2);
});

