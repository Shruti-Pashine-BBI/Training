"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
//console.log(showmodel);
//console.log(document.querySelector(".modal p").innerHTML);

// showmodel.addEventListener("click", function () {
//   document.querySelector(".modal p").innerHTML;
// });

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", function () {
//     console.log("button clicked");
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
//   btnCloseModal.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });
// }

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closemodel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closemodel);
overlay.addEventListener("click", closemodel);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodel();
  }
});
