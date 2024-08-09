document.getElementById('r-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('main').style.display = 'block';

    const scores = [
        parseFloat(document.getElementById('mathScore').value),
        parseFloat(document.getElementById('englishScore').value),
        parseFloat(document.getElementById('yorubaScore').value),
        parseFloat(document.getElementById('gscScore').value),
        parseFloat(document.getElementById('govtScore').value)
    ];

    const rawScore = document.getElementsByClassName('rawScore');
    const grade = document.getElementsByClassName('grade');

    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        rawScore[i].innerText = scores[i];
        grade[i].innerText = getGrade(scores[i]);
        totalScore += scores[i];
    }

    const averageScore = totalScore / scores.length;
    document.getElementById('sum').innerText = totalScore;
    document.getElementById('finalGrade').innerText = getGrade(averageScore);
    document.getElementById('point').innerText = averageScore.toFixed(2); 
    document.getElementById('Position').innerText = getPosition(averageScore);
});

function getGrade(score) {
    if (score >= 70) return 'A';
    else if (score >= 60) return 'B';
    else if (score >= 50) return 'C';
    else if (score >= 45) return 'D';
    else if (score >= 40) return 'E';
    else return 'F';
}

function getPosition(averageScore) {
    if (averageScore >= 70) return '1st Position';
    else if (averageScore >= 60) return '2nd Position';
    else if (averageScore >= 50) return '3rd Position';
    else return 'Below Average';
}
