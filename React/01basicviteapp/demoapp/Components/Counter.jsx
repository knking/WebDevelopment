
import { useState } from "react"
import  "./AppleCounter.css"
const Counter =  ()=>{

    const [count, setCount]=useState(0)

    function increase(){
        setCount(count+1)
    }
    // function decrease(){
    //     setCount(count-1)
    // }
    return(
        <>
        <div className="counterSection">
        <h1>{count}</h1>
        <button onClick={increase}>Increase Count</button>
        <button onClick={()=>{
            
        setCount(count-1)
        // setCount((previous)=>previous+1)
        // setCount((previous)=>previous+1)
        // setCount((previous)=>previous+1)
           
        }}>Decrease Count</button>
        </div>
        
        </>
    )
}
export default Counter