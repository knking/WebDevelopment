
// const h1 = document.querySelector('h1')
// //send way
// // h1.onclick= sayHi

// h1.addEventListener('click',sayHi)
// h1.addEventListener('click', function(){
//     console.log("hi from fn2");
    
// }) 


const container = document.querySelector(".container")
const card = document.querySelector(".card")

// card.addEventListener('click',()=>(
//     console.log("I am catrd")
    
// ))
let i=1;
function addCrad(){
    
    const newcard = document.createElement('div')
    newcard.classList.add("card")
    // const newCrad = card.cloneNode()  // we can ise this also
    // newcard.classList.remove('add-card')
    newcard.innerText=`${i++}`
    container.append(newcard)
   
    
}
    
card.addEventListener('click',addCrad)


// card.addEventListener('click',()=>{
//     const newCard= document.createElement('div')
//     newCard.classList.add('card')
//     container.append(newCard)
    
    
    
// })