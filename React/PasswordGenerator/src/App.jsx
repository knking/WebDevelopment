import { useCallback, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [lenght, setlenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_-";

    for (let i = 0; i < lenght; i++) {
      let val = Math.floor(Math.random() * str.length + 0);
      pass += str[val];
    }
    setPassword(pass)
  }, [lenght, numberAllowed, charAllowed, setPassword]);

useEffect(()=>{
 passwordGenerator()
},[lenght,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-[550px] h-28 bg-slate-500 rounded-xl mx-auto mt-32 p-2">
        <input
          type="text"
          className="mt-3 p-2 w-[475px] rounded-l"
          value={password}
          placeholder="Password"
          readOnly
        />
        <button className="p-2 bg-blue-700 text-white rounded-r outline-none ">
          Copy
        </button>
        <div className="mt-4 text-orange-600 w-96 text-center flex gap-2">
          <input
            type="range"
            name="length"
            min={5}
            max={20}
            value={lenght}
            onChange={(e) => {
              setlenght(e.target.value);
            }}
          />
          <label htmlFor="length">Length({lenght})</label>

          <input type="checkbox" name="number" defaultChecked={numberAllowed}  onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}/>
          <label htmlFor="number">Number</label>

          <input type="checkbox" name="character" defaultChecked={charAllowed} onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }} />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
