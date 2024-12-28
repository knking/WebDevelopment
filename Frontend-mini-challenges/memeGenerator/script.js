const url = "https://meme-api.com/gimme/wholesomememes";

const res = fetch("https://meme-api.com/gimme/wholesomememes");
// res
//   .then((data) => data.json())
//   .then((d) => {
//     console.log(d);
//     console.log(d.url);
//     console.log(d.title);
//     console.log(d.author);
//   })
//   .catch((e) => {
//     console.log("error", e);
//   });

async function getData() {
    const response = await fetch("https://meme-api.com/gimme/wholesomememes")
    const data = await response.json()
    console.log(data);
    
    
}
getData()