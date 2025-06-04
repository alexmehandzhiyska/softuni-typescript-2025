function LogClass(constructor: Function) {
    console.log('-------------------');
    console.log(`Class ${constructor.name} created!`);
    console.log('-------------------');
}

function LogAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.log('-------------------');
    console.log(`Accessors for property ${propertyName} created!`);
    console.log('-------------------');
}

function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log('-------------------');
    console.log(`Method ${methodName} created!`);
    console.log('-------------------');
}

function LogProperty(target: any, propertyName: string) {
    console.log('-------------------');
    console.log(`Property ${propertyName} created!`);
    console.log('-------------------');
}

function LogParameter(target: any, methodName: string, parameterIndex: number) {
    console.log('-------------------');
    console.log(`Parameter #${parameterIndex} for method ${methodName} created!`);
    console.log('-------------------');
}

@LogClass
class User {
    @LogProperty
    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @LogAccessor
    get email() {
        return this._email;
    }

    set email(val: string) {
        this._email = val;
    }

    @LogMethod
    getInfo(@LogParameter condensed: boolean): string {
        return condensed ? `Person ${this.name}` : `Person ${this.name} is ${this.age} years old with email ${this.email}`;
    }
}

const user1 = new User('pen4o', 12, 'pen4o@abv.bg');
const user2 = new User('min4o', 34, 'min4o@abv.bg');