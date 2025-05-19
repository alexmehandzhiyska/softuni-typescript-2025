"use strict";
function dayOfWeek(dayNum) {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    ;
    console.log(Days[dayNum] || 'error');
}
// dayOfWeek(1);
dayOfWeek(5);
// dayOfWeek(-1);
//# sourceMappingURL=02.js.map