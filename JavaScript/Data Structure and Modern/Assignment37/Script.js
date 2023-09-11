let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];
const favouriteColor = [
  "Black",
  "Yellow",
  "Purple",
  "lavender",
  "Olive",
  "White",
];
for (const item of activities) {
  console.log(item);
}

for (const [i, el] of activities) {
  console.log(`${i}:${el}`);
}
// for (const el of activities) {
//   console.log(`${el}`);
// }
