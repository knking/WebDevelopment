

const btn =  document.querySelector(".next")


const obj1 = [
 {
  question:"Inside which HTML element do we put the JavaScript?",
  optinos:["<js>>","<script>","<scripting>","<javascript>"],
  ans:"<script>"
 },
 {
  question:"Where is the correct place to insert a JavaScript?",
  optinos:["head","body","head and body","none"],
  ans:"head"
 },{
  question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
  optinos:["<script='xxx.js'>","<name ='xxx.js'>","<src ='xxx.js'>","<link ='xxx.js'>"],
  ans:"<src ='xxx.js'>"
 },{
  question:"The external JavaScript file must contain the <script> tag.",
  optinos:["true","false","Both ture","Both false"],
  ans:"false"
 },
 {
  question:'How do you write "Hello World" in an alert box?',
  optinos:["msg('Hello World')","msgox('Hello World')","alertbox('Hello World')","alert('Hello World')"],
  ans:"alert('Hello World')"
 },
 {
  question:"How do you create a function in JavaScript?",
  optinos:["function myFuncation()","function=myFinction()","function:myFunction()","function->myFunction()"],
  ans:"function myFuncation()"
 },
 {
  question:"How do you call a function named 'myFunction'?",
  optinos:["call function myFuncation()","call myFuncation()","myFuncation()","None of the above"],
  ans:"myFuncation()"
 },
 {
  question:"How to write an IF statement in JavaScript?",
  optinos:["if i=5 then","if i==5 then","if(i==5)","if i==5"],
  ans:"if(i==5)"
 },
 {
  question:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
  optinos:["if i=!5 then","if(i <> 5)","if(i != 5)","if i <> "],
  ans:"if(i != 5)"
 },
 {
  question:"How does a WHILE loop start?",
  optinos:["while(i<= 10)","while i=1 to 10","while (i <=10;i++)","None"],
  ans:"while(i<= 10)"
 }
 
]

let count = 0
// let id = setInterval(()=>{
//   console.log(obj1[count].question_one);
//   console.log(obj1[count].optinos[3]);
//   console.log(obj1[count].ans);
//   count++
//   if(count >= 3){
//     clearInterval(id)
//   }
// },3000)

// console.log(("i am done"));

btn.addEventListener('click',()=>{
  if(count >= obj1.length){
    return
  }else{
    console.log(obj1[count].question);
    console.log(obj1[count].optinos[3]);
    console.log(obj1[count].ans);
    count++
  }
 
})
// obj1.forEach((ele)=>{
//   console.log(ele.optinos[0] === ele.ans);
  
// })

// const {name,age,address}=obj1
// console.log(name);
// console.log(age);
// console.log(address);