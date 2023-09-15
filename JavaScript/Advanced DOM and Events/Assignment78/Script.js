// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

// Delete elements
function myFunction() {
  const list = document.getElementById("myList");
  list.removeChild(list.firstElementChild);
}

const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(62);
set1.add(13);
console.log(set1);
for (const item of set1) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
