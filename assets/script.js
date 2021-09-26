quizTitleEl = document.querySelector("#quiz-title");
pBelowEl = document.querySelector("#p-below");
questionEl = document.querySelector("#question");
answers = document.querySelector("#answers");
answer1El = document.querySelector("#answer1");
answer2El = document.querySelector("#answer2");
answer3El = document.querySelector("#answer3");
answer4El = document.querySelector("#answer4");
buttonAlwaysEl = document.querySelector("#button-always");
timerEl = document.querySelector("#timer-count");
answerResultEl = document.querySelector("#answer-result");
scoreIndicatorEL = document.querySelector("#score-indicator");
scoreEl = document.querySelector("#score");
initialsSectionEl = document.querySelector("#initials-section");
submitInitialsEl = document.querySelector("#submit-initials");
initialsEl = document.querySelector("#initials");
scoresEl = document.getElementById("scores");

var secondsLeft = 20;
var timer;
//         - a score is kept depending on whether you answered correctly or incorrectly
//     - create a variable that keeps track of my total score
var userScore = 0;

// - need a dynamic page that starts with the words "Quiz Challenge" on the screen with some basic words.
var page = window.location.href;
console.log(page);
if (page.includes("index")) {
  buttonAlwaysEl.addEventListener("click", question1);
}

//         -create a timer that starts at 20s, and increments down 1 each second
function countdown() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timer);
      timeUp();
      console.log("time!");
    }
  }, 1000);
}
console.log(userScore);
// - when I click the "start quiz" button, the first dynamic page goes away and is replaced with a question page, asking a question:
function question1() {
  //     - when I click the "start quiz" button, the timer starts
  countdown();
  // when I press "start quiz", the title and sub text go away
  quizTitleEl.style.display = "none";
  pBelowEl.style.display = "none";
  // and the button goes away
  buttonAlwaysEl.style.display = "none";
  // question and options appear
  questionEl.style.display = "block";
  answers.style.display = "block";
  //         - when you click on the answers, it will generate text indicating either correct or incorrect
  answer1El.addEventListener("click", q1Correct);
  answer2El.addEventListener("click", q1Incorrect);
  answer3El.addEventListener("click", q1Incorrect);
  answer4El.addEventListener("click", q1Incorrect);
  // answer2El.addEventListener("click", q1Incorrect)

  console.log(answer1El);
}
function q1Correct() {
  questionEl.textContent = "What is the protagonists weapon of choice?";
  answer1El.textContent = "A stick";
  answer2El.textContent = "Master Sword";
  answer3El.textContent = "Bug Net";
  answer4El.textContent = "Ocarina";
  answerResultEl.textContent = "Yes! You got it Right!";
  userScore += 25;
  console.log(userScore);
  // remove previous click event listeners
  answer1El.removeEventListener("click", q1Correct);
  answer2El.removeEventListener("click", q1Incorrect);
  answer3El.removeEventListener("click", q1Incorrect);
  answer4El.removeEventListener("click", q1Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", q2Incorrect);
  answer2El.addEventListener("click", q2Correct);
  answer3El.addEventListener("click", q2Incorrect);
  answer4El.addEventListener("click", q2Incorrect);
}

function q1Incorrect() {
  // change content of question/answers
  questionEl.textContent = "What is the protagonists weapon of choice?";
  answer1El.textContent = "A stick";
  answer2El.textContent = "Master Sword";
  answer3El.textContent = "Bug Net";
  answer4El.textContent = "Ocarina";
  // result of last question being wrong
  answerResultEl.textContent = "No! You got it Wrong!";
  // remove previous click event listeners
  answer1El.removeEventListener("click", q1Correct);
  answer2El.removeEventListener("click", q1Incorrect);
  answer3El.removeEventListener("click", q1Incorrect);
  answer4El.removeEventListener("click", q1Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", q2Correct);
  answer2El.addEventListener("click", q2Incorrect);
  answer3El.addEventListener("click", q2Incorrect);
  answer4El.addEventListener("click", q2Incorrect);
}
function q2Correct() {
  questionEl.textContent =
    "Who is the antagonist in The Legend of Zelda: Breath of the Wild?";
  answer1El.textContent = "Ganon";
  answer2El.textContent = "Skull Kid";
  answer3El.textContent = "Zelda";
  answer4El.textContent = "Vaati";
  answerResultEl.textContent = "Yes! You got it Right!";
  userScore += 25;
  console.log(userScore);
  // remove previous click event listeners
  answer1El.removeEventListener("click", q2Correct);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", q3Correct);
  answer2El.addEventListener("click", q3Incorrect);
  answer3El.addEventListener("click", q3Incorrect);
  answer4El.addEventListener("click", q3Incorrect);
}

function q2Incorrect() {
  // change content of question/answers
  questionEl.textContent =
    "Who is the antagonist in The Legend of Zelda: Breath of the Wild?";
  answer1El.textContent = "Ganon";
  answer2El.textContent = "Skull Kid";
  answer3El.textContent = "Zelda";
  answer4El.textContent = "Vaati";
  // result of last question being wrong
  answerResultEl.textContent = "No! You got it Wrong!";
  // remove previous click event listeners
  answer1El.removeEventListener("click", q2Correct);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", q3Correct);
  answer2El.addEventListener("click", q3Incorrect);
  answer3El.addEventListener("click", q3Incorrect);
  answer4El.addEventListener("click", q3Incorrect);
}
function q3Correct() {
  questionEl.textContent = "What is the antagonist's Weapon of Choice?";
  answer1El.textContent = "He's an effing spider bro...";
  answer2El.textContent = "A REALLY BIG SWORD!";
  answer3El.textContent = "A Whip that shoots lightning";
  answer4El.textContent = "His Dance Moves";
  answerResultEl.textContent = "Yes! You got it Right!";
  userScore += 25;
  console.log(userScore);
  // remove previous click event listeners
  answer1El.removeEventListener("click", q2Correct);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", q4Incorrect);
  answer2El.addEventListener("click", q4Correct);
  answer3El.addEventListener("click", q4Incorrect);
  answer4El.addEventListener("click", q4Incorrect);
}

function q3Incorrect() {
  // change content of question/answers
  questionEl.textContent = "What is the antagonist's Weapon of Choice?";
  answer1El.textContent = "He's an effing spider bro...";
  answer2El.textContent = "A REALLY BIG SWORD!";
  answer3El.textContent = "A Whip that shoots lightning";
  answer4El.textContent = "His Dance Moves";
  // result of last question being wrong
  answerResultEl.textContent = "No! You got it Wrong!";
  // remove previous click event listeners
  answer1El.removeEventListener("click", q1Incorrect);
  answer2El.removeEventListener("click", q2Incorrect);
  answer3El.removeEventListener("click", q2Incorrect);
  answer4El.removeEventListener("click", q2Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", q4Correct);
  answer2El.addEventListener("click", q4Incorrect);
  answer3El.addEventListener("click", q4Incorrect);
  answer4El.addEventListener("click", q4Incorrect);
}

function q4Correct() {
  questionEl.textContent = "Who Wins in the End?";
  answer1El.textContent = "No one, its a messed up game";
  answer2El.textContent = "Protagonist";
  answer3El.textContent = "Antagonist";
  answer4El.textContent = "Everyone Wins!";
  answerResultEl.textContent = "Yes! You got it Right!";
  userScore += 25;
  console.log(userScore);
  // remove previous click event listeners
  answer1El.removeEventListener("click", q3Correct);
  answer2El.removeEventListener("click", q3Incorrect);
  answer3El.removeEventListener("click", q3Incorrect);
  answer4El.removeEventListener("click", q3Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", resultsPage);
  answer2El.addEventListener("click", resultsPage);
  answer3El.addEventListener("click", resultsPage);
  answer4El.addEventListener("click", resultsPage);
}

function q4Incorrect() {
  // change content of question/answers
  questionEl.textContent = "Who Wins in the End?";
  answer1El.textContent = "No one, its a messed up game";
  answer2El.textContent = "Protagonist";
  answer3El.textContent = "Antagonist";
  answer4El.textContent = "Everyone Wins!";
  // result of last question being wrong
  answerResultEl.textContent = "No! You got it Wrong!";
  // remove previous click event listeners
  answer1El.removeEventListener("click", q3Correct);
  answer2El.removeEventListener("click", q3Incorrect);
  answer3El.removeEventListener("click", q3Incorrect);
  answer4El.removeEventListener("click", q3Incorrect);
  // add new click event listeners
  answer1El.addEventListener("click", resultsPage);
  answer2El.addEventListener("click", resultsPage);
  answer3El.addEventListener("click", resultsPage);
  answer4El.addEventListener("click", resultsPage);
}

function resultsPage() {
  // stop the timer
  clearInterval(timer);
  // update userScore to reflect results
  scoreEl.textContent = userScore;
  // show/hide necessary html elements
  quizTitleEl.textContent = "All Done!";
  quizTitleEl.style.display = "block";
  questionEl.style.display = "none";
  answers.style.display = "none";
  answerResultEl.style.display = "none";
  scoreIndicatorEL.style.display = "flex";
  //   show text block for entering initials
  initialsSectionEl.style.display = "flex";
}

//   clicking the submit button saves your initials and score to the console, displays the initials with your score in the leaderboard
if (page.includes("index")) {
  submitInitialsEl.addEventListener("click", submitScore);
}

function submitScore() {
  // check to make sure there is something in the initials box
  if (initials.value.length == 0) {
    alert("Please Insert Initials in Text Box!");
    // send error saying "Please put something in the box!"
  } else {
    var initialsAndScore = {
        initials: initialsEl.value,
        score: userScore,
    }
    // grabbing the array from the Local Storage or creates a new one
    var highscoreArray = JSON.parse(localStorage.getItem("highscoreArray") || "[]");
    // pushes the new initialsAndScore value into the highscoreArray that was taken from local storage
    highscoreArray.push(initialsAndScore);
    // puts the highscoreArray BACK into localStorage, now with the new value
    localStorage.setItem("highscoreArray", JSON.stringify(highscoreArray));

    // send user to the highscores page
    location.href = "./highscores.html";
  }
}

function highscoresLoad() {
    clearHighscoresBtnEl= document.getElementById("#clear-highscores-btn")
    highscoresListEl = document.getElementById("#highscores-list")
    // grabs the array from Local Storage
  var highscoreArray = JSON.parse(localStorage.getItem("highscoreArray"));
  console.log(highscoreArray);
//   runs through each object in the array and creates a new div for each
    for (i=0; i < highscoreArray.length; i++) {
        var li = document.createElement("li",);
        console.log(li)
        li.textContent = JSON.stringify(highscoreArray[i]);
        console.log(li)
        document.body.appendChild(li)
    }
    console.log(clearHighscoresBtnEl)
}
// function that clears local storage when pressing the "Clear Highscores" button
function clearLocalStorage() {
    localStorage.clear();
    // refreshes page to show effect
    location.reload();

}
// if the timer runs out, it sends me to a "times up!" page with my score
function timeUp() {
  // stop the timer
  clearInterval(timer);
  // update userScore to reflect results
  scoreEl.textContent = userScore;
  // show/hide necessary html elements
  quizTitleEl.textContent = "Time is Up!";
  quizTitleEl.style.display = "block";
  questionEl.style.display = "none";
  answers.style.display = "none";
  answerResultEl.style.display = "none";
  scoreIndicatorEL.style.display = "flex";
  //   show text block for entering initials
  initialsSectionEl.style.display = "flex";
}
