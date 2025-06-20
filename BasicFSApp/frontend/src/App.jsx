import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  })

  return (
    <>
    <h1>Chai aur code Backend</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke,index)=>(
        
        
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <h4>{joke.punchline}</h4>
        </div>
      ))
    }
    </>
  )
}

export default App
