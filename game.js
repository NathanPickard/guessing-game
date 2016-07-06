var userName = prompt("Please tell me your name:", "Enter here");
alert("Hello " + userName + "!  Welcome to my website.  Enjoy!");
console.log("User Name: " + userName);
console.log("Get a guess from the user.");



var guess1 = prompt("Did I live in Tennessee for 15 years?", "");
while (guess1 == "Y" || guess1 == "y" || guess1 == "N" || guess1 == "n") {
  alert("Please enter 'yes' or 'no'");
  var guess1 = prompt("Did I live in Tennessee for 15 years?", "");
}
if (guess1.toLowerCase() == "yes") {
  alert("That is correct!");
  var correctAnswers = 1;
}
 else {
  alert("Incorrect, I actually lived south of Nashville for 15 years!");
}
console.log(userName + " guessed: " + guess1 + " for question 1");

var guess2 = prompt("Are anchovies my favorite pizza topping?");
if (guess2.toLowerCase() == "no") {
  alert("You got it right!  My favorite pizza topping is bacon!");
  correctAnswers++;
} else {
  alert("Nope! Not quite, I do enjoy anchovies on my pizza though!")
}
console.log(userName + " guessed: " + guess2 + " for question 2");

var guess3 = prompt("Have I ever hiked to the summit of Middle Sister?");
if (guess3.toLowerCase() == "yes") {
  alert("You are correct! I started the hike in mid-afternoon and hiked back down in the evening!");
  correctAnswers++;
} else {
  alert("Actually, I have, " + userName + "!  I really recommend hiking up to the summit yourself!");
}
console.log(userName + " guessed: " + guess3 + " for question 3");

alert("You answered " + correctAnswers + " questions out of 3 correct, " + userName);


for (var count = 1; count <= 4; count++) {

}
