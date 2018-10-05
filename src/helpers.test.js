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

test('Elapsed hours in day', () => {
    expect(helpers.getElapsedWorkHourInDay(1514804400000)).toBe(3);
    expect(helpers.getElapsedWorkHourInDay(1539500400000)).toBe(0);
});

test('Work hours elapsed in week', () => {
    expect(helpers.workHoursElapsedInWeek(1539068400000)).toBe(8);
    expect(helpers.workHoursElapsedInWeek(1539082800000)).toBe(12);
});
