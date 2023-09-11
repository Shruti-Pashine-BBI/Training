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

console.log(user.get("name"));
console.log(user.get("open"));
console.log(user.get("close"));
console.log(user.get(true));
console.log(user.get(11));

const time = 8;
console.log(user.get(time > user.get("open") && time < user.get("close")));

console.log(user.has("categories"));
user.delete(2);
//user.clear();

const arr = [1, 2];

console.log(user.set(document.querySelector("h1"), "Heading"));
console.log(user.size);
user.set(arr, "Test");
console.log(user.get(arr));
