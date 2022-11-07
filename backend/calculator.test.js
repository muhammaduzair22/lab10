const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const sum = require('./task2');


test("test case1 testing sum method", () => {
    expect(add(12, 4)).toBe(16);
})

test("test case1 testing sum method", () => {
    expect(subtract(12, 4)).toBe(8);
})

test("test case1 testing sum method", () => {
    expect(multiply(2, 4)).toBe(8);
})

test("test case1 testing sum method", () => {
    expect(divide(12, 4)).toBe(3);
})

test("test case1 testing sum method", () => {
    expect(sum(3, 5, 10)).toBe(23);
})