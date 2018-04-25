const chai = require("chai");
const expect = chai.expect;
const toRoman = require("../toRoman");

describe("Roman to Arabic conversion", () => {
    it("should return 'I' for 1", () => {
        const request = 1;
        const expected = "I";
        expect(toRoman(request)).equals(expected);
    });

    it("should return 'IV' for 4", () => {
        const request = 4;
        const expected = "IV";
        expect(toRoman(request)).equals(expected);
    });

    it("should return 'V' for 5", () => {
        const request = 5;
        const expected = "V";
        expect(toRoman(request)).equals(expected);
    });

    it("should return 'CDXXI' for 421", () => {
        const request = 421;
        const expected = "CDXXI";
        expect(toRoman(request)).equals(expected);
    });

    it("should return 'MMMCMXCIX' for 3999", () => {
        const request = 3999;
        const expected = "MMMCMXCIX";
        expect(toRoman(request)).equals(expected);
    });
});
