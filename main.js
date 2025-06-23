"use strict";

// Initialization of variables
const inputElement = document.getElementById("userInput");
const output = document.getElementById("gameOutput");
let randomNumber = Math.trunc(Math.random() * 100 + 1);
let inputValue;
let numberValue;
let userNumber;

// Reset all values ​​function to guess a new number
function reload() {
  numberValue = null;
  userNumber = null;
  inputValue = null;

  randomNumber = Math.trunc(Math.random() * 100 + 1);
  output.textContent = "Great! I thought of a new number.";
}

// Function to get values ​​from a form
function getFormValue() {
  inputValue = inputElement.value;
  userNumber = parseInt(inputValue);
  numberCheck(userNumber);
}

// Number check function
function numberCheck(userNumber) {
  if (userNumber && userNumber <= 100 && userNumber >= 1) {
    if (userNumber === randomNumber) {
      output.textContent = `That's right, I guessed the number ${randomNumber}.`;
    } else if (userNumber < randomNumber) {
      output.textContent = `No, not ${userNumber}, I was thinking of a bigger number.`;
    } else if (userNumber > randomNumber) {
      output.textContent = `No, not ${userNumber}, I was thinking of a smaller number.`;
    }
  } else {
    output.textContent =
      "It was necessary to enter an integer from 1 to 100 inclusive.";
  }
  inputElement.value = "";
}
