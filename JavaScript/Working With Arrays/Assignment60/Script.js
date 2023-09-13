"use strict";
const mov = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movement = mov.filter(function (movs) {
  return movs > 0;
});

//arrow function

const movement1 = mov.filter((movs) => movs < 0);
console.log(mov);
console.log(movement);
console.log(movement1);
