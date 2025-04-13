import { LoadingScreen } from "./components/LoadingScreen";

import "./index.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoading,setIsLoading] = useState(false)

  return (
    <>
      { !isLoading && <LoadingScreen onComplete ={()=>setIsLoading(true)}/>}
    </>
  );
}

export default App;
