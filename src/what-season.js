const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    try {
        if (date == undefined) return "Unable to determine the time of year!";

        if (!(date instanceof Date)) throw null;

        const formatter = new Intl.DateTimeFormat();

        const { value } = formatter
            .formatToParts(date)
            .filter(({ type }) => type === "month")[0];

        const month = parseInt(value);

        if ((month >= 0 && month <= 2) || month === 12) {
            return "winter";
        } else if (month > 2 && month <= 5) {
            return "spring";
        } else if (month > 5 && month <= 8) {
            return "summer";
        } else if (month > 8 && month <= 11) {
            return "autumn";
        }

        throw null;
    } catch {
        throw new Error("Invalid date!");
    }
}

module.exports = {
    getSeason,
};
