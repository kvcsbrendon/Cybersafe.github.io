const quizData = {
    quiz1: [
        { question: "What is employee sabotage?", options: ["A management technique aimed at improving employee moreale.", "A form of industrial action commonly endorsed by trade unions.", "The deliberate act of damaging or undermining workplace operations by an employee.", "A training program to enhance employee productivity."], answer: "The deliberate act of damaging or undermining workplace operations by an employee." },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" }
    ],
    quiz2: [
        { question: "True or False: Employee sabotage is always driven by personal grievsnces or animosity.", options: ["True", "False"], answer: "False" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" }
    ],
    quiz3: [
        { question: "Which of the following scenario is an example of employee sabotage?", options: ["Accidently spilling coffee on important documents.", "Intentionally deleting files from a shared drive.", "Forgetting to submit a report on time due to being overwhelmed with other tasks.", "Altering the seetings on a colleague's computer as a prank, casuing temporary inconvenience."], answer: "Intentionally deleting files from a shared drive." },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Question?", options: ["A", "B", "C", "D"], answer: "A" }
    ],
};

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const restartButton = document.getElementById('restart');

let currentQuestion = 0;
let score = 0;
let currentQuiz = null;

function loadQuiz() {
    const selectedQuiz = document.getElementById('quiz-select').value;
    currentQuiz = quizData[selectedQuiz];
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    restartButton.style.display = 'none';
}

function loadQuestion() {
    const currentQuizData = currentQuiz[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.innerText = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function selectAnswer(selectedOption) {
    if (!currentQuiz || currentQuestion >= currentQuiz.length) {
        return;
    }

    const currentQuizData = currentQuiz[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        feedbackElement.innerText = "Correct!";
        score++;
    } else {
        feedbackElement.innerText = "Incorrect. The correct answer is: " + currentQuizData.answer;
    }
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
        loadQuestion();
    } else {
        feedbackElement.innerText = "Quiz completed. Your score: " + score + " out of " + currentQuiz.length;
        restartButton.style.display = 'block';
    }
}

restartButton.addEventListener('click', () => {
    loadQuiz();
    restartButton.style.display = 'none';
});

document.getElementById('quiz-select').addEventListener('change', loadQuiz);

loadQuiz();