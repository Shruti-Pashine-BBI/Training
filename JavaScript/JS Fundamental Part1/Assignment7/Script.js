const age = 17;
const isoldEnough = age >= 18;

//control Structure
if (isoldEnough) {
  console.log("Start Driving🙄");
} else {
  console.log(`After ${18 - age} year she can drive`);
}

const year = 1992;
let century;
if (year <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
