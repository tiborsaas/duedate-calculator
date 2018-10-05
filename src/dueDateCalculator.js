const dateLib = require('./helpers');

/**
 * Epam homework assignment
 */
function dueDateCalculator(dateCreated, turnaroundTime) {
    if (turnaroundTime <= 0) {
        throw new TypeError('The turnaround time should be larger than zero');
    }
    const timeline = new Date(dateCreated);
    if (timeline === 'Invalid date') {
        throw new TypeError('Issue creation date is invalid: ' + dateCreated);
    }

    let remainingTime = turnaroundTime * 60;

    while (remainingTime > 0) {
        if (timeline.getUTCHours() >= 9 && timeline.getUTCHours() < 17 && timeline.getDay() !== 0 && timeline.getDay() !== 6) {
            remainingTime--;
        }
        timeline.setTime(timeline.getTime() + 1000 * 60);
    }
    return dateLib.timestampToDate(timeline.getTime());
}

module.exports = dueDateCalculator;
