
var userName = getUserName();

alert("Hello " + userName + "!  Welcome to my website.  Enjoy!");

var guess1 = prompt("Did I live in Tennessee for 15 years?", "");
//while (guess1 == "Y" || guess1 == "y" || guess1 == "YES" || guess1 == "N" || guess1 == "n" || guess1 == "NO") {
//  alert("Please enter 'yes' or 'no'");
//  var guess1 = prompt("Did I live in Tennessee for 15 years?", "");
//}
getUserInput(guess1);
//if (guess1.toLowerCase() == "yes") {
//  alert("That is correct! Way to go!");
//  var correctAnswers = 1;
//}
//else {
// alert("Incorrect, I actually lived south of Nashville for 15 years!");
//  var correctAnswers = 0;
//}

var showAnswer1 = document.getElementById("answer1");
if (guess1.toLowerCase() == "yes") {
  showAnswer1.innerHTML =  guess1 + " is correct!";
  var correctAnswers = 1;
} else {
  showAnswer1.innerHTML = "Incorrect, I actually lived south of Nashville for 15 years!";
  var correctAnswers = 0;
}


var guess2 = prompt("Are anchovies my favorite pizza topping?");
getUserInput(guess2);
var showAnswer2 = document.getElementById("answer2");
if (guess2.toLowerCase() == "yes") {
  showAnswer2.innerHTML = "Nope! Not quite, I do enjoy anchovies on my pizza though!";
} else {
  showAnswer2.innerHTML = guess2 + " is the correct answer!  My favorite pizza topping is bacon!";
  correctAnswers++;
}
//while (guess2 == "Y" || guess2 == "y" || guess2 == "YES" || guess2 == "N" || guess2 == "n" || guess2 == "NO") {
//
//  var guess2 = prompt("Are anchovies my favorite pizza topping?");
//}
//if (guess2.toLowerCase() == "no") {
//  alert("You got it right!  My favorite pizza topping is bacon!");
//  correctAnswers++;
//} else {
//  alert("Nope! Not quite, I do enjoy anchovies on my pizza though!")
//}
//console.log(userName + " guessed: " + guess2 + " for question 2");



var guess3 = prompt("Have I ever hiked to the summit of Middle Sister?");
getUserInput(guess3);
var showAnswer3 = document.getElementById("answer3");
if (guess3.toLowerCase() == "yes") {
  showAnswer3.innerHTML = guess3 + " is the right answer!  I started the hike in mid-afternoon and hiked back down in the evening!";
  correctAnswers++;
} else {
  showAnswer3.innerHTML = "No is incorrect, " + userName + "!  I really recommend hiking up to the summit yourself!";
}
//while (guess3 == "Y" || guess3 == "y" || guess3 == "YES" || guess3 == "N" || guess3 == "n" || guess3 == "NO") {
//  alert("Please enter 'yes' or 'no'");
//  var guess3 = prompt("Have I ever hiked to the summit of Middle Sister?");
//}
//if (guess3.toLowerCase() == "yes") {
//  alert("You are correct! I started the hike in mid-afternoon and hiked back down in the evening!");
//  correctAnswers++;
//} else {
//  alert("Actually, I have, " + userName + "!  I really recommend hiking up to the summit yourself!");
//}

guessNumber();

alert("You answered " + correctAnswers + " questions out of 4 correct, " + userName + "!");

function getUserName() {
  var userName = "";
  while((userName.trim() == "") && (userName != null)) {
    var userName = prompt("Please tell me your name:", "Enter here");
  }
  if (userName != null) {
    return userName;
  } else {
    return "";
  }
}

function getUserInput(guess) {
  while (guess != "yes" && guess != "no") {
    alert("Please enter 'yes' or 'no'");
  }
  return guess;
}

function guessNumber(guess) {
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
    //alert("You are correct! Way to go!");
    var showAnswer4 = document.getElementById("answer4");
    showAnswer4.innerHTML = guess4 + " is correct, way to go!"
    correctAnswers++;
  }
}
