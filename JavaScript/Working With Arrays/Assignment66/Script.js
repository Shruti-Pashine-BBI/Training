// Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];

console.log(owners);
console.log(owners.sort());

//Numbers
const mov = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(mov);
console.log(mov.sort()); //not correct output

//Asc
mov.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(mov);

//Des
mov.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(mov);
