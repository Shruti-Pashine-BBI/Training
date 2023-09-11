const user = {
  name: "Alice",
  age: 28,
  address: {
    street: "Dinah",
    city: "pune",
    state: "pn",
    zip: 10101,
  },
};
console.log(user.address.city);
console.log(user.address.roadnumber); //not shwing error
//console.log(user.address.roadnumber.houseNUMBER); //shwing error

//optional channing
console.log(user.address.roadnumber?.housenumber); //not shwing error
console.log(user?.address?.city);

const users = [
  { firstname: "john", age: 30 },
  { firstname: "Bob", age: 34 },
  { firstname: "Alex", age: 39 },
];
console.log(users[1].firstname);
console.log(users[3]?.firstname);
