
const input = document.querySelector("#input")

let upper =  document.querySelector("#upper")
(
    input.addEventListener('input',()=>{
        upper.innerText=input.value.toUpperCase()
    })
)

()