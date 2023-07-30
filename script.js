
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 1
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        correctAnswer: 3
    },
    {
        question: "What does JS stand for?",
        options: ["JavaScript", "JavaServer", "Just Saying"],
        correctAnswer: 1
    }
];

// Function to display quiz questions
function displayQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    let quizContent = "";

    quizQuestions.forEach((questionData, questionIndex) => {
        const { question, options } = questionData;
        const optionsHtml = options
            .map((option, index) => `<input type="radio" name="question${questionIndex}" value="${index}">${option}<br>`)
            .join("");

        quizContent += `
            <div class="quiz-question">
                <h3>${question}</h3>
                <div class="quiz-options">
                    ${optionsHtml}
                </div>
            </div>
        `;
    });

    quizContainer.innerHTML = quizContent;
}

// Function to check and display quiz results
function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    const quizQuestionsElements = quizContainer.querySelectorAll(".quiz-question");
    let score = 0;

    quizQuestionsElements.forEach((questionElement, questionIndex) => {
        const selectedOption = questionElement.querySelector(`input[name="question${questionIndex}"]:checked`);
        if (selectedOption) {
            const selectedAnswer = Number(selectedOption.value);
            const correctAnswer = quizQuestions[questionIndex].correctAnswer;

            if (selectedAnswer === correctAnswer) {
                score++;
                questionElement.classList.add("correct");
            } else {
                questionElement.classList.add("incorrect");
            }
        }
    });

    const scoreElement = document.getElementById("quiz-score");
    scoreElement.textContent = `You scored ${score} out of ${quizQuestions.length}`;
}

// Function to reset quiz results
function resetQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    const scoreElement = document.getElementById("quiz-score");
    scoreElement.textContent = "";

    displayQuiz();
}

// Event delegation to handle quiz submission
document.addEventListener("click", (event) => {
    if (event.target.id === "submit-button") {
        showResults();
    } else if (event.target.id === "reset-button") {
        resetQuiz();
    }
});

// Display the quiz on page load
document.addEventListener("DOMContentLoaded", () => {
    displayQuiz();
});
