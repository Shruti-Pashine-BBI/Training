//Integers
//math sqrt
console.log(Math.sqrt(9));

//max
console.log(Math.max(10, 20, 11, 21, 22, 43, 5, 6));
console.log(Math.max(10, 20, 11, "21", "22", "44px", 5, 6));
console.log(Math.max(10, 20, 11, "21", "22", "44", 5, 6));

//min
console.log(Math.min(10, 20, 11, 21, 22, 43, 5, 6));
console.log(Math.min(10, 20, 11, "21", "2", "44", 5, 6));
console.log(Math.min(10, 20, 11, "21", "2px", "4", 5, 6));

//pi
console.log((Math.PI = Number.parseInt("10px")));
console.log((Math.PI = Number.parseInt("10px") == 2));

//trunc
console.log(Math.trunc(Math.random() * 60) + 1);
//random valuses
const randomInt = (min, max) =>
  Math.trunc(Math.random() + (min - max) + 1) + min;

//round
console.log(Math.round(0.9));
console.log(
  Math.round(5.95),
  Math.round(5.4),
  Math.round(5.5),
  Math.round(5.05)
);
console.log(
  Math.round(-5.05),
  Math.round(-5.4),
  Math.round(-5.6),
  Math.round(-5.5),
  Math.round(-5.95)
);

//ceil
console.log(Math.ceil(0.9));
console.log(Math.ceil(1.4));

//floor
console.log(Math.floor(0.9));
console.log(Math.floor(1.4));

//Floating Numbers
//tofixed
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.337).toFixed(2));
console.log(+(2.7).toFixed(2));
