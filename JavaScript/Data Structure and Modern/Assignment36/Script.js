const res1 = {
  name: "carpri",
  // numGuest: 20,
  numGuest: 0,
};

const res2 = {
  name: "La Plaza",
  owner: "Rossy",
};

//or assignment operator
// res2.numGuest = res2.numGuest || 10;
// res1.numGuest = res1.numGuest || 10;

// console.log(res1);
// console.log(res2);

// res2.numGuest ||= 40;
// res1.numGuest ||= 40;
res2.numGuest ??= 40;
res1.numGuest ??= 40;

// res2.owner = res2.owner && "Bella";
// res1.owner = res1.owner && "Bella";

res2.owner &&= "Bella";
res1.owner &&= "Bella";
console.log(res1);
console.log(res2);
