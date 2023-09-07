const age = 18;
if (age === 18) console.log("Adult(strict)");
console.log(18 == 18);
console.log(18 === 18);
console.log(18 == 20);
console.log(18 === 20);

//tyep corecion
console.log("18" === 18);
console.log("18" == 18); //loosely equal

if (age == 18) console.log("Adult(loose)");

const fav = prompt("What is your lucky number");

console.log(fav);
console.log(typeof fav);

if (fav == 23) {
  console.log("Its 23");
}

//const fav1 = Number(prompt("What is your lucky number"));
const fav1 = prompt("What is your lucky number");
if (fav1 === 23) {
  console.log("Its 23");
} else {
  console.log("No 23");
}
