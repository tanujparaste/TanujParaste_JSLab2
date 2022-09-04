// question repository
const questions = [
  {
    qtext: "What is the correct way to write a JavaScript array?",
    opt1: 'var colors = "red", "green", "blue"',
    opt2: 'var colors = (1:"red", 2:"green", 3:"blue")',
    opt3: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    opt4: 'var colors = ["red", "green", "blue"]',
    getCorrectAnswer: function () {
      return this.opt4;
    },
  },
  {
    qtext: "Which event occurs when the user clicks on an HTML element?",
    opt1: "onchange",
    opt2: "onclick",
    opt3: "onmouseclick",
    opt4: "onmouseover",
    getCorrectAnswer: function () {
      return this.opt2;
    },
  },
  {
    qtext: "Which of the following is not a reserved word in JavaScript?",
    opt1: "let",
    opt2: "undefined",
    opt3: "const",
    opt4: "var",
    getCorrectAnswer: function () {
      return this.opt2;
    },
  },
  {
    qtext: "How do you find the number with the highest value of x and y?",
    opt1: "ceil(x, y)",
    opt2: "Math.max(x, y)",
    opt3: "top(x, y)",
    opt4: "Math.ceil(x, y)",
    getCorrectAnswer: function () {
      return this.opt2;
    },
  },
  {
    qtext: "How does a FOR loop start?",
    opt1: "for i = 1 to 5",
    opt2: "for (i <= 5; i++)",
    opt3: "for (i = 0; i <= 5)",
    opt4: "for (i = 0; i <= 5; i++)",
    getCorrectAnswer: function () {
      return this.opt4;
    },
  },
];

// get all elements
const questionEl = document.querySelector(".question");
const opt1El = document.querySelector(".option-1");
const opt2El = document.querySelector(".option-2");
const opt3El = document.querySelector(".option-3");
const opt4El = document.querySelector(".option-4");

const progress = document.querySelector(".quiz-progress p");
const buttons = document.querySelectorAll("button");

// main logic
let score = 0;
let i = 0;
function loadQuestion() {
  questionEl.innerText = questions[i].qtext;
  opt1El.innerText = `A. ${questions[i].opt1}`;
  opt2El.innerText = `B. ${questions[i].opt2}`;
  opt3El.innerText = `C. ${questions[i].opt3}`;
  opt4El.innerText = `D. ${questions[i].opt4}`;
  progress.innerText = `Question ${i + 1} of ${questions.length}`;
}

buttons.forEach(function (ele) {
  ele.addEventListener("click", checkAnswerAndLoadNext);
});

function showResult() {
  const percentage = (score / questions.length) * 100;
  const questionBoard = document.querySelector(".question-board");
  questionBoard.innerText = `Your Score: ${score} / ${questions.length}

  Percentage: ${percentage}%`;
  questionBoard.style.fontSize = "1.25em";
  progress.innerText = "Result";
}

function checkAnswerAndLoadNext() {
  const userAnswer = this.innerText.substring(this.innerText.indexOf(" ") + 1);
  const correctAnswer = questions[i].getCorrectAnswer();
  if (userAnswer === correctAnswer) {
    score++;
  }
  i++;
  if (i <= questions.length - 1) {
    loadQuestion();
  } else {
    showResult();
  }
}

loadQuestion();
