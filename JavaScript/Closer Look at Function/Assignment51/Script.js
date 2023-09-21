// //call method
/*const persons = {
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
*/
let job = {
  Profession: "Actor",
};
let data = {
  Profession: "Actor",
};
let details = {
  firstName: "Joey",
  lastName: "King",

  display: function () {
    console.log(
      `I\'m ${details.firstName} ${details.lastName} and I\'m an ${this.Profession}`
    );
  },
};

let getdata = function () {
  console.log(
    `I\'m ${this.firstName} ${this.lastName} and I\'m an ${job.Profession} `
  );
};
let getdata1 = function (country) {
  console.log(
    `I\'m ${this.firstName} ${this.lastName} and I\'m an ${job.Profession} from ${country}`
  );
};
let getdata2 = function (country, age) {
  console.log(
    `I\'m ${this.firstName} ${this.lastName} and I\'m an ${job.Profession},${age} year old from ${country}`
  );
};

//call
getdata.call(details);
getdata1.call(details, "Munchen");
getdata2.call(details, "Munchen", 23);

//bind
getdata.apply(details);
getdata1.apply(details, ["Munchen"]);
getdata2.apply(details, ["Munchen", 23]);
//details.display();
// details.getdata.call(job);
// details.display.call(job);

//apply
let bind1 = getdata.bind(details);
console.log(bind1);
bind1();

let bnd2 = getdata1.bind(details, "Munchen");
bnd2();
let bnd3 = getdata2.bind(details, ["Munchen", 23]);
bnd3();
let bnd4 = getdata2.bind(details, "Munchen", 23);
bnd4();
