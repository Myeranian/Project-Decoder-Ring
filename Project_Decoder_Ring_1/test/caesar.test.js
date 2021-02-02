const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return an encoded string with the characters appropriately shifted, and wraparound alphabet if needed", () => {
        const actual = caesar("wxyz", 3, true);
        const expected = "zabc";
        expect(actual).to.equal(expected);
    });
    it("should return a decoded string with the characters appropriately shifted, and wraparound alphabet if needed", () => {
        const actual = caesar("zabc", 3, false);
        const expected = "wxyz";
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is 0", () => {
        const actual = caesar("wxyz", 0, true);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is less than -25", () => {
        const actual = caesar("wxyz", -35, true);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is more than 25", () => {
        const actual = caesar("wxyz", 35, true);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if no shift is provided", () => {
        const actual = caesar("wxyz", undefined, true);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and special characters throughout", () => {
        const actual = caesar("wx yz@", 3, true);
        const expected = "za bc@";
        expect(actual).to.equal(expected);
    });

});