
import {createContext, useState} from 'react'

export const CounterContext = createContext(null)

export const CounterProvide = (props)=>{

    const [count, setCount] = useState(5)

return (
    <CounterContext.Provider value={{count}}>
        {props.children}
    </CounterContext.Provider>
)
}