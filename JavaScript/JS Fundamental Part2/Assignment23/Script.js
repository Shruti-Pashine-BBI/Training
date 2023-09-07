"use strict";
const jonas = {
  firstName: "Jonas",
  lastName: "Brahmin",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  calcAge2: function (birthYeah) {
    return 2037 - birthYeah;
  },
};

console.log(jonas.calcAge2(1991));

const jonas2 = {
  firstName: "Jonas",
  lastName: "Brahmin",
  birthyear: 1991,
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  calcAge2: function () {
    return 2037 - this.birthyear;
  },
};

console.log(jonas2.calcAge2());

const jonas3 = {
  firstName: "Jonas",
  lastName: "Brahmin",
  birthyear: 1991,
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  calcAge2: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
};

console.log(jonas3.calcAge2());

//challenge

console.log(
  `${jonas2.firstName} is a ${jonas2.calcAge2()} is a 46 year old and he has ${
    jonas.hasDriversLicence == true ? "a" : "not"
  } driving licence`
);

const jonas4 = {
  firstName: "Jonas",
  lastName: "Brahmin",
  birthyear: 1991,
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  calcAge2: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  getsummary: function () {
    return `${
      jonas4.firstName
    } is a ${jonas4.calcAge2()} is a 46 year old and he has ${
      jonas4.hasDriversLicence == true ? "a" : "not "
    } driving licence`;
  },
};

console.log(jonas4.getsummary());
