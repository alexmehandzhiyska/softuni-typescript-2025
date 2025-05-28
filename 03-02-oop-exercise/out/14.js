"use strict";
// Create a class Calculator with a single method calculate:
// •	the method should take an operation parameter with possible values 'power' | 'log' | 'add' | 'subtract' | 'multiply' | 'divide'
// •	and up to 4 additional number parameters with which to perform the operation, the number of parameters is based on the operation
// o	if the operation is power or log – allow exactly 2 number parameters ✅
// o	if the operation is add, subtract, multiply or divide allow between 2 and 4 number parameters ✅
class Calculator {
    calculate(operation, a, b, c, d) {
        let validNums = [a, b, c, d].filter(el => el !== undefined);
        switch (operation) {
            case 'power':
                return a ** b;
            case 'log':
                if (a <= 0 || b <= 0) {
                    throw new Error('Invalid log values');
                }
                return Math.log(a) / Math.log(b);
            case 'add':
                return validNums.reduce((acc, val) => acc + val);
            case 'subtract':
                return validNums.reduce((acc, val) => acc - val);
            case 'multiply':
                return validNums.reduce((acc, val) => acc * val);
            case 'divide':
                return validNums.reduce((acc, val) => acc / val);
        }
    }
}
const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));
//# sourceMappingURL=14.js.map