//call method
const persons = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const persons1 = {
  firstName: "John",
  lastName: "Doe",
};
const persons2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":

console.log(persons.fullName.call(persons1));
console.log(persons.fullName.call(persons2));

//apply method
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
//parameter
const person2 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.apply(person1));
console.log(person2.fullName.apply(person1, ["Oslo", "Norway"]));
