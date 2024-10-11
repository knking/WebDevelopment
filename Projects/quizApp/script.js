const nextBtn = document.querySelector(".p");
const quizQuestion = document.querySelector(".quiz-question");
const first = document.querySelector(".first-option");
const second = document.querySelector(".second-option");
const third = document.querySelector(".third-option");
const fourth = document.querySelector(".fourth-option");
const quizNumber = document.querySelector(".quiz-number");
const timerText = document.querySelector(".timer-text");

let timerCount = 30;

let timerIntervalId = setInterval(() => {
  timerCount--;
  if (timerCount == 0) clearInterval(timerIntervalId);
  console.log("hi");
  console.log(timerCount);
  timerText.innerText = `00:${timerCount}`;
}, 1000);

const obj1 = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    optinos: ["head", "body", "head and body", "none"],
    ans: "head",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    optinos: [
      "<script='xxx.js'>",
      "<name ='xxx.js'>",
      "<src ='xxx.js'>",
      "<link ='xxx.js'>",
    ],
    ans: "<src ='xxx.js'>",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    optinos: ["true", "false", "Both ture", "Both false"],
    ans: "false",
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    optinos: [
      "msg('Hello World')",
      "msgox('Hello World')",
      "alertbox('Hello World')",
      "alert('Hello World')",
    ],
    ans: "alert('Hello World')",
  },
  {
    question: "How do you create a function in JavaScript?",
    optinos: [
      "function myFuncation()",
      "function=myFinction()",
      "function:myFunction()",
      "function->myFunction()",
    ],
    ans: "function myFuncation()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    optinos: [
      "call function myFuncation()",
      "call myFuncation()",
      "myFuncation()",
      "None of the above",
    ],
    ans: "myFuncation()",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    optinos: ["if i=5 then", "if i==5 then", "if(i==5)", "if i==5"],
    ans: "if(i==5)",
  },
  {
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    optinos: ["if i=!5 then", "if(i <> 5)", "if(i != 5)", "if i <> "],
    ans: "if(i != 5)",
  },
  {
    question: "How does a WHILE loop start?",
    optinos: ["while(i<= 10)", "while i=1 to 10", "while (i <=10;i++)", "None"],
    ans: "while(i<= 10)",
  },
];
let count = 0;
let quizCount = 1;

function nextQn() {
  if (count >= obj1.length) {
    alert("All question completed");
    return;
  } else {
    quizQuestion.innerText = obj1[count].question;
    first.innerText = obj1[count].optinos[0];
    second.innerText = obj1[count].optinos[1];
    third.innerText = obj1[count].optinos[2];
    fourth.innerText = obj1[count].optinos[3];

    count++;
    quizCount++;
    quizNumber.innerText = `${quizCount}/10`;
  }
}
// let id = setInterval(() => {
//   if (count >= obj1.length) clearInterval(id);
//   nextQn();
// }, 3000);

nextBtn.addEventListener("click", (e) => {
  nextQn();
  console.log(e.isTrusted);
});
