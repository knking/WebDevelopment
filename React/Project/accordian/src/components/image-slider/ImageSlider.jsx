import React, { useState } from "react";
import myData from "./data";



function ImageSlider() {
    const [index, setIndex] = useState(0)

    function handleNext(){
        setIndex((prevIndex) => (prevIndex+1) % myData.length)
        console.log("HI");
        
    }

  return (
    <div className="w-full h-screen  flex justify-center items-center">

        <div className="w-48 h-48 border border-amber-200">
            <div className="flex justify-evenly items-start">
            
            <div className=" text-4xl"> &larr; </div>

            <div className="text-4xl" onClick={handleNext}> &rarr; </div>
            <div><img src={myData[index].image}/></div>
            </div>
            
        </div>
   
    </div>
  );
}

export default ImageSlider;

