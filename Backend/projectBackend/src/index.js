
// require('dotenv').config()

import dotenv from 'dotenv'
 import connectDB from './db/index.js'

 dotenv.config({
    path:'./env'
 })

 connectDB()


/*
import express from 'express'
const app = express()

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on('erro',()=>{
            console.log("ERR",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }

})()
    */