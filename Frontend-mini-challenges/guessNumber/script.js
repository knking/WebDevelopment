const inputVal = document.querySelector("#inputVal");
const submit = document.querySelector(".submit");
const low = document.querySelector(".low");
const high = document.querySelector(".high");
const got = document.querySelector(".got");
const guess = document.querySelector(".guess");
const spn = document.querySelector(".spn")
const start = document.querySelector(".start")

const randomNum = Math.floor(Math.random() * 5) + 1;
let num
submit.addEventListener("click", () => {
 num = parseInt(inputVal.value);
  inputVal.value = "";
  got.style.display = "none";
  high.style.display = "none";
  low.style.display = "none";
  start.disabled = true
  start.style.cursor='not-allowed'
  console.log(randomNum);
  console.log(num);
  guess.style.display='block'

  if (randomNum === num) {
    console.log("Match");
    
    got.style.display = "block";
    submit.disabled = true
    inputVal.disabled = true
    submit.style.cursor='not-allowed'
    inputVal.style.cursor='not-allowed'

    start.disabled = false
  start.style.cursor='pointer'

  } 
  if (randomNum > num) {
    high.display = "block";
    console.log("High");
  } 
  if(num < randomNum) {
    low.style.display = "block";
    console.log("Low");
  }
  spn.append(num+ " ")
});

// inputVal.addEventListener('click',(e)=>{
//     let num = e.target.value
//     console.log(num);

// })

start.addEventListener('click',()=>{
    submit.disabled = false
    inputVal.disabled = false
    submit.style.cursor='pointer'
    inputVal.style.cursor='pointer'
    inputVal.value = "";
    start.disabled = true
  start.style.cursor='not-allowed'
  got.style.display = "none";
  high.style.display = "none";
  low.style.display = "none";
  spn.innerHTML=''
  guess.style.display='none'
}) 