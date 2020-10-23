// WHEN I answer a question incorrectly THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0 THEN the game is over
// WHEN the game is over THEN I can save my initials and score


var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz justify-content-around text-center");
var doneEl = document.getElementById("done justify-content-around text-center");
var scores = document.getElementById("highscores");
var yourScore = document.getElementById("your-score");
var isPlaying = false;
var timeEl = document.getElementById("time");
var isQuestionAnswered = false;
var questionIndex = 0;
var score = 0;



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
    console.log(questionIndex, questions.length);
    if (questionIndex < questions.length) {
        quiz.innerHTML = '';

        // create a card for each question
        var questionEl = document.createElement("div");
        questionEl.setAttribute("class", "question");

        // card's title will be the question
        var questionQ = document.createElement("h3");
        //questionQ.setAttribute("class", "card-title");
        questionQ.textContent = questions[questionIndex].q;
        questionEl.append(questionQ);

        quiz.append(questionEl);

        // card's body will be the choices
        for (var i = 0; i < questions[questionIndex].choices.length; i++) {
            var choice = document.createElement("button");
            choice.setAttribute("class", "btn btn-primary");
            choice.setAttribute("type", "button");
            choice.setAttribute("onclick", "chooseAnswer()");
            choice.setAttribute("style", "display: block;");
            choice.textContent = questions[questionIndex].choices[i];

            var cardEl = document.querySelector(".question");
            questionEl.append(choice);
        }

    } else {
        quiz.setAttribute("style", "display: none");

        // when all questions are answered, then the game is over
        gameOver();
    }
}

function chooseAnswer() {
    // WHEN I answer a question incorrectly THEN time is subtracted from the clock
    // TODO: keep track of score
    
    isQuestionAnswered = true;
    questionIndex++;

    /*

    <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
    </div>
    <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
    </div>

    */

    // when the user answers a question, then they are presented with another question
    selectNextQ();
}

function gameOver() {
    doneEl.style.display = 'block';
    // TODO: timer should pause when game over
    yourScore.textContent = 'Your final score is ' + score + '.';

}

function startTimer() {
    var timeLeft = 3; // parseInt(timeEl.textContent);
    if (timeLeft > 0) {
        setInterval(function() {
            timeEl.textContent = timeLeft;
            timeLeft--;
            if (timeLeft <= 0) {
                // WHEN the timer reaches 0, THEN the game is over
                //gameOver();
                timeLeft = 0;

                
            }
        }, 1000);
        
    } else {
        timeEl.textContent = 0;
    }
}

/*

//<div class="card-header">Featured</div>
//<div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
//</div>

*/