import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
   {/* <EmpolyeeDashboard/> */}
   <AdminDashboard/>
    </>
  )
}

export default App
