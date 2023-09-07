"use strict";
const jonas = {
  firstName: "Jonas",
  lastName: "Brahmin",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.firstName);
console.log(jonas[`lastName`]);

//storing value which has name in namekey var
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const intrs = prompt(`Put valid key`);
// console.log(jonas.intrs);
console.log(jonas[intrs]);

if (jonas[intrs]) {
  console.log(jonas[intrs]);
} else {
  console.log("wrong data");
}

jonas.location = "germany";
jonas["twitter"] = "@jonasjhh";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);
