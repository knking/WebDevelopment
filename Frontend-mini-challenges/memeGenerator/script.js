
const imgUrl =  document.querySelector(".image img")
const span =  document.querySelector(".image-sec p span")
const h3 =  document.querySelector(".image-sec h3")

// const url = "https://meme-api.com/gimme/wholesomememes";

const res = fetch("https://meme-api.com/gimme/wholesomememes");
res
  .then((data) => data.json())
  .then((d) => {
    console.log(d);
    console.log(d.url);
    console.log(d.title);
    h3.innerText = d.title
    console.log(d.author);
    imgUrl.src=`${d.url}`
    span.innerText = d.author
  })
  .catch((e) => {
    console.log("error", e);
  });

// async function getData() {
//     const response = await fetch("https://meme-api.com/gimme/wholesomememes")
//     const data = await response.json()
//     console.log(data);
    
    
// }
// getData()