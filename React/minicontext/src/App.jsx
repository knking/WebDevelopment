
import './App.css'
import UserContextprovider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import About from './components/About'

function App() {
  
  return (
    <UserContextprovider>
      <h1>React Context API with Chai</h1>
      <Login/>
      <Profile/>
      <About/>
    </UserContextprovider>
  )
}

export default App
