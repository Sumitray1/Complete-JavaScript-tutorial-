'use strict';



function calcTip(bill) {
    let tips = [];
    for (let j = 0; j < bill.length; j++) {
        tips[j] = bill[j] * 0.2;
    }
    return tips;
}
function totalAmout(tips, bills) {
    let total = [];
    for (let i = 0; i < tips.length; i++) {
        total[i] = tips[i] + bills[i];

    }
    return total;
}
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
tips.push(calcTip(bills));
let totals = [];
totals.push(totalAmout(tips, bills))
console.log(`---------Billamounts are----------\n${bills} `);
console.log(`---------tips amount on bills amount are----------\n${tips} `);
console.log(`--------- your total amount is------------------------\n ${totals}`);