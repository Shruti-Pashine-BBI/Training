let person = {
  name: 0,
  age: 34,
};

//or operator
const guest = person.name || 10;
console.log(guest);

//nullish operator
const guestCorrect = person.name ?? 10;
console.log(guestCorrect);
