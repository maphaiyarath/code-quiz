var scoresEl = document.getElementById("highscores");

var scores = [];

function showScores() {

    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scores = storedScores;
    }

    // for 
    console.log(storedScores);
}

function clearScores() {
    scoreEl.innerHTML = '';
}

showScores();

/*

// display the choices as buttons
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

*/