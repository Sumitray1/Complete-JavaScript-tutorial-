'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(function (obj) {
  obj.recommendedFood = Math.trunc(obj.weight ** 0.75 * 28);
});
console.log(dogs);
//challange 2
const owner = dogs.find(own => own.owners.includes('Sarah'));
//function defn
function eatingData(name) {
  if (
    name.curFood > name.recommendedFood * 0.9 &&
    name.curFood < name.recommendedFood * 1.1
  ) {
    console.log(`${name.owners} dog is eating pefect`);
  } else if (name.curFood > name.recommendedFood * 1.1) {
    console.log(`${name.owners[0]} dog is eating to to much`);
  } else {
    console.log(`${name.owners} dog is eating to less`);
  }
}
eatingData(owner);
//challange 3
const ownersEatTooMuch = dogs
  .filter(data => data.curFood > data.recommendedFood * 1.1)
  .flatMap(own => own.owners);
console.log(ownersEatTooMuch);
const ownerEatTooLess = dogs
  .filter(data => data.curFood < data.recommendedFood * 0.9)
  .flatMap(own => own.owners);
console.log(ownerEatTooLess);
const EatPerfectally = dogs
  .filter(
    data =>
      data.curFood > data.recommendedFood * 0.9 &&
      data.curFood < data.recommendedFood * 1.1
  )
  .flatMap(own => own.owners);
console.log(EatPerfectally);
//challange 4
console.log(`${ownersEatTooMuch.join(' and ')}dog eats too much`);
console.log(`${ownerEatTooLess.join(' and ')}dog eats too less`);
console.log(`${EatPerfectally.join(' and ')} dog eats too less`);

//challange 5
console.log(dogs.some(data => data.curFood === data.recommendedFood));
console.log(
  dogs.some(
    data =>
      data.curFood > data.recommendedFood * 0.9 &&
      data.curFood < data.recommendedFood * 1.1
  )
);
// challange last
const dogsCopy = dogs.slice().sort((a, b) => a.curFood - b.curFood);

console.log(dogsCopy);
console.log(dogs);
