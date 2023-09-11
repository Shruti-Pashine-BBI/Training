const favouriteColor = [
  "Black",
  "Yellow",
  "Purple",
  "lavender",
  "Olive",
  "White",
];

//Normal way to extract the value

const firstColor = favouriteColor[0];
const secondColor = favouriteColor[1];
const thirdColor = favouriteColor[2];
const fourthColor = favouriteColor[3];
const fifthColor = favouriteColor[4];

console.log(firstColor, secondColor, thirdColor, fourthColor, fifthColor);

//Destructuring

const [one, two, three, four, five] = favouriteColor;
console.log(one, two, three, four, five);

let movie, marks, age, gender;

[movie, marks, age, gender] = ["Train To Busan", 98, 23, "Male"];
console.log(movie, marks, age, gender);

const [firstName, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(firstName);
console.log(otherInfo);

//extract value at any index
const [, , website] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(website);
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [m, , , , ...z] = arr2;
console.log(m, z);

const [a, b, c, d = 1] = [1, 2, 3];
console.log(a, b, c, d);

const [x = 1, y = 2] = [4];
console.log(x, y);

let temp = 23;
let ab = 21;
console.log("temp", temp);
console.log("ab", ab);
[temp, ab] = [ab, temp];
console.log("temp", temp);
console.log("ab", ab);
