'use strict'
const firstAttempt = Number(prompt(`For team Dolphin 
Enter your first attempt score:....`));
const secondAttempt = Number(prompt(`for team Dolphin
Enter your second attempt score:....`));
const thirdAttempt = Number(prompt(`for team Dolphin
Enter your third attempt score: ....`));

const attemptfirst = Number(prompt(`For team kolas 
Enter your first attempt score:....`));
const attemptSecond = Number(prompt(`for team kolas
Enter your second attempt score:....`));
const attemptThird = Number(prompt(`for team kolas
Enter your third attempt score: ....`));

const averageScore = (firstAttempt, secondAttempt, thirdAttempt) => console.log((`average score is ${(firstAttempt + secondAttempt + thirdAttempt) / 3}`));
averageScore(firstAttempt, secondAttempt, thirdAttempt);


for team Dolphin