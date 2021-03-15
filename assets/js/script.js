// Variabled Section
// Start Screen variables
var startBtn = document.getElementById("start-btn");
var startQuiz = document.getElementById("start__quiz");

// Quiz screen variables
var questionScetion = document.getElementById("question-section");
var questionTitle = document.getElementById("q-title");
var choicesEl = document.getElementById("choices");
var rightWrongEl = document.getElementById("right-wrong");

// End Screen Variables
var endScreen = document.getElementById("end__quiz");
var userName = document.getElementById("user-name");
var nameSubmit = document.getElementById("name-submit");

// Final Score Screen
var finalScoreEl = document.getElementById("final-score");
var highScoreScreen = document.getElementById("high_score_page");
var highScoreScreenEL = document.getElementById("high_score_screen")
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");

// Timer variable
var timerDisplay = document.getElementById("timer");

var ans = 0;
var correct = [];
var secondsLeft = 60;
var timerInterval;

// Quiz Questions Section
var questions = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    choices: [
      "1.  JavaScript is a lightweight, interpreted programming languag",
      "2. JavaScript is designed for creating network-centric applications.",
      "3. JavaScript is complementary to and integrated with Java.",
      "4.  All of the above.",
    ],
    correctAns: "4.  All of the above.",
  },
  {
    question:
      " Which of the following is the correct syntax to redirect a url using JavaScript?",
    choices: [
      "1. document.location='http://www.newlocation.com'; ",
      "2. browser.location='http://www.newlocation.com'; ",
      "3. navigator.location='http://www.newlocation.com'; ",
      "4. window.location='http://www.newlocation.com'; ",
    ],
    correctAns: "4. window.location='http://www.newlocation.com';",
  },
  {
    question:
      "Which built-in method returns the character at the specified index?",
    choices: [
      "1. characterAt()",
      "2. getCharAt()",
      "3. charAt()",
      "4.  Non of the above.",
    ],
    correctAns: "3. charAt()",
  },
  {
    question:
      "Which built-in method returns the calling string value converted to lower case?",
    choices: [
      "1. toLowerCase()",
      "2. toLower() ",
      "3. changeCase(case)",
      "4. None of the above.",
    ],
    correctAns: "1. toLowerCase()  ",
  },
  {
    question:
      "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
    choices: ["1. concat() ", "2. match() ", "3. replace() ", "4. search() "],
    correctAns: "4. search()",
  },
];

// Function Section

// Start the quiz function
function startQ() {
  startQuiz.style.display = "none";
  ceartQuestion();
  questionScetion.style.visibility = "visible";
  startTimer();
}

// Ceart Question Function 
function ceartQuestion() {
  var currentQuestion = questions[ans];
  questionTitle.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choices = document.createElement("button");
    choices.setAttribute("class", "choice");
    choices.setAttribute("value", choice);
    choices.textContent = choice;
    choicesEl.appendChild(choices);
    choices.onclick = decisionClick;
  });
}

// Chose Question 
function decisionClick() {
  if (this.value === questions[ans].correctAns) {
    rightWrongEl.setAttribute("class", "right");
    rightWrongEl.style.visibility = "visible";
    rightWrongEl.textContent = "Right!";
    secondsLeft += 10;
  } else {
    rightWrongEl.setAttribute("class", "wrong");
    rightWrongEl.style.visibility = "visible"
    rightWrongEl.textContent = "Wrong";
  }

  ans++;
  // check if the ans = the number of the qustion 
  if (ans === questions.length) {
    questionScetion.setAttribute("style", "display: none;");
    gameOver();
  } else {
    ceartQuestion();
  }
}

// Timer function
function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerDisplay.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      return gameOver();
    }
  }, 1000);
}

// End Quiz Screen
function gameOver() {
  startQuiz.style.display = "none";
  endScreen.style.visibility = "visible";
  clearInterval(timerInterval);
  timerDisplay.textContent = 0;
  if (secondsLeft < 0) {
    secondsLeft = 0;
  }
  finalScoreEl.textContent = secondsLeft;
}

// save Score function 
function saveScore() {
  var user_Initials = userName.value;
  if (user_Initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("scores")) || [];
    var newScore = {
      score: secondsLeft,
      name: user_Initials,
    };
    highScores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(highScores));

  }
  displayHighScore();
}

// function for get the score from the local Storage
function displayHighScore() {
  var highScores = JSON.parse(localStorage.getItem("scores")) || [];
  console.log(highScores);
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  highScores.forEach(function (score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.name + " - " + score.score;
    var loTag = document.getElementById("final_score");
    loTag.appendChild(liTag);
  });
  endScreen.setAttribute("style", "display: none;");
  highScoreScreenEL.style.visibility = "visible"
}

// function for show the high using view high score Btn
function showHighScroe() {
  startQuiz.style.display = "none";
  questionScetion.style.display = "none";
  endScreen.style.display = "none";
  highScoreScreenEL.style.visibility = "visible";
}


// Bottons Section

// Botton to start the quiz
startBtn.onclick = startQ;
// Botton to show the high score
highScoreScreen.onclick = showHighScroe;
// Botton to submit the the name and the score 
nameSubmit.onclick = saveScore;
// Start over botton




// clear high score





// function deleteList() {
//   displayHighScore.clear();
// }
// clearBtn.onclick = deleteList

// function startOver (){
//  startQ()
//  backBtn.onclick = startOver();
// }




// function startOver (){
//   startQ() 
//   }
//  backBtn.onclick = startOver();
// Clear the score 

// function clearAns (){
//    localStorage.clear("scores");
//    clearBtn.onclick = clearAns()
//}
