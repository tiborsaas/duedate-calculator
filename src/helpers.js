/**
 * Helpers for duedate calculator
 */
const MILLISECONDS_IN_DAY = 60 * 60 * 24 * 1000

function zeroPad(number) {
    const numAsString = number.toString();
    return number < 10 ? `0${numAsString}` : numAsString;
}

function timestampToDate(timestamp) {
    if (timestamp < 0 || typeof timestamp !== 'number') {
        return false;
    }
    const time = new Date(timestamp);
    const year = time.getFullYear();
    const month = zeroPad(time.getMonth() + 1);
    const day = zeroPad(time.getDate());
    const hour = zeroPad(time.getUTCHours());
    const minutes = zeroPad(time.getMinutes());
    return `${year}-${month}-${day} ${hour}:${minutes}`;
}

module.exports = {
    zeroPad,
    timestampToDate
}
