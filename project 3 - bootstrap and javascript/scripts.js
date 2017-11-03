function submitAnswer() {
    var total = 5;
    var score = 0;
    var q1 = document.forms.quizForm.q1.value;
    var q2 = document.forms.quizForm.q2.value;
    var q3 = document.forms.quizForm.q3.value;
    var q4 = document.forms.quizForm.q4.value;
    var q5 = document.forms.quizForm.q5.value;
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === null || eval('q' + i) === '') {
            alert('You missed question ' + i);
            return false;
        }
    }
    var questions = [q1, q2, q3, q4, q5];
    var answers = ["c", "c", "a", "b", "a"];
    for (i = 0; i <= total; i++) {
        if (answers[i] === questions[i]) {
            score++;

        }
    }

    if (score != total) {
        alert("You got " + score + " out " + total)
    }
    if (score === total) {
        alert("Congratulation your score " + score + " out of " + total);
    }
}