const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");
const scoreText = document.getElementById("score-text");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    questionCounter.textContent = "Pergunta " + (currentQuestion + 1) + " de " + questions.length;
    progressBar.style.width = ((currentQuestion) / questions.length) * 100 + "%";
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "w-full bg-gray-100 border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition";
        btn.addEventListener("click", () => checkAnswer(index, btn));
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btn) {
    const correctIndex = questions[currentQuestion].correct;
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach((b, i) => {
        if (i === correctIndex) b.classList.add("correct");
        else if (i === selectedIndex) b.classList.add("incorrect");
        b.disabled = true;
    });
    if (selectedIndex === correctIndex) score++;
    setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    const percentage = Math.round((score / questions.length) * 100);
    scoreText.textContent = `Você acertou ${score} de ${questions.length} (${percentage}%)`;
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
