
let answer = document.querySelector(".num")

const increment =  document.querySelector(".increment")
const decrement =  document.querySelector(".decrement")
const inputValue = document.querySelector(".inputValue")
const reset =  document.querySelector(".reset")

inputValue.addEventListener('input',(e)=>{
   let value = parseInt(inputValue.value)
   answer.innerText = value
   console.log(value);
   console.log(typeof value);
   
})

