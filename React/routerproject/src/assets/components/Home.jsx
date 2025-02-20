import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
    function hancleClick(){
        navigate('/about')
    }
  return (
    <div>Home Page
        <button onClick={hancleClick}>Move to About page</button>
    </div>
  )
}

export default Home