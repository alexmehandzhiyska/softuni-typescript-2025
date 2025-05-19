"use strict";
function unknownResponse(arg) {
    if ('value' in arg && typeof arg.value === 'string') {
        return arg.value;
    }
    return '-';
}
console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently' }));
//# sourceMappingURL=07.js.map