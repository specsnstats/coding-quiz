/*
- need a dynamic page that starts with the words "Quiz Challenge" on the screen with some basic words
    - the starting dynamic page needs a "start quiz" button
        - create a dynamic button that triggers the series of questions
    - the starting dynamic page needs a timer
        -create a timer that starts at 20s, and increments down 1 each second
    - the starting dynamic page needs a "view highscores" button
        -create a button that says "view highscores"
        - when the button is pressed, it takes me to the highscores page
    - when I click the "start quiz" button, the timer starts

- when I click the "start quiz" button, the first dynamic page goes away and is replaced with a question page, asking a question:   
    - create a series of questions that are in the form of multiple choice
        - create a list of 4 possible answers to each question
        - when you click on the answers, it will generate text indicating either correct or incorrect
        - a score is kept depending on whether you answered correctly or incorrectly
    - create a function that puts each question on the page after answering
    - a text below the new question will indicate whether or not you answered the previous one correctly

- after I have finished answering all questions, a page with "all done!" and my final score tallied up is displayed
    - create a variable that keeps track of my total score
    - after I am done answering all questions, the timer is stopped, the end time is added to my score, and the score is displayed
    - a text prompt for my initials displays on screen, along with a submit button that takes me to the leaderboard page

- have a leaderboard page that has a stored list of all the times, ordered by highest score. 
    - store my initials and score to the local memory
    - push my initials and score to an unordered list
    - order the unordered list from highest to lowest score
    - have a button with the option to clear the high score
    - have a button withy the option to go back to the first page

- when i press "Start Quiz" again, I am able to replay the quiz and set a new score that is also saved on the leaderboard along with my previous score, in the correct order. 