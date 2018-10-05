/**
 * Helpers for duedate calculator
 */

const helpers = require('./helpers');
const MILLISECONDS_IN_DAY = 60*60*24*1000

test('Zero padding', () => {
    expect(helpers.zeroPad(1)).toBe('01');
});

test('Timestamp to date', () => {
    expect(helpers.timestampToDate(1538745716380)).toBe('2018-10-05 13:21');
    expect(helpers.timestampToDate(-1248710)).toBeFalsy();
    expect(helpers.timestampToDate('garbage')).toBeFalsy();
});
