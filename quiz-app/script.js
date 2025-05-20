const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      {
        text: "Mumbai",
        correct: false,
      },
      {
        text: "New Delhi",
        correct: true,
      },
      {
        text: "Bhopal",
        correct: false,
      },
      {
        text: "Chennai",
        correct: false,
      },
    ],
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    answers: [
      {
        text: "Jawaharlal Nehru",
        correct: false,
      },
      {
        text: "Subhas Chandra Bose",
        correct: false,
      },
      {
        text: "Mahatma Gandhi",
        correct: true,
      },
      {
        text: "Sandar Vallabhbhai Patel",
        correct: false,
      },
    ],
  },
  {
    question: "Which river is considered the holiest in India?",
    answers: [
      {
        text: "Yamuna",
        correct: false,
      },
      {
        text: "Narmada",
        correct: false,
      },
      {
        text: "Godavari",
        correct: false,
      },
      {
        text: "Ganges",
        correct: true,
      },
    ],
  },
  {
    question: "In which year did India gain independence from British rule?",
    answers: [
      {
        text: "1947",
        correct: true,
      },
      {
        text: "1942",
        correct: false,
      },
      {
        text: "1950",
        correct: false,
      },
      {
        text: "1942",
        correct: false,
      },
    ],
  },
  {
    question: "What is the national animal of India?",
    answers: [
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Tiger",
        correct: true,
      },
      {
        text: "Lion",
        correct: false,
      },
      {
        text: "Peacock",
        correct: false,
      },
    ],
  },
];

const questionsElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


const selectAnswer = (e) => {
  selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
  } else {
    selectBtn.classList.add("incorrect");
  }
  console.log(selectBtn.dataset.correct);
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
      score++;
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
};

const showScore = () => {
  resetState();
  questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      console.log(button.dataset.correct);
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

startQuiz();