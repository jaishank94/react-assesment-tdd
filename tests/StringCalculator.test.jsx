import { add } from "../src/utils/StringCalculator";

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("handles multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
});

test("handles new line as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("throws error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
});
