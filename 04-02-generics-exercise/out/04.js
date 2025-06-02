"use strict";
function conditionalNumber(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
// conditionalNumber<number>(20.3555);
// conditionalNumber<string>('wow');
conditionalNumber('a string');
//# sourceMappingURL=04.js.map