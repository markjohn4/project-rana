// Editable Questions and Answers
const quizData = [
  { question: "The sky is blue.", correct: true },
  { question: "Cats can fly.", correct: false },
  { question: "JavaScript is a programming language.", correct: true },
  { question: "HTML stands for HyperText Markdown Language.", correct: false },
];

// Render Quiz
function renderQuiz() {
  const quizContainer = document.getElementById("quiz");
  quizData.forEach((item, index) => {
    const questionHTML = `
      <div class="question">
        <p>${index + 1}. ${item.question}</p>
        <label>
          <input type="radio" name="question${index}" value="true"> True
        </label>
        <label>
          <input type="radio" name="question${index}" value="false"> False
        </label>
      </div>
    `;
    quizContainer.innerHTML += questionHTML;
  });
}

// Calculate Results
function calculateResults() {
  let score = 0;
  quizData.forEach((item, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === String(item.correct)) {
      score++;
    }
  });
  document.getElementById("results").textContent = `You scored ${score} out of ${quizData.length}`;
}

// Event Listeners
document.getElementById("submit").addEventListener("click", calculateResults);

// Initialize Quiz
renderQuiz();

document.addEventListener("DOMContentLoaded", function () {
  const exitButton = document.getElementById("exit");

  exitButton.addEventListener("click", function () {
    const confirmExit = confirm("Are you sure you want to exit the game?");
    if (confirmExit) {
      window.location.href = "Snacf.html"; // Redirect to another page
    }
  });
});
