import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA'

//step 1: crate context
//step2: wrap all the child inside provider
//step:pass value
//step4:Consume 

const ThemeContext = createContext()          

function App() {
  //const[user , setUser] = useState({name:"krishna",salary:10000000})

  const [theme,setThene] = useState('light')

  return (
   
      <>
      {/* <myContext.Provider value={user}>
      <ChildA/>
      </myContext.Provider> */}


     <ThemeContext.Provider value={{theme,setThene}}>
        <div id='container' style={{backgroundColor:theme==='light'?'beige':"black"}}>
        <ChildA/>
        </div>
     </ThemeContext.Provider>
      </>
  )
}

export default App
export {ThemeContext}