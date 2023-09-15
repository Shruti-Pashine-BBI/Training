const he1 = document.querySelector("h1");
// he1.addEventListener("mouseenter", function (e) {
//   alert("This is Heading1");
// });
// const he2 = document.querySelector("h2");
// he1.addEventListener("mouseleave", function (e) {
//   alert("This is Heading2");
// });

// he1.onmouseenter = function (e) {
//   alert("This is Heading1");

// };
const alerth1 = he1.addEventListener("mouseenter", function (e) {
  alert("This is Heading1");
  //   he1.removeEventListener("mouseleave", alerth1);
});

setTimeout(() => he1.removeEventListener("mouseenter", alerth1), 3000);
