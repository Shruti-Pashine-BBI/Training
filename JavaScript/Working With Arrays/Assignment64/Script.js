"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const array1 = [5, 12, 8, 130, 44];
const array = [1, 30, 39, 29, 10, 13];
//includes
const found = array1.includes(12);
console.log(`Includes:`, found);

//some
const some1 = array1.some((mov) => mov === 122);
console.log(`Some:`, some1);
const some2 = array1.some((mov) => mov < 44);

console.log(`Some:`, some2);

//every

const every1 = array.every((currentValue) => currentValue < 40);
console.log(`Every for Array:`, every1);
const every2 = array1.every((currentValue) => currentValue < 40);
console.log(`Every for Array1:`, every2);
