const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const a = ("" + n).split("");

    return a
        .map((n, i, arr) => {
            const v = +[
                ...arr.slice(0, i),
                ...arr.slice(i + 1, arr.length),
            ].join("");
            return { n: +n, v };
        })
        .sort((a, b) => b.v - a.v)[0].v;
}

module.exports = {
    deleteDigit,
};
