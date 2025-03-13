// import { createContext, useState } from 'react'

import './App.css'
// import ChildA from './components/ChildA'

// //step 1: crate context
// //step2: wrap all the child inside provider
// //step:pass value
// //step4:Consume 

// const ThemeContext = createContext()          

// function App() {
//   //const[user , setUser] = useState({name:"krishna",salary:10000000})

//   const [theme,setThene] = useState('light')

//   return (
   
//       <>
//       {/* <myContext.Provider value={user}>
//       <ChildA/>
//       </myContext.Provider> */}


//      <ThemeContext.Provider value={{theme,setThene}}>
//         <div id='container' style={{backgroundColor:theme==='light'?'beige':"black"}}>
//         <ChildA/>
//         </div>
//      </ThemeContext.Provider>
//       </>
//   )
// }

// export default App
// export {ThemeContext}



import React from 'react'
import Item from './components/Item'
import Cart from './components/Cart'
import { CartProvider } from './context/Cart'
// import Counter from './components/Counter'
// import { useContext } from 'react'
// import { CounterContext } from './context/CountContext'

function App() {

  // const counterState = useContext(CounterContext)

  return (
   <>
   {/* <div className='myCrad'> 
   <h1>Count {counterState.count}</h1>
   <Counter/>
   <Counter/>
   <Counter/>
   <Counter/>
   </div> */}

   <div className="app">
    <CartProvider>
    <Item name={'MackBook '} price={10000}/>
    <Item name={'iphone '} price={5000}/>
    <Item name={'samsung '} price={40000}/>
    <Cart/>
    </CartProvider>
  
    

   </div>
   </>
  )
}

export default App