const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // array of letters and numbers

// Selection

const btn = document.querySelector("#btn"); // selecting the button element
const color = document.querySelector(".color"); // selecting the color span
const body = document.body; // selecting the body element

// Added event listener to button when it is clicked background color of body changes
btn.addEventListener("click", function () {
  let hexColor = "#"; // all hex solors start with a #

  // looping 6 times to add letters and number from hex array to create a hex value
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()];
  }

  color.textContent = hexColor; // will change the inner text of the color span
  body.style.backgroundColor = color.textContent; // will change the background color and will match the inner text
});

// Function to generate random number
const getRandomNum = function () {
  return Math.floor(Math.random() * hex.length);
};
