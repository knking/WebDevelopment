
import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/api/jokes',(req,res)=>{

    const jokes = [
  {
    "id": 1,
    "setup": "Why did the scarecrow become a motivational speaker?",
    "punchline": "Because he was outstanding in his field!"
  },
  {
    "id": 2,
    "setup": "Why don't programmers prefer dark mode?",
    "punchline": "Because the light attracts bugs."
  },
  {
    "id": 3,
    "setup": "What do you call a bear with no socks on?",
    "punchline": "Barefoot!"
  },
  {
    "id": 4,
    "setup": "Why did the tomato turn red?",
    "punchline": "Because it saw the salad dressing!"
  },
  {
    "id": 5,
    "setup": "What do you call fake spaghetti?",
    "punchline": "An impasta!"
  },
  {
    "id": 6,
    "setup": "Why can't basketball players go on vacation?",
    "punchline": "Because they would get called for traveling."
  },
  {
    "id": 7,
    "setup": "What do you call a dinosaur that takes care of its teeth?",
    "punchline": "A Flossiraptor!"
  },
  {
    "id": 8,
    "setup": "Why did the math book look sad?",
    "punchline": "Because it had too many problems."
  },
  {
    "id": 9,
    "setup": "What do you call a sleeping bull?",
    "punchline": "A bulldozer!"
  },
  {
    "id": 10,
    "setup": "Why did the coffee file a police report?",
    "punchline": "It got mugged!"
  }
]

res.send(jokes)

})

app.listen(port,()=>{
    console.log("Server is Up and Running");
    
})