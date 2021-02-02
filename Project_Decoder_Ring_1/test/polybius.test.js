const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should encode string polybius-style, and return appropriate string of numbers", () => {
        const actual = polybius("butter", true);
        const expected = "124544441542";
        expect(actual).to.equal(expected);
    });
    it("should decode a string of numbers polybius-style, and return appropriate string of characters", () => {
        const actual = polybius("124544441542", false);
        const expected = "butter";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces throughout encoding", () => {
        const actual = polybius("butter pan", true);
        const expected = "124544441542 351133";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces throughout decoding", () => {
        const actual = polybius("12 4544441542", false);
        const expected = "b utter";
        expect(actual).to.equal(expected);
    });
    it("should return false if string to decode doesn't have even number of characters (excluding spaces)", () => {
        const actual = polybius("12454444421", false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return value of '(j/i)' for either i or j when decoding a string", () => {
        const actual = polybius("241132352415", false);
        const expected = "(j/i)amp(j/i)e";
        expect(actual).to.equal(expected);
    });
})
