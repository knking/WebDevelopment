
const btn =  document.querySelector(".generate")

const title =  document.querySelector(".meme-title")
const author =  document.querySelector(".author span")
const image =  document.querySelector("img")


// const url = "https://meme-api.com/gimme/wholesomememes";

btn.addEventListener('click',()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res)=> res.json())
    .then((data)=>{
        title.innerText =  data.title
        author.innerText = data.author
        image.src=`${data.url}`
    })
    .catch((e)=>{
        console.log("Error: ", e);
        
    })
})