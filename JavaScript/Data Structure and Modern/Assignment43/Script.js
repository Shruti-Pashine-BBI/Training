const user = new Map();

user.set("name", "John");

user.set("age", 23);
user.set(2, "Lisbon, Portugal");

user
  .set("marks", 34)
  .set("gender", "male")
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(user);
for (const i of user) {
  console.log(i);
}

for (const [key, value] of user) {
  console.log(key, value);
}

for (const [key, value] of user) {
  console.log(key, value);
}

console.log(typeof user);

console.log(...user);
console.log(user.keys());

console.log(user.values());
console.log(user.entries());
