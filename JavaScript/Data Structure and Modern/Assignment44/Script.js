const str = "TAP Air Portugal";
const str1 = "A320";

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]); //space

console.log("Shruti"[0]);
console.log(`Length Of string 1 is: ${str.length}`);
console.log(`Length Of string 1 is: ${str1.length}`);

console.log(str.indexOf("r"));
console.log(str.lastIndexOf("t"));
console.log(str.lastIndexOf("Portugal"));

console.log(str.indexOf("Portugal"));
console.log(str.indexOf("Air"));

console.log(str1.slice(2));
console.log(str.slice(4, 7));

console.log(str.slice(0, str.indexOf(" ")));
console.log(str.slice(str.lastIndexOf(" ") + 1));

console.log(str.slice(-2));
console.log(str.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));
