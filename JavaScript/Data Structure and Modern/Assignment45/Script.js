const str = "TAP Air Portugal";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

const txt = "jOnAS";
const txtLower = txt.toLowerCase();
const txtCorrect = txtLower[0].toUpperCase() + txtLower.slice(1);
console.log(txtCorrect);

const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All txts come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Airb"));
// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the NEW ARirbus family");
// }

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
