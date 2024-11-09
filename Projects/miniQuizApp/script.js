
const questions = [
    {
        question:"Which is largest animal in the planet",
        answers:[
            { text: "Shark", correct : false},
            { text: "Blue Whale", correct : true},
            { text: "Elephant", correct : false},
            { text: "Bull", correct : false},
        ]
    },
    {
        question:"total number of days in a week",
        answers:[
            { text: "Two", correct : false},
            { text: "Seven", correct : true},
            { text: "Three", correct : false},
            { text: "Eight", correct : false},
        ]
    },
    {
        question:"Color in indian flag",
        answers:[
            { text: "5", correct : false},
            { text: "1", correct : false},
            { text: "8", correct : false},
            { text: "3", correct : true},
        ]
    },
    {
        question:"Capital of india is ",
        answers:[
            { text: "Patna", correct : false},
            { text: "Pune", correct : false},
            { text: "New Delhi", correct : true},
            { text: "Bihar", correct : false},
        ]
    },
    
]

const questionElement =  document.getElementById("question")
const answerBtn =  document.getElementById("answer-buttons")
const nextBtn =  document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0
