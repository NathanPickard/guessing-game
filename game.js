var userName = prompt("Please tell me your name:", "Enter here");
alert("Hello " + userName + "!  Welcome to my website.  Enjoy!");
console.log("User Name: " + userName);
console.log("Get a guess from the user.");



var guess1 = prompt("Did I live in Tennessee for 15 years?", "");
while (guess1 == "Y" || guess1 == "y" || guess1 == "YES" || guess1 == "N" || guess1 == "n" || guess1 == "NO") {
  alert("Please enter 'yes' or 'no'");
  var guess1 = prompt("Did I live in Tennessee for 15 years?", "");
}
if (guess1.toLowerCase() == "yes") {
  alert("That is correct!");
  var correctAnswers = 1;
}
 else {
  alert("Incorrect, I actually lived south of Nashville for 15 years!");
  var correctAnswers = 0;
}
console.log(userName + " guessed: " + guess1 + " for question 1");



var guess2 = prompt("Are anchovies my favorite pizza topping?");
while (guess2 == "Y" || guess2 == "y" || guess2 == "YES" || guess2 == "N" || guess2 == "n" || guess2 == "NO") {
  alert("Please enter 'yes' or 'no'");
  var guess2 = prompt("Are anchovies my favorite pizza topping?");
}
if (guess2.toLowerCase() == "no") {
  alert("You got it right!  My favorite pizza topping is bacon!");
  correctAnswers++;
} else {
  alert("Nope! Not quite, I do enjoy anchovies on my pizza though!")
}
console.log(userName + " guessed: " + guess2 + " for question 2");

var guess3 = prompt("Have I ever hiked to the summit of Middle Sister?");
while (guess3 == "Y" || guess3 == "y" || guess3 == "YES" || guess3 == "N" || guess3 == "n" || guess3 == "NO") {
  alert("Please enter 'yes' or 'no'");
  var guess3 = prompt("Have I ever hiked to the summit of Middle Sister?");
}
if (guess3.toLowerCase() == "yes") {
  alert("You are correct! I started the hike in mid-afternoon and hiked back down in the evening!");
  correctAnswers++;
} else {
  alert("Actually, I have, " + userName + "!  I really recommend hiking up to the summit yourself!");
}
console.log(userName + " guessed: " + guess3 + " for question 3");


var guess4 = prompt("Guess my favorite number from 1 to 10!");
while (guess4 != 8) {
  if (guess4 < 8) {
    alert("Your guess is too low, guess again!");

  } else {
    alert("Your guess is too high, guess again!");
  }
  var guess4 = prompt("Guess my favorite number from 1 to 10!");
}
if (guess4 == 8){
  alert("You are correct!");
  correctAnswers++;
}


alert("You answered " + correctAnswers + " questions out of 4 correct, " + userName + "!");
