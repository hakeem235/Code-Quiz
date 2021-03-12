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