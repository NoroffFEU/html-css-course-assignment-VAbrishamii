const burger = document.querySelector(".burger");
const burgerMenue = document.querySelector(".burger-menu");
const crossIcon = document.querySelector(".cross-icon");

burger.addEventListener("click", function () {
  burgerMenue.classList.add(".show-burger-menu");
});

crossIcon.addEventListener("click", function () {
  burgerMenue.classList.remove("show-burger-menu");
});
