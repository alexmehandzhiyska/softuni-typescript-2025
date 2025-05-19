"use strict";
// ! Union type
function printGreeting(text) {
    if (typeof text === 'string') {
        console.log(text);
    }
    else {
        console.log(text.join(' '));
    }
}
printGreeting('Hello, pen4o');
printGreeting(['Hello', 'its', 'me']);
//! String/numeric literal type
let passFailGrade;
passFailGrade = 'pass';
console.log(passFailGrade);
let numericGrade;
numericGrade = 3;
numericGrade = 6;
function printStudentInfo(student) {
    if (student.gpa) {
        console.log(`Student ${student.firstName} ${student.lastName}, GPA: ${student.gpa}`);
    }
    else {
        console.log(`Student ${student.firstName} ${student.lastName}`);
    }
}
let pen4oPerson = {
    firstName: 'Pen4o',
    lastName: 'Ivanov',
    age: 17,
    school: 'MGto',
    gpa: 4.00
};
let min4oPerson = {
    firstName: 'Min4o',
    lastName: 'Petkov',
    age: 30
};
printStudentInfo(pen4oPerson);
let partialOriginPoint = {
    x: 5
};
let originPoint = {
    x: 0,
    y: 0,
};
function changeCoordinate(point, coordinateName, newValue) {
    point[coordinateName] = newValue;
}
changeCoordinate(originPoint, 'x', 5);
console.log(originPoint);
const leftLeaf = {
    value: 5
};
const rightLeaf = {
    value: 10
};
const root = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLeaf
};
console.log(root);
class Dog {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    makeSound(soundName) {
        console.log(soundName);
    }
}
const doggie = new Dog('Pen4o', 2);
doggie.makeSound('bau');
//# sourceMappingURL=demo.js.map