// // A Map is ordered and iterable, whereas a objects is not ordered and not iterable (in the sense that they don't have a [Symbol.iterator] property. However, you can iterate over the keys using for..in syntax.)

// // We can put any type of data as a Map key, whereas objects can only have a number, string, or symbol as a key.

// // A Map inherits from Map.prototype. This offers all sorts of utility functions and properties which makes working with Map objects a lot easier.

// //so let's begin with set now-->
// //1> defining map
// const firstMap = new Map();
// //2> adding data to map
// firstMap.set('fullName', 'SumitCompanhy');
// //here "fullName" is key and "SumitCompanhy" is value i.e is whenever we defin the set then ("key ","value");

// //we put the key fullName any data type same goes for value data too
// //we can also add array in our value
// console.log(firstMap);
// firstMap.set('Work', [
//   'webpageDesign',
//   'Web Devploment',
//   'video edit',
//   'video shoot',
// ]);
// console.log(firstMap);
// //similary we can add multiple data and value in our map just by doing this --->
// firstMap
//   .set('openingHours', '10:00 A.M.')
//   .set('closingHours', '5:00 P.M.')
//   .set('location', 'kathmandu');

// console.log(firstMap);
// //to get the data from map we need to do this --->
// const openingTime = firstMap.get('openingHours');
// console.log(openingTime);
// //or
// console.log(firstMap.get('closingHours'));
// //to chit the keys is there or not we can do this --->
// console.log(firstMap.has('location'));
// //we can also delete the key from the map by doing this --->
// firstMap.delete('location');
// console.log(firstMap);
// //to check the size
// console.log(firstMap.size);
// //to delete everything from the map it is similar to set ie.--->
// // firstMap.clear();
// console.log(firstMap);
// //we can also use array as key in map --->
// //example--->
// const array = ['first', 'Second'];
// firstMap.set(array, 'position');
// console.log(firstMap.get(array));
// console.log(firstMap);

// //  <<------------------------------------------------MAP ITERATION------------------------------------------------->>

// //So in previous session we learn about how to add the value to map by using "get" method but in this session we will learn new method of putting value to the map. So let's begin ---->

// //In this session we will use Multiple array to put value to the map
// //in the every array --first element---> is the key of the map and rest is value for every array

// //so here we need to keep all the array within the big array to use this method

// //example--->
// const secondMap = new Map([
//   ['firstfullName', 'Sumit'],
//   ['LastfullName', 'Ray'],
//   ['Age', 22],
//   ['occupation', 'Computer Engineer'],
// ]);
// console.log(secondMap);
// // we can also covert array to map ------------->

// //defining object
// const firstObject = {
//   fullName: 'abhi',
//   Work: 'account',
//   workinHrs: 5,
// };
// //converting array to  map
// const objectMap = new Map(Object.entries(firstObject));
// console.log(objectMap);

// //we can also use iterrable to maps for example
// //example--->
// for (const [key, value] of secondMap) {
//   console.log(`${key}-->${value}`);
// }
// //we can  also covert map to array ----->
// const mapArray = [...firstMap];
// console.log(mapArray);
// //simalry we can get keys and value of the map like object i.e------->
// console.log([...firstMap.keys()]);
// console.log([...firstMap.values()]);
// console.log(firstMap);
