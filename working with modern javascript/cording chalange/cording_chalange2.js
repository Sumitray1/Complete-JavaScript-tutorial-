'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//challange 1---->
console.log('------------challange 1------------');
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}
console.log('--------------------another method---------');
//another method
for (const [i, player] of game.scored.entries()) {
  console.log(`Goals ${i + 1}: ${player}`);
}
//challange 2---->
console.log('--------------challange 2-----------');
const oddsValue = Object.values(game.odds);
let averageOddValue = 0;
for (const value of oddsValue) {
  averageOddValue += value;
}
console.log(`Average odds value =>  ${averageOddValue / oddsValue.length}`);
//challange 3----->
console.log('------------challange 3------------');
const oddData = Object.values(game.odds);
const keysName = [game.team1, 'draw', game.team2];
console.log(keysName);
for (let i = 0; i < oddData.length; i++) {
  console.log(`Odds of ${keysName[i]}: ${oddData[i]}`);
}
//challange 3 mention method =>
for (const [team, value] of Object.entries(game.odds)) {
  const conditon = team === 'x' ? 'draw' : `victory${game[team]}`;
  console.log(`odd of ${conditon} ${value}`);
}
//challenge 4------->
console.log('--------------challenge 4-----------');
