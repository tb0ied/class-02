function normalizeInput(input) {
  return input.trim().toLowerCase();
}
let guest = prompt("What is your name");
if (guest) {
  alert("Hello, ${guest}!Welcome to my About Me page.");
} else {
  alert("Hello, visitor! Welcome to my About Me page.");
}

let question1 = prompt("Do you like programming? (yes/no)");
if (normalizeInput(question1) === "yes") {
  alert("Correct! I love programming too.");
} else {
  alert("Incorrect. I'm programming enthusiast!");
}
