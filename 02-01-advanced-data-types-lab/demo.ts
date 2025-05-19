// ! Union type
function printGreeting(text: string | string[]): void {

    if (typeof text === 'string') {
        console.log(text);
    } else {
        console.log(text.join(' '));
    }
}

printGreeting('Hello, pen4o');
printGreeting(['Hello', 'its', 'me']);


//! String/numeric literal type
let passFailGrade: 'pass' | 'fail';
passFailGrade = 'pass';
console.log(passFailGrade);

let numericGrade: 2 | 3 | 4 | 5 | 6;
numericGrade = 3;
numericGrade = 6;
// numericGrade = 8;


//! Custom types + intersection
type Id = number;

type Person = {
    firstName: string;
    lastName: string;
    age: number;
}

type StudentProfile = {
    school: string;
    gpa?: number;
}

type FullStudent = Person & StudentProfile;

function printStudentInfo(student: FullStudent) {
    if (student.gpa) {
        console.log(`Student ${student.firstName} ${student.lastName}, GPA: ${student.gpa}`);
    } else {
        console.log(`Student ${student.firstName} ${student.lastName}`);
    }
}

let pen4oPerson: FullStudent = {
    firstName: 'Pen4o',
    lastName: 'Ivanov',
    age: 17,
    school: 'MGto',
    gpa: 4.00
};

let min4oPerson: Person = {
    firstName: 'Min4o',
    lastName: 'Petkov',
    age: 30
};

printStudentInfo(pen4oPerson);



//! keyof, mapping

type Point = {
    x: number;
    y: number;
}

type PartialPoint = {
    [K in keyof Point]?: Point[K];
};

let partialOriginPoint = {
    x: 5
}

let originPoint: Point = {
    x: 0,
    y: 0,
};

function changeCoordinate(point: Point, coordinateName: keyof Point, newValue: number) {
    point[coordinateName] = newValue;
}

changeCoordinate(originPoint, 'x', 5);
console.log(originPoint);



//! Recursive Types

type TreeNode = {
    value: number;
    leftChild?: TreeNode;
    rightChild?: TreeNode;
}

const leftLeaf: TreeNode = {
    value: 5
};

const rightLeaf: TreeNode = {
    value: 10
};

const root: TreeNode = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLeaf
};

console.log(root);




// ! Interfaces & classes

interface Animal {
    name: string;
    age: number;
    makeSound(soundName: string): void;
}

class Dog implements Animal {
    public name: string;
    public age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    makeSound(): void {
        console.log('bau');
    }
}

const doggie = new Dog('Pen4o', 2);
doggie.makeSound();


//! Interface Extension - analogical to type intersection

// interface Person {
//     id: number;
//     firstName: string;
//     lastName: string;
//     age?: number;
// }

// interface StudentProfile extends Person {
//     school: string;
//     gpa: number;
// }
