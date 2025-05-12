"use strict";
let firstName = 'Pen4o';
let lastName = 'Ivanov';
let age = 30;
let hasGraduated = false;
let skills = ['JS', 'HTML', 'Coming soon: TS'];
let certificateInfo = [
    'MySQL',
    2025,
    true
];
let strNumArr = ['pen4o', 45];
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
function movePoint(point, moveDirection) {
    if (moveDirection === Directions.Up) {
        return { x: point.x, y: point.y + 1 };
    }
    else if (moveDirection === Directions.Down) {
        return { x: point.x, y: point.y - 1 };
    }
    else if (moveDirection === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    }
    else if (moveDirection === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    }
}
let point = { x: 0, y: 0 };
// console.log(movePoint(point, Directions.Right));
function greetUser(username, addHello) {
    console.log(addHello);
    if (addHello) {
        return `Hello, ${username}`;
    }
    else {
        return username;
    }
}
console.log(greetUser('Pen4o'));
//# sourceMappingURL=demo.js.map