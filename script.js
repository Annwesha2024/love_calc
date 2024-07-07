function calculateLove() {
    var name1 = document.getElementById('name1').value.trim();
    var name2 = document.getElementById('name2').value.trim();

    if (name1 == "" || name2 == "") {
        alert("Please enter both names.");
        return;
    }

    var loveScore = calculateScore(name1, name2);

    displayResult(loveScore);
}

function calculateScore(name1, name2) {
    var combinedName = (name1 + "loves" + name2).toLowerCase();

    // Basic score calculation (just a simple example)
    var score = 0;
    for (var i = 0; i < combinedName.length; i++) {
        score += combinedName.charCodeAt(i);
    }

    // Normalize score to a percentage
    score = score % 101; // To keep it within 0-100

    return score;
}

function displayResult(score) {
    var resultElement = document.getElementById('result');

    if (score > 80) {
        resultElement.textContent = `Your love score is ${score}%. You are made for each other! ❤️`;
    } else if (score > 50) {
        resultElement.textContent = `Your love score is ${score}%. There's potential! 😊`;
    } else {
        resultElement.textContent = `Your love score is ${score}%. Maybe it's not meant to be? 🤔`;
    }
}
