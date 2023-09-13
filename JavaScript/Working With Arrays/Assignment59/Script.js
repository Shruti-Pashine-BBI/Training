"use strict";
const mov = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newmov = 1.1;
const movement = mov.map(function (movs) {
  return movs * newmov;
});

//arrow function

const movement1 = mov.map((movs) => movs * newmov);
console.log(mov);
console.log(movement);
console.log(movement1);

const movementsDescriptions = mov.map(
  (move, i) =>
    `Movement ${i + 1}: You ${move > 0 ? "deposited" : "withdrew"} ${Math.abs(
      move
    )}`
);
console.log(movementsDescriptions);
