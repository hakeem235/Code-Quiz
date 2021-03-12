// Variabled Section 
// Start Screen variables
var startBtn = document.getElementById("start-btn");
var startQuiz = document.getElementById("start__quiz");

// Quiz screen variables
var questionScetion = document.getElementById("question-section");
var questionTitle = document.getElementById("q-title");
var choicesEl = document.getElementById("choices");
var rightWrongEl = document.getElementById("right-wrong");
var buttonsEL = document.getElementById("buttons");

// End Screen Variables
var endScreen = document.getElementById("end__quiz");
var userName = document.getElementById("user-name");
var nameSubmit = document.getElementById("name-submit");

// Final Score Screen
var finalScoreEl = document.getElementById("final-score");
var highScoreScreen = document.getElementById("high_score_page");

// Timer variable
var timerDisplay = document.getElementById("timer");

var ans= 0;
var correct = [];
var secondsLeft = 60;
var timerInterval;

// Quiz Questions Section 
var questions = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    choices: ["1.  JavaScript is a lightweight, interpreted programming languag", 
    "2. JavaScript is designed for creating network-centric applications.", 
    "3. JavaScript is complementary to and integrated with Java.",
    "4.  All of the above."],
    correctAns: "4.  All of the above.",
  },
  {
    question: " Which of the following is the correct syntax to redirect a url using JavaScript?",
    choices: ["1. document.location='http://www.newlocation.com'; ", 
    "2. browser.location='http://www.newlocation.com'; ", 
    "3. navigator.location='http://www.newlocation.com'; ",
    "4. window.location='http://www.newlocation.com'; "],
    correctAns: "4. window.location='http://www.newlocation.com';",
  },
  {
    question: "Which built-in method returns the character at the specified index?",
    choices: ["1. characterAt()", 
    "2. getCharAt()", 
    "3. charAt()",
    "4.  Non of the above."],
    correctAns: "3. charAt()",
  },
  {
    question: "Which built-in method returns the calling string value converted to lower case?",
    choices: ["1. toLowerCase()", 
    "2. toLower() ", 
    "3. changeCase(case)",
    "4. None of the above."],
    correctAns: "1. toLowerCase()  ",
  },
  {
    question: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
    choices: ["1. concat() ", 
    "2. match() ", 
    "3. replace() ",
    "4. search() "],
    correctAns: "4. search()",
  }
];

// Function Section 

// Start the quiz function 

function startQ() {
  startQuiz.setAttribute("style", "display: none;"); // hiding the start screen
  ceartQuestion(); // building the question card
  questionScetion.setAttribute("style", "visibility: visible;"); // showing the question card
  startTimer(); // starting the timer when the button is pressed
}

// // When start button is clicked, the quiz will begin!
startBtn.addEventListener("click", startQ);


// // Building the question card
function ceartQuestion() {
  var currentQuestion = questions[ans];

  questionTitle.textContent = currentQuestion.question; // Putting each question in the title

  choicesEl.innerHTML = ""; // Creating space inside the 'choices' element

  currentQuestion.choices.forEach(function (choice, i) {
    var choices = document.createElement("button"); // creating buttons for each choice
    choices.setAttribute("class", "choice"); // setting class to choice to connect to css styling
    choices.setAttribute("value", choice); // setting inside value for each
    choices.textContent = choice; // displaying the text of each value
    choicesEl.appendChild(choices); // attaching each choice to one another
    choices.onclick = decisionClick; // registering "click" for user decicision
  });
}



// Determining function for user answer picks
function decisionClick() {
  // If user chooses the right answer...
  if (this.value === questions[ans].correctAns) {
    
    rightWrongEl.setAttribute("class", "right");
    rightWrongEl.setAttribute("style", "visibility: visible;");
    rightWrongEl.textContent = "Right!"; // "Right!" is displayed on the screen
    secondsLeft += 10; // 10 seconds is added to the timer

// If user chooses the wrong answer...
  } else {
    
    rightWrongEl.setAttribute("class", "wrong");
    rightWrongEl.setAttribute("style", "visibility: visible;");
    rightWrongEl.textContent = "Wrong"; // "Wrong" is displayed on the screen
    secondsLeft -= 10; // 10 seconds is subtracted from the timer
  }
  ans++;
  if (ans === questions.length) {
    // if the user answers all of the questions..
    gameOver(); // ...the game ends...
  } else {
    // ...otherwise...
    ceartQuestion(); // ...it continues.
  }
}


// Timer function
function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--; // decrements time left
    timerDisplay.textContent = secondsLeft; // displays remaining time on screen

    if (secondsLeft <= 0) {
      // if the timer is less than or equal to zero...
      clearInterval(timerInterval); // timer is clearned and...
      return gameOver(); // ..."Game Over" function is fired.
    }
  }, 1000);
}



// End Quiz Screen
function gameOver() {
  startQuiz.setAttribute("style", "display: none;"); // hiding the question card
  endScreen.setAttribute("style", "visibility: visible;"); // showing End Screen Card
  clearInterval(timerInterval); // clearing the timer
  timerDisplay.textContent = 0; // setting timer display to zero
  if (secondsLeft < 0) {
    // preventing the time to go below zero
    secondsLeft = 0;
  }
  finalScoreEl.textContent = secondsLeft; // displays time left on the clock as User Score
}


// // High Score Screen

nameSubmit.addEventListener(
  "submit",
  function (event) {
    //Add initials to score array
    finalScoreEl.innerHTML +=
      "<li>" + userName.value + secondsLeft + "</li>";
    // Clearing Input
    userName.value = "";
    // Saving scores to local storage
    localStorage.setItem("highScoreList", finalScoreEl.innerHtml);
  },
  false
);

var saved = localStorage.getItem("highScoreList");

// If there are any saved items, update our list
if (saved) {
  finalScoreEl.innerHTML = saved;
}

nameSubmit.addEventListener("click", function () {
  // listening for that submit click
  endScreen.setAttribute("style", "display: none;"); // hiding the endScreen
  highScoreScreen.setAttribute("style", "visibility: visible;"); // showing the highScore Screen
});

var scores = []; // creating empty array to put high scores

// save the score in the LocalStorage
function saveScore() {
  var user_Initials = userName.value; // saving the initials from the form
  localStorage.setItem("scores", JSON.stringify(scores));
}

// // 
// function buildScoreCard() {
//   finalScoreEl.innerHTML = ""; // Creating space inside the 'high score' element on HTML

//   finalScoreEl.finalScore.forEach(function (scores, i) {
//     var userScore = userInitials + secondsLeft; // defining the highScore as user's initials w/ score
//     var finalScore = document.createElement("button"); // creating buttons for high score

//     finalScore.setAttribute("class", "user score"); // setting class to choice to connect to css styling
//     finalScore.setAttribute("value", newScore); // setting value to initials
//     finalScore.textContent = newScore; // displaying the text to initials & their score
//     finalScore.appendChild(userScore); // attaching each high score to another
//   });
// }
