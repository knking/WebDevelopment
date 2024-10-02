
const nameElement  = document.querySelector(".name")
const inputValue =  document.querySelector(".name-input")
const ageInput = document.querySelector(".age-input")
const age = document.querySelector(".age")


// // nameElement.innerText = localStorage.myname
// nameElement.innerText = localStorage.getItem('myname')
// age.innerText =  localStorage.getItem('age')

// inputValue.addEventListener('input',(e)=>{
//     // localStorage.myname = e.target.value
//     localStorage.setItem('myname', e.target.value)
//     nameElement.innerText = localStorage.getItem('myname')
// })
// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem('age',e.target.value)
//     age.innerText = localStorage.getItem('age')
// })

// const myData={
//     name:"",
//     age:""
// }

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if(myData.name){
    nameElement.innerText =  myData.name
}
if(myData.age){
    age.innerText=myData.age
}


inputValue.addEventListener('input',(e)=>{
myData.name = e.target.value
localStorage.setItem('myData',JSON.stringify(myData))
nameElement.innerText =  myData.name
})

ageInput.addEventListener('input',(e)=>{
    myData.age = e.target.value
    localStorage.setItem('myData',JSON.stringify(myData))
    age.innerText=myData.age
})

// to remove data from local storage we can use clear() and removeItem()