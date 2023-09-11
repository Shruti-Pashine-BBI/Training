const orderSets = new Set(["Pizza", "Pasta", "Crosstino", "Pasta", "Pizza"]);
console.log(orderSets);
console.log(new Set("Jonas"));
console.log(orderSets.size);

console.log(orderSets.has("Pizza"));
console.log(orderSets.has("Bread"));
orderSets.add("Bread");
console.log(orderSets);

console.log(orderSets.has("Bread"));
orderSets.add("GarlicBread");
console.log(orderSets);

orderSets.delete("Bread");
console.log(orderSets);
console.log(orderSets[0]);

for (const i of orderSets) {
  console.log(i);
}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(...staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);
