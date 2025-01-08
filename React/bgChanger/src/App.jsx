import { useState } from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {/* <button onClick={()=>setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm back"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button> */}
          <Button color="red" changeColor={setColor}/>
          <Button color="green" changeColor={setColor}/>
          <Button color="blue" changeColor={setColor}/>
          <Button color="pink" changeColor={setColor}/>
          <Button color="black" changeColor={setColor}/>
          <Button color="yellow" changeColor={setColor}/>
          <Button color="lavender" changeColor={setColor}/>

        </div>
      </div>
    </div>
  );
}

export default App;
