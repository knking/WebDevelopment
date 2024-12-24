const inputVal = document.querySelector("#inputVal");
const submit = document.querySelector(".submit");
const low = document.querySelector(".low");
const high = document.querySelector(".high");
const got = document.querySelector(".got");
const guess = document.querySelector(".guess");
const spn = document.querySelector(".spn");
const start = document.querySelector(".start");
const allGuessesArray = []
const randomNum = Math.floor(Math.random() * 5) + 1;
let num;
submit.addEventListener("click", () => {
  if(inputVal.value===""){
    return
  }else
  {
    num = parseInt(inputVal.value);
  allGuessesArray.push(num)
  inputVal.value = "";
  got.style.display = "none";
  high.style.display = "none";
  low.style.display = "none";
  start.disabled = true;
  start.style.cursor = "not-allowed";
  guess.style.display = "block";

  if (randomNum === num) {
    got.style.display = "block";
    submit.disabled = true;
    inputVal.disabled = true;
    submit.style.cursor = "not-allowed";
    inputVal.style.cursor = "not-allowed";
    start.disabled = false;
    start.style.cursor = "pointer";
  } else if (randomNum > num) {
    high.style.display = "block";
  } else if (randomNum < num) {
    low.style.display = "block";
  }
  // spn.append(num + " ");
  spn.innerText = allGuessesArray.join(', ')
  }
  
});

// inputVal.addEventListener('click',(e)=>{
//     let num = e.target.value
//     console.log(num);

// })

start.addEventListener("click", () => {
  submit.disabled = false;
  inputVal.disabled = false;
  submit.style.cursor = "pointer";
  inputVal.style.cursor = "pointer";
  inputVal.value = "";
  start.disabled = true;
  start.style.cursor = "not-allowed";
  got.style.display = "none";
  high.style.display = "none";
  low.style.display = "none";
  // spn.innerHTML = "";
  allGuessesArray.length=0
  guess.style.display = "none";
});
