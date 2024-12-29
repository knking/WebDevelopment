
const btn =  document.querySelector(".generate")

const memetitle =  document.querySelector(".meme-title")
const memeauthor =  document.querySelector(".author span")
const memeimage =  document.querySelector("img")


// const url = "https://meme-api.com/gimme/wholesomememes";

btn.addEventListener('click',()=>{
    // fetch("https://meme-api.com/gimme/wholesomememes")
    // .then((res)=> res.json())
    // .then((data)=>{
    //     const {author, title, url} = data
    //     memetitle.innerText =  title
    //     memeauthor.innerText = author
    //     memeimage.src=`${url}`
    // })
    // .catch((e)=>{
    //     console.log("Error: ", e);
        
    // })
    getMeme()
})

function getMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res)=> res.json())
    .then((data)=>{
        const {author, title, url} = data
        memetitle.innerText =  title
        memeauthor.innerText = `Meme by ${author}`
        memeimage.src=`${url}`
    })
    .catch((e)=>{
        console.log("Error: ", e);
        
    })
}
getMeme()