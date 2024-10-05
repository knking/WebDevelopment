
const btn = document.querySelector(".button")
const openPopup =  document.querySelector(".popup")
const closeP =  document.querySelector(".close-icon")


btn.addEventListener("click",()=>{
    openPopup.classList.add('open')
})

closeP.addEventListener('click',()=>{
    console.log("closed");
    
    openPopup.classList.remove("open")
})