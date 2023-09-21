console.log("Hello Mr'a");

let userPoints = 0;

alert("Welcome to gues the number game");

let user = prompt("What is your name?");

while (!user) {
  user = prompt("You need to actually  tell me.");
}

if (user !== "Pat") {
  alert("Oh no, to Exit this room you will have to guess the number " + user);

  alert("Hello " + user + "! Would you like play a game?");

  let answer = 5;

  let guess = prompt("Guess the number (between 0 and 10):");

  let guesses = [];

  while (parseInt(guess) !== answer) {
    if (parseInt(guess) > 5) {
      guess = prompt("Too high. Guess the number (between 0 and 10 again):");
    } else if (parseInt(guess) < 5) {
      guess = prompt("Too low. Guess the number (between 0 and 10 again):");
    }
  }
}
