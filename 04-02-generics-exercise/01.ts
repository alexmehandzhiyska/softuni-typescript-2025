function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number): void {
    const temp = a[aIndex];

    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}

let a = [20, 30, 40];
let b = [1, 2, 3, 4, 5];
swap<number>(a, 0, b, 2);
console.log(a)
console.log(b)
