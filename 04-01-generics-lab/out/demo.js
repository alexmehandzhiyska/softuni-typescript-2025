"use strict";
// ! Generic function with 1 type parameter
function getFirstElement(arr) {
    return arr[0];
}
const firstEl = getFirstElement(['pen4o', 23]);
const firstNumEl = getFirstElement([45, 234, -19]);
console.log(firstNumEl.toFixed(2));
// ! Generic function with 2 type parameter
function makeTuple(el1, el2) {
    return [el1, el2];
}
const tuple1 = makeTuple('pen4o', 23);
console.log(tuple1);
const tuple2 = makeTuple(4, false);
console.log(tuple2);
;
const message1 = {
    sender: 'pen4o',
    recipient: 'min4o',
    data: 'Hello there'
};
const message2 = {
    sender: 'min4o',
    recipient: 'penka',
    data: { text: 'Hi whats up', timestamp: 234234554 }
};
console.log(message2.data.text);
// ! Generic type constraints
function logItemId(item) {
    console.log(item);
}
// logItemId('pen4o');
// logItemId(23);
// logItemId({ name: 'pen4o ' });
logItemId({ id: 2, name: 'min4o', age: 30 });
logItemId({ id: 3, email: 'pen4o@abv.bg' });
console.log('----------------------------');
// ! Generic class with 1 type parameter
class StorageBox {
    items = [];
    constructor(initialItems) {
        this.items = initialItems;
    }
    getAllItems() {
        return this.items;
    }
    getFirstItem() {
        return this.items[0];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    reverseItems() {
        this.items.reverse();
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
const box1 = new StorageBox(['pen4o', 'min4o']);
box1.addItem('ginka');
box1.addItem('ivan4o');
box1.removeItem('min4o');
box1.reverseItems();
console.log(box1.getAllItems());
console.log(box1.getFirstItem());
const box2 = new StorageBox([3, 4, 5]);
box2.addItem(-10);
console.log(box2.getAllItems());
class ApiResponse {
    isSuccessful;
    data;
    error;
    constructor(isSuccessful, data, error) {
        this.isSuccessful = isSuccessful;
        this.data = data;
        this.error = error;
    }
    getResult() {
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
//# sourceMappingURL=demo.js.map