// 'use strict';
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   printGoals: function (...players) {
//     let i = 0;
//     for (i = 0; i < players.length; i++) {
//       console.log(` \n ${players[i]}  `);
//     }
//     console.log(`\n total score ${this.score}\n total fullName intered =${i}`);
//   },
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //challange number 1--------------->
// const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);
// //chalane number 2----------------->
// const [team1gk, ...team1Reastplayer] = player1;
// const [team2gk, ...team2Reastplayer] = player2;
// console.log('------------------goal keeper----------------');
// console.log(team1gk);
// console.log(team2gk);
// console.log('------------------rest palyer----------------');
// console.log(team1Reastplayer);
// console.log(team2Reastplayer);
// //chalane number 3------------------->
// const allPlayers = [...player1, ...player2];
// console.log('-------------------list of allPlayers---------');
// console.log(allPlayers);
// //chalane number 4----------------------->
// const player1Final = ['thiago', 'coutinho', 'perisic', ...player1];
// console.log('.................Team 1 final player----------');
// console.log(player1Final);
// //chalane number 5-------------------->
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log('---------------------destructerring array----------');
// console.log(team1, draw, team2);
// //chalane number 6-------------------->
// console.log('-----------------checking fuction definder--------------------');
// game.printGoals('sumit', 'amit', 'partik', 'gaurav');
// //challange number 7-------------------->
// console.log('---------------predecting which team will win --------');
// team1 < team2 && console.log('team 1 is more likely to win ');
// team2 < team1 && console.log('team 2 is more likely to win ');
