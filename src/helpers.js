/**
 * Helpers for duedate calculator
 */
const MILLISECONDS_IN_DAY = 60 * 60 * 24 * 1000

function zeroPad(number) {
    const numAsString = number.toString();
    return number < 10 ? `0${numAsString}` : numAsString;
}

function getWeekOfDate(timestamp) {
    const date = new Date(timestamp);
    const januaryFirst = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((((date - januaryFirst) / MILLISECONDS_IN_DAY) + januaryFirst.getDay() + 1) / 7);
}

function dateToTimestamp(dateTime) {
    return new Date(dateTime).getTime();
}

function timestampToDate(timestamp) {
    if (timestamp < 0 || typeof timestamp !== 'number') {
        return false;
    }
    const time = new Date(timestamp);
    const year = time.getFullYear();
    const month = zeroPad(time.getMonth() + 1);
    const day = zeroPad(time.getDate());
    const hour = zeroPad(time.getHours());
    const second = zeroPad(time.getSeconds());
    return `${year}-${month}-${day} ${hour}:${second}`;
}

function getElapsedWorkHourInDay(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    // 9am that day
    const startOfDay = new Date(year, month, day, 9, 0).getTime();
    return (timestamp - startOfDay) / 1000 / 60 / 60;
}

function workHoursElapsedInWeek(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const monday = day - (date.getDay() - 1);
    const startOfWeek = new Date(year, month, monday, 9, 0);
    let hourcount = 0;

    while (startOfWeek.getTime() < timestamp) {
        if (startOfWeek.getHours() >= 9 && startOfWeek.getHours() < 17) {
            hourcount++;
        }
        startOfWeek.setTime(startOfWeek.getTime() + 1000 * 60);
    }
    return hourcount / 60;
}

module.exports = {
    zeroPad,
    dateToTimestamp,
    timestampToDate,
    workHoursElapsedInWeek,
    getElapsedWorkHourInDay
}
