const {numbers, romanLiterals} = require("./common");

/**
 * Generate the roman literal from a given number
 *
 * @param {String} romanLiteral
 * @return {Number}
 */

const toArabic = romanLiteral => {
    let result = 0;
    let romanLiteralToConvert = romanLiteral;

    numbers.map((number, index) => {
        while (romanLiteralToConvert.indexOf(romanLiterals[index]) === 0) {
            result += numbers[index];
            romanLiteralToConvert = romanLiteralToConvert.replace(romanLiterals[index], "");
        }
    });

    return result;
};

module.exports = toArabic;
