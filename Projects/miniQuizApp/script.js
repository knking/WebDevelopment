const questions = [
  {
    question: "Which is largest animal in the planet",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Bull", correct: false },
    ],
  },
  {
    question: "total number of days in a week",
    answers: [
      { text: "Two", correct: false },
      { text: "Seven", correct: true },
      { text: "Three", correct: false },
      { text: "Eight", correct: false },
    ],
  },
  {
    question: "Color in indian flag",
    answers: [
      { text: "5", correct: false },
      { text: "1", correct: false },
      { text: "8", correct: false },
      { text: "3", correct: true },
    ],
  },
  {
    question: "Capital of india is ",
    answers: [
      { text: "Patna", correct: false },
      { text: "Pune", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Bihar", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questioNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questioNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    console.log("hi");

    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach(button =>{
    if(button.dataset.correct === 'true'){
        button.classList.add('correct')
    }
    button.disabled = true
  })
  nextBtn.style.display = 'block'
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`
    nextBtn.innerHTML ='Play Again'
    nextBtn.style.display='block'
}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}
nextBtn.addEventListener('click',(e)=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();
