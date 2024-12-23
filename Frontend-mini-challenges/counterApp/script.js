
let answer = document.querySelector(".num")

const increment =  document.querySelector(".increment")
const decrement =  document.querySelector(".decrement")
const inputValue = document.querySelector(".inputValue")
const reset =  document.querySelector(".reset")

let finalAnswer = 0
let value = 1
inputValue.addEventListener('input',(e)=>{
value = parseInt(inputValue.value)
   
})

// function incrementVal(){
// finalAnswer += value
// answer.innerText = finalAnswer
// }
// function decrementVal(){
// finalAnswer -=value
// answer.innerText = finalAnswer
// }

increment.addEventListener('click',()=>{
    finalAnswer += value
answer.innerText = finalAnswer
})
decrement.addEventListener('click',()=>{
    finalAnswer -=value
answer.innerText = finalAnswer
})

reset.addEventListener('click',()=>{
    finalAnswer=0
    answer.innerText = finalAnswer
})