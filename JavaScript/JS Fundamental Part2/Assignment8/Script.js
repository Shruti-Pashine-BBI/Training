//type conversion

const year = "2001";
console.log(year + 22);
console.log(typeof year);
console.log(Number(year));
console.log(typeof year);

console.log(year + 22);
console.log(Number(year) + 22);

const newvalue = Number(year);
console.log(typeof newvalue);
console.log(newvalue + 22);

//type corecion

console.log("I'm " + 23 + " Years Old");
console.log("23" + "10" + 3);
console.log("23" - "10" + 3);
console.log("23" - "2");
console.log("23" + 2);
console.log(2 + "23");
console.log("23" / "2");
console.log(2 + 2 + 4 + 1 + "23");
