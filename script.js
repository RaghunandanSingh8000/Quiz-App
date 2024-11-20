function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value
    };

    let score = 0;

    if (answers.q1 === "Paris") {
        score++;
    }

    if (answers.q2 === "Jupiter") {
        score++;
    }

    if (answers.q3 === "William Shakespeare") {
        score++;
    }

    displayResults(score);
}

function displayResults(score) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `Your score: ${score}/3`;
}