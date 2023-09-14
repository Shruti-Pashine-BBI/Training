const now = new Date();
console.log(now);

console.log(
  new Date("Thu Sep 14 2023 13:43:24 GMT+0530 (India Standard Time)")
);

console.log(new Date("December 25"));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(2037, 10, 32));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// const d = new Date("2022-03-25");
// console.log(d);

// Method
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
