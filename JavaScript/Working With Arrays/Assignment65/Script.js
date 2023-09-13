const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// // expected output: Array [0, 1, 2, 3, 4, 5]

const arr = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 10 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
