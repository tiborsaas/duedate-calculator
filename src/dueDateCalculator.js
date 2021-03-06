const dateLib = require('./helpers');

const WORK_START_TIME = 9;
const WORK_END_TIME = 17;
const WEEKENDS = [0, 6];
const SECONDS_IN_HOUR = 60;
const MILLISECONDS_IN_HOUR = 60000;

/**
 * Calculate a future event date based on time allocated work time
 * @param {string} dateCreated: a parsable datestring
 * @param {number} turnaroundTime: work time dedicated to task in hours
 */
function dueDateCalculator(dateCreated, turnaroundTime) {
    if (turnaroundTime <= 0) {
        throw new TypeError('The turnaround time should be larger than zero');
    }
    const timeline = new Date(dateCreated);
    if (timeline === 'Invalid date') {
        throw new TypeError('Issue creation date is invalid: ' + dateCreated);
    }

    let remainingTime = turnaroundTime * SECONDS_IN_HOUR;

    while (remainingTime > 0) {
        const hour = timeline.getUTCHours();
        const day = timeline.getDay();

        if (hour >= WORK_START_TIME && hour < WORK_END_TIME && !WEEKENDS.includes(day)) {
            remainingTime--;
        }
        timeline.setTime(timeline.getTime() + MILLISECONDS_IN_HOUR);
    }
    return dateLib.timestampToDate(timeline.getTime());
}

module.exports = dueDateCalculator;
