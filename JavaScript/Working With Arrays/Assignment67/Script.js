const arr = [1, 2, 3, 4, 5, 6, 7];
//another way to create an array
console.log(new Array(arr));

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
const array1 = [1, 2, 3, 4];
console.log(array1.fill(0, 2, 4));
console.log(arr.fill(0, 2, 4));

console.log(array1.fill(5, 1));
console.log(arr.fill(5, 1));
console.log(arr.fill(6));
// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
