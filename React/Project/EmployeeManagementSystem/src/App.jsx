import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Auth/Login";
import EmpolyeeDashboard from "./components/Dashboard/EmpolyeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/Authprovider";

function App() {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext)

useEffect(()=>{
const loggedInUser = localStorage.getItem('loggedInUser')
if(loggedInUser){
  setUser(loggedInUser.role)
}
},[authData])

  function handleLogin(email, password) {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData && authData.employeeData.find((e) => email == e.email  && e.password == password)) {
      setUser("employee");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid Credentails");
    }
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user =='admin' ? <AdminDashboard/> : <EmpolyeeDashboard/>}
      {/* <EmpolyeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
}

export default App;
