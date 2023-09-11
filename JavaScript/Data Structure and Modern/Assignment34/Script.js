// Or ||
console.log(true || false);

console.log(3 || "Orange");
console.log("" || "Orange");
console.log(true || 0);
console.log(undefined || null);

let person = {
  name: "Jack",
  age: 34,
};

console.log(person.job || "unemployed");
console.log(person.age || "no age");

//and &&

console.log(true && false);

console.log(3 && "Orange");
console.log("" && "Apple");
console.log(true && null);
console.log(undefined && null);

let person1 = {
  name: "Jack",
  age: 34,
};

//console.log(person1.job && "unemployed");
console.log(person1.age < 18 && "Driving allowed");
console.log(person1.age > 18 && "Driving allowed");
