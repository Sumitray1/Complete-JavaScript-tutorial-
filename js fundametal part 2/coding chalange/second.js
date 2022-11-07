'use strict';


function calcTip(billAmount) {
    if (billAmount > 50 && billAmount < 300) {
        return (console.log(`Your tips is ${billAmount * 0.15} `));
    } else {
        return (console.log(`Your tips is ${billAmount * 0.2} `));
    }
}
calcTip(150);
