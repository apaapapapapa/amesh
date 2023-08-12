let currentAnswer = "";

const questionData = {
    factorization: [
        { "q": "x^2 - 4", "a": "(x + 2)(x - 2)" },
        { "q": "x^2 - 1", "a": "(x + 1)(x - 1)" }
    ],
    expansion: [
        { "q": "(x + 2)(x - 2)", "a": "x^2 - 4" },
        { "q": "(x + 1)(x - 1)", "a": "x^2 - 1" }
    ]
};

function getQuestions(unit) {
    return questionData[unit];
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    const units = Array.from(checkboxes).map(cb => cb.value);
    if (!units.length) {
        alert("少なくとも1つの単元を選択してください！");
        return;
    }

    const unit = getRandomElement(units);
    const questions = getQuestions(unit);
    const question = getRandomElement(questions);

    document.getElementById("questionArea").textContent = `$$${question.q}$$`;
    currentAnswer = `$$${question.a}$$`;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "questionArea"]);

    deleteAnswer();
}

function showAnswer() {
    document.getElementById("answerArea").textContent = currentAnswer;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "answerArea"]);
}

function deleteAnswer() {
    document.getElementById("answerArea").textContent = "";
}

