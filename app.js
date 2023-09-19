"use strict";
function normalizeInput(input) {
  return input.trim().toLowerCase();
}

let userName = prompt("What's your name?");
if (userName) {
  alert(`Hello, ${userName}! Welcome to my About Me page.`);
} else {
  alert("Hello, visitor! Welcome to my About Me page.");
}

let correctAnswers = 0;

// Q1
let question1 = prompt("What is 22 + 2?");
if (normalizeInput(question1) === "24") {
  alert("Correct!");
  correctAnswers++;
} else {
  alert("Incorrect.");
}

// Q2
let question2 = prompt("What is 5 x 3?");
if (normalizeInput(question2) === "15") {
  alert("Correct!");
  correctAnswers++;
} else {
  alert("Incorrect.");
}

// Q3
let question3 = prompt("What is 10 - 7?");
if (normalizeInput(question3) === "3") {
  alert("Correct!");
  correctAnswers++;
} else {
  alert("Incorrect.");
}

// Q4
let question4 = prompt("What is 8 devided by 2?");
if (normalizeInput(question4) === "4") {
  alert("Correct!");
  correctAnswers++;
} else {
  alert("Incorrect.");
}

// Q 5
let question5 = prompt("What is 6 x 6?");
if (normalizeInput(question5) === "36") {
  alert("Correct!");
  correctAnswers++;
} else {
  alert("Incorrect.");
}

// results
alert(
  `You answered ${correctAnswers} out of 5 mathematics questions correctly.`
);
("use strict");

function toggleImageVisibility() {
  let image = document.getElementById("myImage");
  if (image.style.display === "none" || image.style.display === "") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}

document
  .getElementById("InAndOut")
  .addEventListener("click", toggleImageVisibility);
