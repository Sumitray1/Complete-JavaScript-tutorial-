// 'use strict';

// const sumitCompanhy = {
//   Name: 'Sumit Cafe',
//   lunch: ['pizza', 'burger', 'chicken', 'chicken Birayani'],
//   Address: 'jaleshwor chowk-4',
//   sweets: ['Iceream', 'pine cake ', 'Honey', 'lassy'],
//   order: function (first, second) {
//     return [this.lunch[first], this.sweets[second]];
//   },
// };

// console.log(sumitCompanhy);
// //peviously wehn we need to store the data of an array in varibale we use to do this -----
// const x = sumitCompanhy.lunch[0];
// const y = sumitCompanhy.lunch[1];
// const z = sumitCompanhy.lunch[2];
// console.log(x, y, z);
// //but with version six we can directly store data of an array in varible like this -----
// const [a, b, c] = sumitCompanhy.lunch;
// console.log(a, b, c);
// //for example if we want to store only first and third data of lunch in array we can do this by ----
// let [d, , e] = sumitCompanhy.lunch;
// console.log(d, e);
// //previously if we want to swap the data of e and f we use to do this
// const temp = e;
// e = d;
// d = temp;
// console.log(d, e);
// //with version six we can do this by using----
// [e, d] = [d, e];
// console.log(d, e);
// //we can directly assing return value of funcrtion having argument in variable by using this ----
// let [lunch, sweets] = sumitCompanhy.order(1, 2);
// console.log(lunch + '\n' + sweets);
// //destructing array within array ----
// const arr = [1, 2, [3, 4]];
// const [first, , anotherArray] = arr;
// console.log(first, anotherArray);
// //if we want the value of all array then we can do this as shwon below ----
// const [firstArrayData1, firstArrayData2, [secondArrayData1, secondArrayData2]] =
//   arr;
// console.log(
//   firstArrayData1,
//   firstArrayData2,
//   secondArrayData1,
//   secondArrayData2
// );
