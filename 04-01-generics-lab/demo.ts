// ! Generic function with 1 type parameter

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const firstEl = getFirstElement(['pen4o', 23]);

const firstNumEl = getFirstElement([45, 234, -19]);
console.log(firstNumEl.toFixed(2));

// ! Generic function with 2 type parameter

function makeTuple<T, U>(el1: T, el2: U): [T, U] {
    return [el1, el2];
}

const tuple1 = makeTuple<string, number>('pen4o', 23);
console.log(tuple1);

const tuple2 = makeTuple<number, boolean>(4, false);
console.log(tuple2);



// ! Generic Interfaces

interface Message<T> {
    sender: string;
    recipient: string;
    data: T
};

const message1: Message<string> = {
    sender: 'pen4o',
    recipient: 'min4o',
    data: 'Hello there'
};

const message2: Message<{ text: string, timestamp: number }> = {
    sender: 'min4o',
    recipient: 'penka',
    data: { text: 'Hi whats up', timestamp: 234234554 }
};

console.log(message2.data.text);



// ! Generic type constraints

function logItemId<T extends { id: number }>(item: T): void {
    console.log(item);
}

// logItemId('pen4o');
// logItemId(23);
// logItemId({ name: 'pen4o ' });
logItemId({ id: 2, name: 'min4o', age: 30 });
logItemId({ id: 3, email: 'pen4o@abv.bg' });


console.log('----------------------------');


// ! Generic class with 1 type parameter

class StorageBox<T> {
    items: T[] = [];

    constructor(initialItems: T[]) {
        this.items = initialItems;
    }

    getAllItems(): T[] {
        return this.items;
    }

    getFirstItem(): T {
        return this.items[0];
    }

    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    reverseItems(): void {
        this.items.reverse();
    }

    removeItem(item: T): void {
        const index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

const box1 = new StorageBox<string>(['pen4o', 'min4o']);
box1.addItem('ginka');
box1.addItem('ivan4o');
box1.removeItem('min4o');
box1.reverseItems();
console.log(box1.getAllItems());
console.log(box1.getFirstItem());

const box2 = new StorageBox<number>([3, 4, 5]);
box2.addItem(-10);
console.log(box2.getAllItems());


// ! Generic class with 2 type parameters

class ApiResponse<T, U> {
    isSuccessful: boolean;
    data: T | null;
    error: U | null;

    constructor(isSuccessful: boolean, data: T | null, error: U | null) {
        this.isSuccessful = isSuccessful;
        this.data = data;
        this.error = error;
    }

    getResult(): T {
        if (!this.isSuccessful || this.data === null) {
            throw new Error(String(this.error));
        }

        return this.data;
    }
}

const userResponse1 = new ApiResponse(true, 'pen4o', null);
const userResponse2 = new ApiResponse(true, ['pen4o', 'min4o', 'go6o'], null);
const userResponse3 = new ApiResponse(false, null, 'Unknown error');

console.log(userResponse2.getResult());
console.log(userResponse3.getResult());


// ! Mapped types using generics

type User = {
    id: number;
    username: string;
    email: string;
};

type Point = {
    x: number;
    y: number;
};

type MakeOptionalProprties<T> = {
    [K in keyof T]?: T[K]
};

type PartialUser = MakeOptionalProprties<User>;
type PartialPoint = MakeOptionalProprties<Point>;



// ! Mapped + conditional types

type Employee = {
    name: string;
    age: number;
    salary: number;
};

type Product = {
    title: string;
    price: number;
    inStock: boolean;
    rating: number;
};

type GetNumericKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

// name: never
// age: 'age'
// salary: 'salary'

type EmployeeNumericKeys = GetNumericKeys<Employee>;
type ProductNumericKeys = GetNumericKeys<Product>;
