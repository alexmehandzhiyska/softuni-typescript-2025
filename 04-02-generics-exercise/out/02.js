"use strict";
class CountedSet {
    items = new Map();
    add(item) {
        const currentCount = this.items.get(item);
        if (currentCount) {
            this.items.set(item, currentCount + 1);
        }
        else {
            this.items.set(item, 1);
        }
    }
    remove(item) {
        const currentCount = this.items.get(item);
        if (currentCount) {
            this.items.set(item, currentCount - 1);
        }
    }
    contains(item) {
        const currentCount = this.items.get(item);
        return currentCount !== undefined && currentCount > 0;
    }
    getNumberOfCopies(item) {
        return this.items.get(item) ?? 0;
    }
}
let codesCounterSet = new CountedSet();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));
// codesCounterSet.add(205);   //TS Error
// codesCounterSet.getNumberOfCopies(350);    //TS Error
//# sourceMappingURL=02.js.map