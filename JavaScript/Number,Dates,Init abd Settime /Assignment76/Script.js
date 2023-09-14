//setTimeout
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
setTimeout(() => {
  console.log("Delayed for 10 second.");
}, 1000);

setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod();
myArray.myMethod(1);
setTimeout(myArray.myMethod, 1.0 * 1000);
