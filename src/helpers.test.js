/**
 * Helpers for duedate calculator
 */

const helpers = require('./helpers');

test('Date to timestamp', () => {
    expect(helpers.dateToTimestamp('2018-01-01 12:00')).toBe(1514804400000);
    expect(helpers.dateToTimestamp('garbage')).toBeFalsy();
});

test('Timestamp to date', () => {
    expect(helpers.timestampToDate(1514804400000)).toBe('2018-01-01 12:00');
    expect(helpers.timestampToDate(-1248710)).toBeFalsy();
    expect(helpers.timestampToDate('garbage')).toBeFalsy();
});
