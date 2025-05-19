"use strict";
function friday13(arr) {
    let Months;
    (function (Months) {
        Months[Months["January"] = 0] = "January";
        Months[Months["February"] = 1] = "February";
        Months[Months["March"] = 2] = "March";
        Months[Months["April"] = 3] = "April";
        Months[Months["May"] = 4] = "May";
        Months[Months["June"] = 5] = "June";
        Months[Months["July"] = 6] = "July";
        Months[Months["August"] = 7] = "August";
        Months[Months["September"] = 8] = "September";
        Months[Months["October"] = 9] = "October";
        Months[Months["November"] = 10] = "November";
        Months[Months["December"] = 11] = "December";
    })(Months || (Months = {}));
    ;
    for (const date of arr) {
        if (date instanceof Date) {
            const monthDay = date.getDate();
            const weeklyDay = date.getDay();
            const monthNum = date.getMonth();
            if (monthDay === 13 && weeklyDay === 5) {
                console.log(`${monthDay}-${Months[monthNum]}-${date.getFullYear()}`);
            }
        }
    }
}
friday13([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13)
]);
//# sourceMappingURL=09.js.map