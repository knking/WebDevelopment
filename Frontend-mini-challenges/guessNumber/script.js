
const inputVal =  document.querySelector("#inputVal")
const submit = document.querySelector(".submit")
const low = document.querySelector(".low")
const high = document.querySelector(".high")
const got = document.querySelector(".got")
const guess = document.querySelector(".guess")

const randomNum =  Math.floor( Math.random() * 5) + 1

submit.addEventListener('click',()=>{
    let num = parseInt(inputVal.value)
    console.log(randomNum)
    console.log(num);
    
    console.log( typeof num);

   if(randomNum === num){
    console.log("Match");
    got.style.display="block" 
   }else if(randomNum >= num){
    high.style.display="block"
    console.log("High");
   }else{
    low.style.display = "block"
    console.log("Low");
   }
    
})
// inputVal.addEventListener('click',(e)=>{
//     let num = e.target.value
//     console.log(num);
    
// })
