const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should encode a string substitution-style", () => {
        const actual = substitution("doghouse", "defghijklmnopqrstuvwxyzabc", true);
        const expected = "grjkrxvh";
        expect(actual).to.equal(expected);
    });
    it("should decode a string substitution-style", () => {
        const actual = substitution("grjkrxvh", "defghijklmnopqrstuvwxyzabc", false);
        const expected = "doghouse";
        expect(actual).to.equal(expected);
    });
    it("should encode a string substitution-style, using substitution alphabet that includes special characters", () => {
        const actual = substitution("doghouse", "def@hi*klmnopqrstuvwxyzabc", true);
        const expected = "@r*krxvh";
        expect(actual).to.equal(expected);
    });
    it("should decode a string substitution-style, using substitution alphabet that includes special characters", () => {
        const actual = substitution("@r*krxvh", "def@hi*klmnopqrstuvwxyzabc", false);
        const expected = "doghouse";
        expect(actual).to.equal(expected);
    });
    it("should return false if alphabet is not exactly 26 characters long", () => {
        const actual = substitution("doghouse", "bcdefghijklmnopqrstuv", true);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if every character in alphabet is not unique", () => {
        const actual = substitution("doghouse", "defghijkklmnopqrstuvwxyzab", true);
        const expected = false;
        expect(actual).to.equal(expected);
    });
})
