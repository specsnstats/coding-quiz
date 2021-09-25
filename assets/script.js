quizTitleEl = document.querySelector("#quiz-title")
pBelowEl = document.querySelector("#p-below")
questionEl = document.querySelector("#question")
answers = document.querySelector("#answers")
answer1El = document.querySelector("#answer1")
answer2El = document.querySelector("#answer2")
answer3El = document.querySelector("#answer3")
answer4El = document.querySelector("#answer4")
buttonAlwaysEl = document.querySelector("#button-always")
timerEl = document.querySelector("#timer-count")

var secondsLeft = 20
var timer
//         - a score is kept depending on whether you answered correctly or incorrectly
var userScore = 0

// - need a dynamic page that starts with the words "Quiz Challenge" on the screen with some basic words. 
buttonAlwaysEl.addEventListener("click", question1)


//         -create a timer that starts at 20s, and increments down 1 each second
function countdown() {
    timer=setInterval(function() {
        secondsLeft --
        timerEl.textContent = secondsLeft
        if(secondsLeft === 0) {
            clearInterval(timer)
            console.log("time!")
        }
    }, 1000)
}

// - when I click the "start quiz" button, the first dynamic page goes away and is replaced with a question page, asking a question:
function question1() {
    //     - when I click the "start quiz" button, the timer starts
    countdown()
    // when I press "start quiz", the title and sub text go away
    quizTitleEl.style.display = "none"
    pBelowEl.style.display = "none"
    // and the button goes away
    buttonAlwaysEl.style.display = "none"
    // question and options appear
    questionEl.style.display = "block"
    answers.style.display = "block"
    //         - when you click on the answers, it will generate text indicating either correct or incorrect
    answer1El.addEventListener("click", q1a1(), true)
    // answer2El.addEventListener("click", q1a2(), true)
    // answer3El.addEventListener("click", q1a3(), true)
    // answer4El.addEventListener("click", q1a4(), true)
    function q1a1() {
        if (answer1El === true) {
            questionEl.textContent = "What is the protagonists weapon of choice?"
            answer1El.textContent = "A stick"
        }   
    }
}

//     - a text below the new question will indicate whether or not you answered the previous one correctly
//         - create a list of 4 possible answers to each question

// - after I have finished answering all questions, a page with "all done!" and my final score tallied up is displayed
//     - create a variable that keeps track of my total score
//     - after I am done answering all questions, the timer is stopped, the end time is added to my score, and the score is displayed
//     - a text prompt for my initials displays on screen, along with a submit button that takes me to the leaderboard page

// - have a leaderboard page that has a stored list of all the times, ordered by highest score. 
//     - store my initials and score to the local memory
//     - push my initials and score to an unordered list
//     - order the unordered list from highest to lowest score
//     - have a button with the option to clear the high score
//     - have a button withy the option to go back to the first page

// - when i press "Start Quiz" again, I am able to replay the quiz and set a new score that is also saved on the leaderboard along with my previous score, in the correct order. 
