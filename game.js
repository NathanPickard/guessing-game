
var userName = getUserName();

alert("Hello " + userName + "!  Welcome to my website.  Enjoy!");

var guess1 = prompt("Did I live in Tennessee for 15 years?", "");
getUserInput(guess1);
var showAnswer1 = document.getElementById("answer1");
var showPicture1 = document.getElementById("image1");
if (guess1.toLowerCase() == "yes") {
  showAnswer1.innerHTML =  guess1 + " is correct!";
  showPicture1.innerHTML = '<img src= "nashville-skyline.jpg"/>';
  var correctAnswers = 1;
} else {
  showAnswer1.innerHTML = "Incorrect, I actually lived south of Nashville for 15 years!";
  var correctAnswers = 0;
}

var guess2 = prompt("Are anchovies my favorite pizza topping?");
getUserInput(guess2);
var showAnswer2 = document.getElementById("answer2");
var showPicture2 = document.getElementById("image2");
if (guess2.toLowerCase() == "yes") {
  showAnswer2.innerHTML = "Nope! Not quite, I do enjoy anchovies on my pizza though!";
} else {
  showAnswer2.innerHTML = guess2 + " is the correct answer!  My favorite pizza topping is bacon!";
  showPicture2.innerHTML = '<img src="CIMG2912.jpg"/>';
  correctAnswers++;
}

var guess3 = prompt("Have I ever hiked to the summit of Middle Sister?");
getUserInput(guess3);
var showAnswer3 = document.getElementById("answer3");
var showPicture3 = document.getElementById("image3");
if (guess3.toLowerCase() == "yes") {
  showAnswer3.innerHTML = guess3 + " is the right answer!  I started the hike in mid-afternoon and hiked back down in the evening!";
  showPicture3.innerHTML = '<img src="middle-sister-07.23.11.jpg"/>';
  correctAnswers++;
} else {
  showAnswer3.innerHTML = "No is incorrect, " + userName + "!  I really recommend hiking up to the summit yourself!";
}

guessNumber();

var numberOfCorrectAnswers = document.getElementById("correctAnswers")
numberOfCorrectAnswers.innerHTML = "You answered " + correctAnswers + " questions out of 4 correct, " + userName + "!";

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
    var showAnswer4 = document.getElementById("answer4");
    showAnswer4.innerHTML = guess4 + " is correct, way to go!"
    correctAnswers++;
  }
}
