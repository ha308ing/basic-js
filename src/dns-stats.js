const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const o = {};

    for (let d of domains) {
        const a = d.split(".");
        const r = a.reverse();
        let domainString = "";
        for (let s1 of r) {
            domainString += "." + s1;
            o[domainString] = o[domainString] ? o[domainString] + 1 : 1;
        }
    }
    return o;
}

module.exports = {
    getDNSStats,
};
