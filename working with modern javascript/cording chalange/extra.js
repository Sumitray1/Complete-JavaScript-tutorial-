'use strict';
const player1fullName = [
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
const player2fullName = [
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
const [player1Goalkeeper, ...player1Restplayer] = player1fullName;
const [player2Goalkeeper, ...player2Restplayer] = player2fullName;
console.log('----------------------------------------------------------------');
console.log(player1Goalkeeper);
console.log('----------------------------------------------------------------');
console.log(player2Goalkeeper);
console.log('----------------------------------------------------------------');
console.log(player1Restplayer);
console.log('----------------------------------------------------------------');
console.log(player2Restplayer);
console.log('-------------------------total player----------');
const BothTeamPlayerall = [...player1fullName, ...player2fullName];
console.log(BothTeamPlayerall);
console.log('---------------Team First Final Player list----------');
const player1FinalList = ['thiago', 'coutinho', 'perisic', ...player1fullName];
console.log(player1FinalList);
