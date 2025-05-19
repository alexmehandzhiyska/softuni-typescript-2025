function checkEvenSum(num1: number, num2: number, num3: number): boolean {
    const sum = num1 + num2 + num3;
    return sum % 2 === 0;
}

console.log(checkEvenSum(1, 2, 3));
console.log(checkEvenSum(2, 2, 3));

