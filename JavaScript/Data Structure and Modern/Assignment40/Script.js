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

// Keys

const properties = Object.keys(user);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

for (const i of Object.keys(user)) {
  console.log(i);
}

// Property VALUES
const values = Object.values(user);
console.log(values);

for (const i of Object.values(user)) {
  console.log(i);
}

for (const i of Object.values(user.address)) {
  console.log(i);
}

// Entire object
const entries = Object.entries(user);
console.log(entries);
