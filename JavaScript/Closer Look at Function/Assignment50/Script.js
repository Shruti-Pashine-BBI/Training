const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Shruti");
greeterHey("Hello");

greet("hello")("jonas");

greets = (greeting) => {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey1 = greet1("Hey");
// greeterHey1("Shruti");
// greeterHey1("Hello");
// greet1("hello")("jonas");

greet1 = (greeting) => (fname) => console.log(`${greeting} ${fname}`);
const greeterHey1 = greet1("hiiiii");
greeterHey1("Shruti");
greeterHey1("Hello");
greet1("hello")("jonas");
