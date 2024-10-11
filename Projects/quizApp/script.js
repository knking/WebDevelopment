const nextBtn = document.querySelector(".p");
const quizQuestion = document.querySelector(".quiz-question");
const first = document.querySelector(".first-option");
const second = document.querySelector(".second-option");
const third = document.querySelector(".third-option");
const fourth = document.querySelector(".fourth-option");
const quizNumber = document.querySelector(".quiz-number");
const timerText = document.querySelector(".timer-text");
const body = document.querySelector("body");
const timerSection = document.querySelector(".timer");

const options =  document.querySelectorAll(".options")
const rightText =  document.querySelector(".right-selection")
const rightImg = document.querySelector(".correct")

const wrongText = document.querySelector(".wrong-selection")
const wrongImg = document.querySelector(".wrong")



let timerCount = 30;

// let timerIntervalId = setInterval(() => {
//   timerCount--;
//   if (timerCount == 0) clearInterval(timerIntervalId);
//   if (timerCount <= 15 && timerCount > 5) {
//     body.style.backgroundColor = "#D4D69F";
//     timerSection.style.backgroundColor="#C5B100"
//     nextBtn.style.color="#C5B100"
//   }
//   if (timerCount <=5 ) {
//     body.style.backgroundColor = "#DBADAD";
//     timerSection.style.backgroundColor="#C50C00"
//     nextBtn.style.color="#C50C00"
//   } 
   
//   timerText.innerText = `00:${timerCount}`;
// }, 1000);

const obj1 = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    optinos: ["head", "body", "head and body", "none"],
    ans:0,
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
    ans:0,
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    optinos: ["true", "false", "Both ture", "Both false"],
    ans:1,
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    optinos: [
      "msg('Hello World')",
      "msgox('Hello World')",
      "alertbox('Hello World')",
      "alert('Hello World')",
    ],
    ans:3,
  },
  {
    question: "How do you create a function in JavaScript?",
    optinos: [
      "function myFuncation()",
      "function=myFinction()",
      "function:myFunction()",
      "function->myFunction()",
    ],
    ans:0,
  },
  {
    question: "How do you call a function named 'myFunction'?",
    optinos: [
      "call function myFuncation()",
      "call myFuncation()",
      "myFuncation()",
      "None of the above",
    ],
    ans:2,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    optinos: ["if i=5 then", "if i==5 then", "if(i==5)", "if i==5"],
    ans:2,
  },
  {
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    optinos: ["if i=!5 then", "if(i <> 5)", "if(i != 5)", "if i <> "],
    ans:2,
  },
  {
    question: "How does a WHILE loop start?",
    optinos: ["while(i<= 10)", "while i=1 to 10", "while (i <=10;i++)", "None"],
    ans:0,
  },
];

options.forEach((opt,index)=>{
    opt.addEventListener('click',(e)=>{
        console.log(opt.childNodes[1].innerText);
        console.log(opt.childNodes);
        
        
        if(opt.childNodes[1].innerText == "< Script>"){
            // rightText.style.display="block" 
            // rightImg.style.display="block" 
            // wrongText.style.display="none"
            // wrongImg.style.display="none"
            opt.classList.add("correctAns")
        } 
    })
    })
    




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
  console.log();
  if(e.isTrusted){

  }
});
