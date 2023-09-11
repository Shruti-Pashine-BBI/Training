const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const arr1 = [1, 2, arr];
console.log(arr1);
const newArr = [1, 2, ...arr];
console.log(newArr);

const newUser = [...arr, "heina"];
console.log(newUser);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [m, , , , ...z] = arr2;
console.log(m, z);

//function
const arr3 = [4, 5, 6];
function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}
console.log(sum(...arr3));

let user = {
  firstName: "Alex",
  address: "15th Park Avenue",
  age: 43,
};
//change the value
//overide
console.log({ ...user });
console.log({ ...user, firstName: "John" });
console.log({ ...user, firstName: "Mahi", age: 34 });
//not override
console.log({ firstName: "Mahi", age: 34, ...user });

function myFunction(v, w, x, y, z) {
  return v + w + x + y + z;
}
const args = [0, 1];
console.log(...[3]);
console.log(myFunction(-1, ...args, 2, ...[3]));
