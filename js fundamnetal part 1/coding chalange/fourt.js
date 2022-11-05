let billAmount = Number(prompt("Enter Your Bill Amount"));

// using if-else statement
let tips;
if (billAmount >= 50 && billAmount <= 300) {
    tips = 0.15 * billAmount;
    console.log(`Your billAmojunt is ${billAmount}
    your tip amont is ${tips}
    your total paying amount is ${billAmount + tips}`);

} else {
    tip = 0.20 * billAmount;
    console.log(`    Your billAmojunt is ${billAmount}
    your tip amont is ${tip}
    your total paying amount is ${billAmount + tip}`);
}
// usning ternary operator
let tip = (billAmount >= 50 && billAmount <= 300) ? 0.15 * billAmount : 0.20 * billAmount;
console.log(`Your billAmojunt is ${billAmount} 
your tip amont is ${tip}
your total paying amount is ${billAmount + tip}`);