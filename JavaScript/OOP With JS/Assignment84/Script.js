const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// .prototyeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";

//Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
const arr = [3, 4, , 5, 6, 7, 8, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__);

//unique element

Array.prototype.unique;
