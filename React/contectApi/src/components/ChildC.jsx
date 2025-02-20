import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function ChildC() {
    const {theme,setThene} = useContext(ThemeContext)

    function chnageTheme(){
      if(theme == 'light'){
        setThene('dark')
      }else{
        setThene('light')
      }
    }

  return (
    <div>
        {/* <h1>Hello my name is {user.name}</h1>
        <h1>My Salary is  {user.salary}</h1> */}
        <button onClick={chnageTheme}>
          Change Theme
        </button>
    </div>
  )
}

export default ChildC