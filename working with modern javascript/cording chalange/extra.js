'use strict';
const player1Name = [
  'sumit',
  'amit',
  'partik',
  'binit',
  'abhi',
  'sushant',
  'raju',
  'gaurav',
  'sudip',
  'sanjay',
  'samir',
];
const player2Name = [
  'sanakar',
  'samarat',
  'sudarsan',
  'nepali',
  'anish',
  'khanal',
  'prakshh',
  'abhinav',
  'aavash',
  'unique',
  'bibeek',
];
const [player1Goalkeeper, ...player1Restplayer] = player1Name;
const [player2Goalkeeper, ...player2Restplayer] = player2Name;
console.log('----------------------------------------------------------------');
console.log(player1Goalkeeper);
console.log('----------------------------------------------------------------');
console.log(player2Goalkeeper);
console.log('----------------------------------------------------------------');
console.log(player1Restplayer);
console.log('----------------------------------------------------------------');
console.log(player2Restplayer);
console.log('-------------------------total player----------');
const BothTeamPlayerall = [...player1Name, ...player2Name];
console.log(BothTeamPlayerall);
console.log('---------------Team First Final Player list----------');
const player1FinalList = ['thiago', 'coutinho', 'perisic', ...player1Name];
console.log(player1FinalList);
