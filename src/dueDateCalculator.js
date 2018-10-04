/**
 * Epam homework assignment
 */
function dueDateCalculator(dateCreated, turnaroundTime) {
    // solution plan:

    // convert issue creation to ts
    // get day units from diffrence of turnaroundTime
    // get due date by multiplying diff and seconds in a day
    // get number of weekends in given timeframe, add that to end date timestamp
    // convert timestamp back to datestring
}

module.exports = dueDateCalculator;
