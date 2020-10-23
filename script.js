var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz");
var scores = document.getElementById("highscores");
var isPlaying = false;
var timeEl = document.getElementById("time");

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

    // var if user has answered question yet
    var isQuestionAnswered = false;
    var questionCount = 0;

    for (var i = 0; i < questions.length; i++) {
        if (!isQuestionAnswered) {
            // create a card for each question
            var questionEl = document.createElement("div");
            questionEl.setAttribute("class", "card");

            // card's title will be the question
            var questionQ = document.createElement("h3");
            questionQ.setAttribute("class", "card-title");
            questionQ.textContent = questions[i].q;
            questionEl.append(questionQ);

            quiz.append(questionEl);
        }
        

        // card's body will be the choices
        // var questionQ = document.createElement("h3");
        // questionQ.setAttribute("class", "card-title");
        // questionQ.textContent = questions[i].q;
    }
}

function startTimer() {
    var timeLeft = 100; // parseInt(timeEl.textContent);
    if (timeLeft > 0) {
        setInterval(function() {
            timeLeft--;
            timeEl.textContent = timeLeft;
        }, 1000);
    }
}

/*

//<div class="card-header">Featured</div>
//<div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
//</div>

*/