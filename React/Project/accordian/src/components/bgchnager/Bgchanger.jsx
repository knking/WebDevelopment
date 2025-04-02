import React, { useEffect, useState } from "react";

function Bgchanger() {
  const [color, setcColor] = useState(null);

 const [typeOfColor, setTypeOfColor] =useState("#000000")

function generateRBG(){
  let one=0
  let two = 0
  let three = 0
  for(let i =0;i< 3;i++){
    let num = Math.floor(Math.random() * 255)
    if(i===0){
      one=num
    }
    if(i===1){
      two=num
    }
    if(i===2){
      three=num
    }
  }
  // setRbgCol(`rgb(${one},${two},${three})`)
  setcColor(`rgb(${one},${two},${three})`)

}

function generateHex() {
    
    let str = "1234567890ABCDEF";
    let code = "#";
    for (let i = 0; i < 6; i++) {
        code += str[Math.floor(Math.random() * 15) + 1];
    }
    setcColor(code);
  }


useEffect(()=>{
if(typeOfColor === 'rgb'){
  generateRBG()
}
else{
  generateHex()
}
}, [typeOfColor] )



  document.body.style.backgroundColor = color;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex gap-2 mb-10">
      <button className="py-2 px-4 bg-amber-100" onClick={()=>setTypeOfColor('rgb')} >Generate RGB color</button>
      <button className="py-2 px-4 bg-amber-100 " onClick={()=>setTypeOfColor('hex')} >Generate HEX color</button>
        <button className="py-2 px-4 bg-amber-100" onClick={typeOfColor === 'hex' ? generateHex : generateRBG} >
          Generate random color
        </button>
        
      </div>
      <div className="mt-20">
        <h1 className="text-2xl" >Hex code</h1>
        <h2 className="text-4xl mt-4">{color}</h2>
      </div>
    </div>
  );
}

export default Bgchanger;
