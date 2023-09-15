let header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

const butn = document.createElement("button");
butn.innerHTML = "Login Please";
header.append(butn);

//styles
message.style.backgroundColor = "#37cccc";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(message.style.height);

console.log(message.style.width);
console.log(getComputedStyle(message));

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
console.log(message.style.height);

// document.documentElement.style.setProperty("color", "yellow");

//Attributes
const logo = document.querySelector(".logo");
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "New Paris";
console.log(logo.alt);
logo.id = "logoid";
console.log(logo.id);

console.log(logo.getAttribute("src"));
console.log(logo.getAttribute("id"));
console.log(logo.getAttribute("alt"));

// logo.setAttribute("company", "Bankist");

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes
