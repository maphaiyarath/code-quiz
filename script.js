var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz");
var scores = document.getElementById("highscores");
var isPlaying = false;
var timeEl = document.getElementById("time");
var isQuestionAnswered = false;
var questionIndex = 0;

var questions = [
    {q: 'What does the terminal command \'cd\' do?', a: 'Change the directory', choices: ['Change the directory', 'Copy the directory', 'Play a CD']},
    {q: 'Which style positions elements relative to their nearest positioned ancestor?', a: 'Absolute', choices: ['Absolute', 'Relative', 'Fixed']}
];

function clearScores() {
    scores.innerHTML = '';
}

function startQuiz() {
    // clear start quiz info
    welcome.setAttribute("style", "display: none;");
    quiz.setAttribute("style", "display: block");

    startTimer();
    
    selectNextQ();

    
        
}

function selectNextQ() {
    if (questionIndex !== questions.length) {
        quiz.innerHTML = '';
        // create a card for each question
        var questionEl = document.createElement("div");
        questionEl.setAttribute("class", "card");

        // card's title will be the question
        var questionQ = document.createElement("h3");
        questionQ.setAttribute("class", "card-title");
        questionQ.textContent = questions[questionIndex].q;
        questionEl.append(questionQ);

        quiz.append(questionEl);

        // card's body will be the choices
        for (var i = 0; i < questions[questionIndex].choices.length; i++) {
            var choice = document.createElement("button");
            choice.setAttribute("class", "btn btn-primary");
            choice.setAttribute("type", "button");
            choice.setAttribute("onclick", "chooseAnswer()");
            choice.textContent = questions[questionIndex].choices[i];
            console.log(choice.textContent)
            quiz.append(choice);
        }

    } else {
        console.log('Done!');
    }
}

function chooseAnswer() {
    
    isQuestionAnswered = true;
    questionIndex++;
    // console.log(questionIndex);
    selectNextQ();
}

function validate() {

}

function startTimer() {
    var timeLeft = 3; // parseInt(timeEl.textContent);
    if (timeLeft > 0) {
        setInterval(function() {
            timeEl.textContent = timeLeft;
            timeLeft--;
            if (timeLeft <= 0) {
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