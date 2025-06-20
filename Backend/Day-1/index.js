
require('dotenv').config()
const express = require('express')

const app = express()

const mydata= {
  
"id": 1,
"title": "Essence Mascara Lash Princess",
"description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
"category": "beauty",
"price": 9.99,
"discountPercentage": 10.48,
"rating": 2.56,
"stock": 99,
"tags": [
"beauty",
"mascara"
]
}


// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send("i am instagram")
})

app.get('/fb',(req,res)=>{
res.send("i m fb")
})

app.get('/data',(req,res)=>{
  res.json(mydata)
})

app.get('/login',(req,res)=>{
res.send("<h1>I am krishna </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
