"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printage() {
//     const output = `${firstname}, You are ${age}, born in year ${birthYear}`;
//     console.log(output);
//   }
//   printage();
//   return age;
// }
// const firstname = "Jonas";
// calcAge(1991);

//function scope-var variable

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printage() {
//     const output = `${firstname}, You are ${age}, born in year ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var mill = true;
//       const str = `Oh,You are a Millenia, ${firstname}`;
//       console.log(str);
//     }
//     console.log(mill);
//   }

//   printage();
//   return age;
// }
// const firstname = "Jonas";
// calcAge(1991);

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printage() {
//     const output = `${firstname}, You are ${age}, born in year ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var mill = true;
//       const str = `Oh,You are a Millenia, ${firstname}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(mill);
//     //console.log(add(2, 3)); // to run this line you have to remove use strict
//   }

//   printage();
//   return age;
// }
// const firstname = "Jonas";
// calcAge(1991);

//same variable name
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  const firstname = "Steven"; //first preference
  function printage() {
    const output = `${firstname}, You are ${age}, born in year ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var mill = true;
      const str = `Oh,You are a Millenia, ${firstname}`;
      console.log(str);

      //   function add(a, b) {
      //     return a + b;
      //   }
    }
    console.log(mill);
    //console.log(add(2, 3)); // to run this line you have to remove use strict
  }

  printage();
  return age;
}
const firstname = "Jonas";
calcAge(1991);
