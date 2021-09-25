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
initialsSectionEl = document.querySelector("#initials-section")
submitInitialsEl= document.querySelector("#submit-initials")

var secondsLeft = 20;
var timer;
//         - a score is kept depending on whether you answered correctly or incorrectly
//     - create a variable that keeps track of my total score
var userScore = 0;

// - need a dynamic page that starts with the words "Quiz Challenge" on the screen with some basic words.
buttonAlwaysEl.addEventListener("click", question1);

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

// - after I have finished answering all questions, a page with "all done!" and my final score tallied up is displayed
//     - after I am done answering all questions, the timer is stopped, the end time is added to my score, and the score is displayed
//     - a text prompt for my initials displays on screen, along with a submit button that takes me to the leaderboard page
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
  initialsSectionEl.style.display = "flex"
}

//   clicking the submit button saves your initials and score to the console, displays the initials with your score in the leaderboard

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
  initialsSectionEl.style.display = "flex"
}
// - have a leaderboard page that has a stored list of all the times, ordered by highest score.
//     - store my initials and score to the local memory
//     - push my initials and score to an unordered list
//     - order the unordered list from highest to lowest score
//     - have a button with the option to clear the high score
//     - have a button withy the option to go back to the first page

// - when i press "Start Quiz" again, I am able to replay the quiz and set a new score that is also saved on the leaderboard along with my previous score, in the correct order.
