const calculator = require('./src/dueDateCalculator');
const dateLib = require('./src/helpers');

const issueStartDate = '2018-10-04T12:00:00.000Z';
const allocatedTime = 4;

const dueDate = calculator(issueStartDate, allocatedTime);

const issueDateObj = new Date(issueStartDate);
const formattedDate = dateLib.timestampToDate(issueDateObj.getTime());

console.log(`The issue created at ${formattedDate} and with ${allocatedTime} allocated hours should be done until ${dueDate}`);
