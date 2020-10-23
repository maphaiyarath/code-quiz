// WHEN all questions are answered or the timer reaches 0 THEN the game is over
// WHEN the game is over THEN I can save my initials and score

var alertsEl = document.querySelector(".alerts");
var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz justify-content-around text-center");
var doneEl = document.getElementById("done justify-content-around text-center");
var scores = document.getElementById("highscores");
var yourScore = document.getElementById("your-score");
var timeEl = document.getElementById("time");
var correctEl = document.querySelector(".alert-success");
var wrongEl = document.querySelector(".alert-danger");
var questionIndex = 0;
var score = 0;
var timeLeft = 0;



var questions = [
    {q: 'What does the terminal command \'cd\' do?', a: 'Change the directory', choices: ['Change the directory', 'Copy the directory', 'Play a CD']},
    {q: 'Which style positions elements relative to their nearest positioned ancestor?', a: 'Absolute', choices: ['Absolute', 'Relative', 'Fixed']}
];



function clearScores() {
    scores.innerHTML = '';
}

// start the quiz when the start button is clicked
function startQuiz() {
    // clear start quiz info
    welcome.setAttribute("style", "display: none;");
    quiz.setAttribute("style", "display: block");
    isPlaying = true;
    // the timer starts
    startTimer();
    
    // the user is presented with a question
    selectNextQ();
    
        
}

function selectNextQ() {
    quiz.innerHTML = '';
    if (questionIndex < questions.length) {
        

        // create a card for each question
        var questionEl = document.createElement("div");
        questionEl.setAttribute("class", "question");

        // card's title will be the question
        var questionQ = document.createElement("h3");
        questionQ.textContent = questions[questionIndex].q;
        questionEl.append(questionQ);

        quiz.append(questionEl);

        // card's body will be the choices
        for (var i = 0; i < questions[questionIndex].choices.length; i++) {
            var choice = document.createElement("button");
            choice.setAttribute("class", "btn btn-primary");
            choice.setAttribute("data-value", questions[questionIndex].choices[i]);
            choice.setAttribute("data-answer", questions[questionIndex].a);
            choice.setAttribute("type", "button");
            choice.setAttribute("onclick", "chooseAnswer(this)");
            choice.setAttribute("style", "display: block;");
            choice.textContent = questions[questionIndex].choices[i];

            questionEl.append(choice);
        }

    } else {
        quiz.setAttribute("style", "display: none");

        // when all questions are answered, then the game is over
        gameOver();
    }
}

function chooseAnswer(value) {
    // TODO: keep track of score
    if (value.dataset.value === value.dataset.answer) {
        correctEl.setAttribute("style", "display: block");
        wrongEl.setAttribute("style", "display: none");
        setTimeout(function() {
            correctEl.style.display = "none";
        }, 1000);
        score += 10;
        
    } else {
        // alert the user that they are wrong
        wrongEl.setAttribute("style", "display: block");
        correctEl.setAttribute("style", "display: none");
        setTimeout(function() {
            wrongEl.style.display = "none";
        }, 1000);

        // when the user answers a question incorrectly, then time is subtracted from the clock
        timeLeft -= 10;
    }



   questionIndex++;

    // when the user answers a question, then they are presented with another question
    selectNextQ();
}

function gameOver() {
    quiz.style.display = 'none';
    doneEl.style.display = 'block';
    // TODO: timer should pause when game over
    yourScore.textContent = 'Your final score is ' + score + '.';

}

function startTimer() {
    timeLeft = 20;
    if (timeLeft > 0) {
        setInterval(function() {
            timeEl.textContent = timeLeft;
            timeLeft--;
            if (timeLeft <= 4) {
                timeEl.style.color = 'red';
            }
            if (timeLeft <= 0) {
                // when the timer reaches 0, then the game is over
                gameOver();
                timeLeft = 0;

                
            }
        }, 1000);
        
    } else {
        timeEl.textContent = 0;
    }
}