// 'use strict';
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const pollANswer = Number(
//       prompt(
//         'What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)'
//       )
//     );
//     if (pollANswer > 0 && pollANswer < 4) {
//       this.answers[pollANswer]++;
//     } else {
//       alert('PLEASE ENTER NUMBER BETWEEN 0-4');
//     }
//     console.log(this.answers);
//   },
// };
// const register = poll.registerNewAnswer;
// const eventRegister = register.bind(poll);
// document.querySelector('.poll').addEventListener('click', eventRegister);
