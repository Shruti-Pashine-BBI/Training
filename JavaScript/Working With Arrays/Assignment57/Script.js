//on Map
const user = new Map();

user.set("name", "John");

user.set("age", 23);
user.set(2, "Lisbon, Portugal");
console.log(user);

user
  .set("marks", 34)
  .set("gender", "male")
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(user);

user.forEach(myfunction);

function myfunction(item, index) {
  console.log(index + ":" + item);
}

//on sets
const orderSets = new Set(["Pizza", "Pasta", "Crosstino", "Pasta", "Pizza"]);
console.log(orderSets);
orderSets.forEach(myfunction1);

function myfunction1(item, index) {
  console.log(index + ":" + item);
}
