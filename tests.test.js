const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const calculator = require('./class');
const capitalized = require('./capitalize');

test('4', () => {
  expect(stringLength("hola")).toBe(4);
  expect(stringLength("la casa es azul")).toBe("error")
});
test('reverse', () => {
  expect(reverseString("hola")).toBe("aloh");
  expect(reverseString("la casa es azul")).toBe("luza se asac al")
});
test('class', () => {
  expect(calculator.add(1,2)).toBe(3);
  expect(calculator.subtract(3,1)).toBe(2);
  expect(calculator.divide(4,2)).toBe(2);
  expect(calculator.multiply(3,1)).toBe(3);
});
test('4', () => {
  expect(capitalized("hola")).toBe("Hola");
});

