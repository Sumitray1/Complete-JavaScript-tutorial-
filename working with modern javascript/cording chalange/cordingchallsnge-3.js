// 'use strict';
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);
// //challange 1----->
// console.log('------------CHALLENGE 1------------');
// const events = new Set([...gameEvents.values()]);
// console.log(events);
// //challenge 2 -------------------->
// console.log('------------CHALLENGE 2------------');
// gameEvents.delete(64);
// console.log(gameEvents);
// //challenge 3 -------------------->
// console.log('------------CHALLENGE 3------------');
// console.log(`An event happened, on average, every ${
//   92 / gameEvents.size
// } minutes
// `);
// //Challange 4 ------------------->
// console.log('------------CHALLENGE 4------------');
// const halfTime = 45;
// for (const [keys, value] of gameEvents) {
//   if (keys <= halfTime) {
//     console.log(`[FIRST HALF] ${keys}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${keys}: ${value}`);
//   }
// }
// console.log(
//   '---------------------- CHALLENGE COMPLATED---------------------------------');
