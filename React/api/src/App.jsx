import { useEffect, useState } from "react";
import {randomUser} from "./api";
import "./App.css";
import { Card } from "./components/Card";

function App() {

const [user,setUser] = useState(null)

  //   useEffect(()=>{
  // randomUser()
  //   })

  useEffect(() => {
    randomUser()
      .then((result) => setUser(result.results[0]))
      .catch((err) =>console.log(err));
  },[]);

  function haldleClick(){
    randomUser()
      .then((result) => setUser(result.results[0]))
      .catch((err) =>console.log(err));
  }
  console.log(user)
  return (
    <>
      <div className="container">
    
        <Card  img={user?.picture.thumbnail} name={user?.name.first} gender={user?.gender} email={user?.email}/>
      </div>
      <button onClick={haldleClick}>Refersh</button>
    </>
  );
}

export default App;
