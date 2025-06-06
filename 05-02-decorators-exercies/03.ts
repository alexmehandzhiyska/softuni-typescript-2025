export { };

function addCreatedAt(constructor: { new(...args: any[]): User }) {
    return class extends constructor {
        createdOn = new Date();
    }
}

@addCreatedAt
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayUserInfo(): void {
        console.log(`${this.name}, Age: ${this.age}`);
    }
}

const user1 = new User("John Doe", 30);
user1.displayUserInfo()
console.log(user1);
console.log((user1 as any).createdOn);
