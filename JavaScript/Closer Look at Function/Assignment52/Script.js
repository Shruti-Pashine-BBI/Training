const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log(fullName());

const person1 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person1.display());
let display = person1.display.bind(person1);
console.log(setTimeout(display, 3000));
