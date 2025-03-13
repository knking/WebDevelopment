import React from 'react'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App2() {
  return (
    <UserContextProvider>
        <h1>React context api</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App2