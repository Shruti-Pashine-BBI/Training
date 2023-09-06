const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

//Reverse Loop
for (let i = 5; i >= 0; i--) {
  console.log(i, jonas[i]);
}
for (let i = 0; i <= 5; i++) {
  console.log(`Starting---> ${i}`);
  for (let j = 0; j <= 6; j++) {
    console.log(`    New Start---> ${j}`);
  }
}
