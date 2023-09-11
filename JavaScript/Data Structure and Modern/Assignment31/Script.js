const user = {
  firstName: "Alex",
  address: "15th Park Avenue",
  age: 43,
};

// let name = user.name;
// let age = user.age;
// console.log(name, age);

// const { firstName } = user;

// console.log(firstName);

// const { firstName, address, age } = user;

// console.log(firstName, address, age);

//Uncaught SyntaxError: Unexpected token '='
//{ firstName  } = user

//Uncaught SyntaxError: Unexpected token '='
// let firstName;
// { firstName  } = user

// let firstName;
// ({ firstName } = user);
// console.log(firstName);

//const { firstName, age, salary = 200000 } = user;
// console.log(firstName, age, salary);

const { firstName, age } = user;
let salary = user.salary ? user.salary : 123455;
console.log(firstName, age, salary);
