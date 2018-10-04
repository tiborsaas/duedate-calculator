/**
 * Helpers for duedate calculator
 */
function zeroPad(number) {
    const numAsString = number.toString();
    return number < 10 ? `0${numAsString}` : numAsString;
}

function dateToTimestamp(dateTime) {
    return new Date(dateTime).getTime();
}

function timestampToDate(timestamp) {
    if(timestamp < 0 || typeof timestamp !== 'number') {
        return false;
    }
    const time = new Date(timestamp);
    const year = time.getFullYear();
    const month = zeroPad(time.getMonth() + 1);
    const day = zeroPad(time.getDay());
    const hour = zeroPad(time.getHours());
    const second = zeroPad(time.getSeconds());
    return `${year}-${month}-${day} ${hour}:${second}`;
}

function getDurationInWorkDayUnits() { }

function getWeekendCount(turnaroundTime) { }

function getWeekStartTimestamp(dateCreated) { }

module.exports = {
    zeroPad,
    dateToTimestamp,
    timestampToDate,
    getDurationInWorkDayUnits,
    getWeekendCount,
    getWeekStartTimestamp
}
