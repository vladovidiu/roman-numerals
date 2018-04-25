const chai = require("chai");
const expect = chai.expect;
const toArabic = require("../toArabic");

describe("Arabic to Roman conversion", () => {
    it("should return '1' for I", () => {
        const request = "I";
        const expected = 1;
        expect(toArabic(request)).equals(expected);
    });

    it("should return '4' for IV", () => {
        const request = "IV";
        const expected = 4;
        expect(toArabic(request)).equals(expected);
    });

    it("should return '5' for V", () => {
        const request = "V";
        const expected = 5;
        expect(toArabic(request)).equals(expected);
    });

    it("should return '421' for CDXXI", () => {
        const request = "CDXXI";
        const expected = 421;
        expect(toArabic(request)).equals(expected);
    });

    it("should return '3999' for MMMCMXCIX", () => {
        const request = "MMMCMXCIX";
        const expected = 3999;
        expect(toArabic(request)).equals(expected);
    });
});
