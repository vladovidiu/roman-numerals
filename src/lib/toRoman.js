const {numbers, romanLiterals} = require("./common");

/**
 * Generate the roman literal from a given number
 *
 * @param {Number} numericValue
 * @return {String}
 */

const toRoman = numericValue => {
    let result = "";
    let numberToConvert = numericValue;

    numbers.map((number, index) => {
        while (numberToConvert >= number) {
            result += romanLiterals[index];
            numberToConvert -= number;
        }
    });

    return result;
};

module.exports = toRoman;
