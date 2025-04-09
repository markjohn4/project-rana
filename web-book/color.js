const questions = [
  {
    question: "What is the hexadecimal code for red?",
    answers: [
      { text: "#FF0000", correct: true },
      { text: "#00FF00", correct: false },
      { text: "#0000FF", correct: false },
      { text: "#FFFF00", correct: false },
    ],
  },
  {
    question: "What is the complementary color of blue?",
    answers: [
      { text: "Yellow", correct: false },
      { text: "Green", correct: false },
      { text: "Orange", correct: false },
      { text: "Orange-Red", correct: true },
    ],
  },
  {
    question: "Which color is made by mixing red and blue?",
    answers: [
      { text: "Purple", correct: true },
      { text: "Orange", correct: false },
      { text: "Green", correct: false },
      { text: "Brown", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a primary color?",
    answers: [
      { text: "Red", correct: false },
      { text: "Blue", correct: false },
      { text: "Yellow", correct: false },
      { text: "Green", correct: true },
    ],
  },
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  questionContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answersContainer.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
  });

  nextButton.classList.remove("hidden");
}

function showResult() {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

restartButton.addEventListener("click", startQuiz);

startQuiz();

document.addEventListener("DOMContentLoaded", function () {
  const exitButton = document.getElementById("exit-btn");
  const resultContainer = document.getElementById("result");
  const scoreText = document.getElementById("score");

  if (exitButton) {
    exitButton.addEventListener("click", function () {
      const confirmExit = confirm("Are you sure you want to exit the game?");
      if (confirmExit) {
        window.location.href = "Snacf.html"; // Redirect to home page
      }
    });
  }
});
