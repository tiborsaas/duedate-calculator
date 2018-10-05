const dateLib = require('./helpers');

/**
 * Epam homework assignment
 */
function dueDateCalculator(dateCreated, turnaroundTime) {
    // solution plan:

    // the program needs to decrease turnaroundTime to zero:
    //
    // start counting from the dateCreated
    //  - if we are between busicness hours
    //  - if we are on workdays
    //      - decrease turnaround time
    //  - otherwise keep iterating in time
    const timeline = new Date(dateCreated);

    let remainingTime = turnaroundTime * 60;

    while (remainingTime > 0) {
        if (timeline.getUTCHours() >= 9 && timeline.getUTCHours() < 17 && timeline.getDay() !== 0 && timeline.getDay() !== 6 ) {
            remainingTime--;
        }
        timeline.setTime(timeline.getTime() + 1000 * 60);
    }
    return dateLib.timestampToDate(timeline.getTime());
}

module.exports = dueDateCalculator;
