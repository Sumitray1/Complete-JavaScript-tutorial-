'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const buttonarea = document.querySelector('button');

buttonarea.addEventListener('click', function () {
  if (textarea.value.includes('_')) {
    const line = textarea.value.split('\n');
    console.log(line);
    const breakLine = line.map(element => {
      return element.toLowerCase().trim();
    });
    console.log(breakLine);
    let input = [];
    for (const b of breakLine) {
      input.push(b.replace(b[0], b[0].toUpperCase()));
    }
    let newText = input.join('\n');
    // console.log(newText);

    console.log(breakLine);
    let newinput = newText.split('_');
    const arrrayInput = [];
    for (const n of newinput) {
      arrrayInput.push(n.replace(n[0], n[0].toUpperCase()));
    }
    let finalValue = arrrayInput.join('');
    textarea.value = finalValue;
    console.log(` ${finalValue.padEnd(20)}✅`);
  } else {
    textarea.value = 'wrong input';
    console.log(textarea.value);
  }
});
// console.log('sumit\nray'.includes('\n'));

// function inputName(textarea) {}
