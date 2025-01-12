const colors = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
]; // array of colors

// Selection

const btn = document.querySelector("#btn"); // selecting the button element
const color = document.querySelector(".color"); // selecting the color span
const body = document.body; // selecting the body element

// Event listener added to button when clicked it will change background color
btn.addEventListener("click", function () {
  color.textContent = colors[getRandomNum()]; // will change the inner text of the color span
  body.style.backgroundColor = color.textContent; // will change the background color and will match the inner text
});

// Function to generate random number
const getRandomNum = function () {
  return Math.floor(Math.random() * colors.length);
};
