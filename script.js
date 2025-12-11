// variables
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

// prevent default form submissions
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
