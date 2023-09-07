"use strict";
const friend1 = "Michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["Michael", "steven", "peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
//console.log(friends[3]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

//Adding value to array

friends[3] = "jay";
console.log(friends);

//Replace
friends[2] = "john";
console.log(friends);

// friends = ["bob", "Alice"];
// console.log(friends);

const jonas = ["Jonas", "Brahim", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const caclage = function (birthyear) {
  return 2037 - birthyear;
};

const years = [1998, 1967, 2002, 2008, 2010];
console.log(caclage(years));

console.log(years + 10);

const age1 = caclage(years[0]);
const age2 = caclage(years[1]);
const age3 = caclage(years[years.length - 1]);

console.log(age1, age2, age3);
