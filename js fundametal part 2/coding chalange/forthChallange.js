'use strict';



function calcTip(bill) {
    let tips = [];
    for (let j = 0; j < bill.length; j++) {
        tips[j] = bill[j] * 0.2;
    }
    return tips;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
console.log(`---------Billamounts are----------\n${bills} `);
tips = calcTip(bills);
console.log(`---------tips amount on bills amount are----------\n${tips} `);
