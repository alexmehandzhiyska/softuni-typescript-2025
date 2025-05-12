// Basic Types Example
let firstName: string = 'Pen4o';
let lastName: string = 'Ivanov';
let age: number = 30;
let hasGraduated: boolean = false;
let skills: string[] = ['JS', 'HTML', 'Coming soon: TS'];

let certificateInfo: [string, number, boolean] = [
    'MySQL',
    2025,
    true
]

let strNumArr: (string | number)[] = ['pen4o', 45];


// Enum Example
enum Directions {
    Up,
    Down,
    Left,
    Right
}

function movePoint(point: { x: number, y: number }, moveDirection: Directions) {
    if (moveDirection === Directions.Up) {
        return { x: point.x, y: point.y + 1 };
    } else if (moveDirection === Directions.Down) {
        return { x: point.x, y: point.y - 1 };
    } else if (moveDirection === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    } else if (moveDirection === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    }
}


let point = { x: 0, y: 0 };
console.log(movePoint(point, Directions.Right));


// Optional parameter & return type Example
function greetUser(username: string, addHello?: boolean): string {
    if (addHello) {
        return `Hello, ${username}`;
    } else {
        return username;
    }
}

console.log(greetUser('Pen4o'));
console.log(greetUser('Ivan4o', true));

const inputEl = document.getElementById('email') as HTMLInputElement;
console.log(inputEl!.value);


// Type Guard Example 
function isNumber(val: unknown): val is number {
    return typeof val === 'number';
}

function formatData(a: string | number, b: string | number) {
    if (isNumber(a) && isNumber(b)) {
        console.log(a + b);
    } else {
        console.log(`${a}<->${b}`);
    }
}