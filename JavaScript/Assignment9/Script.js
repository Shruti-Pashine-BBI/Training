console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(" "));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("No Spend");
} else {
  console.log("Take a job");
}

let height = 0;
if (height) {
  console.log("Height is mention");
} else {
  console.log("Height is undefined");
}
