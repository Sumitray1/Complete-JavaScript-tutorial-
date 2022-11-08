'use strict';

const mark = {
    first: 'Mark',
    last: 'Ray',
    mass: Number(prompt("enter the mass of Marks ")),
    height: Number(prompt("Enter the height of the Mark")),
    BMi: function () {
        return (this.mass / (this.height * this.height));
    }

}
console.log(`${mark.first} ${mark.last} weight ${mark.mass} kg is ${mark.height}m tall with ${mark.BMi()} BMI`);