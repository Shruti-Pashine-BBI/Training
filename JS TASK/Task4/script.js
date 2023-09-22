/*Write a JavaScript function called logicalOperations that takes two boolean values (bool1 and bool2) as input and performs the following logical operations:

Check if both bool1 and bool2 are true. If both are true, return true; otherwise, return false.
Check if either bool1 or bool2 is true. If either is true, return true; otherwise, return false.
Check if bool1 is true and bool2 is false. If both conditions are met, return true; otherwise, return false.
Check if either bool1 is true or bool2 is false. If either condition is met, return true; otherwise, return false.

Your function should return an object with the following properties:

andResult: The result of the "AND" operation.
orResult: The result of the "OR" operation.
notAndResult: The result of the "NOT AND" operation.
notOrResult: The result of the "NOT OR" operation.

For example, if bool1 is true and bool2 is false, the function should return:

{
  andResult: false,
  orResult: true,
  notAndResult: true,
  notOrResult: true
}*/
class logicalOperation {
  getdata() {
    const bool1 = true;
    const bool2 = false;
    console.log(`andResult: ${bool1 && bool2}`);
    console.log(`orResult: ${bool1 || bool2}`);
    console.log(`notAndResult: ${!bool2 && bool1}`);
    console.log(`notOrResult: ${!bool2 || bool1}`);
  }
}
const obj = new logicalOperation();
obj.getdata();
// class Person {
//   getData1() {
//     const bool1 = true;
//     const bool2 = false;
//     return {
//       andResult: bool1 && bool2,
//       orResult: bool1 || bool2,
//       notAndResult: !bool2 && bool1,
//       notOrResult: !bool2 || bool1,
//     };
//   }
// }

// const person = new Person();
// const results = person.getData1();
// console.log(results);
