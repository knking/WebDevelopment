import React, { useState } from "react";
import myData from "./data";

function ImageSlider() {
  const [idx, setIdx] = useState(0);

  function handleNext() {
    // setIndex((prevIndex) => (prevIndex+1) % myData.length)
    // console.log("HI");
    setIdx(idx === myData.length - 1 ? 0 : idx + 1);
  }

  function handlePrevious() {
    // setIndex((prevIndex) => (prevIndex+1) % myData.length)
    // console.log("HI");
    setIdx(idx === 0 ? myData.length - 1 : idx - 1);
  }

  return (
    <div className="relative flex justify-center items-center w-[500px] h-[350px]">
      <div className=" text-6xl absolute text-white left-4 cursor-pointer" onClick={handlePrevious}>
        &larr;
      </div>
      
        <img className="border-2 shadow-sm w-[100%] h-[100%]" src={myData[idx].image} />

      <div className="text-6xl absolute text-white right-4 cursor-pointer " onClick={handleNext}>
        &rarr;
      </div>

      <span className="flex absolute bottom-4">
        {myData.map((_, index) => (
          <button  className={`" h-[15px] w-[15px] rounded-full border-none outline-none my-0 mx-1 cursor-pointer btn" ${index=== idx ? 'bg-gray-500' : 'bg-white'}`} key={index} onClick={()=>setIdx(index)}></button>
        ))}
      </span>


      {/* <div className="w-[450px] h-[300px] border border-amber-200 relative">
        <div><img className="w-full absolute" src={myData[index].image}/></div>
        <div className="flex justify-between">
        <div className=" text-4xl" onClick={handlePrevious}> &larr; </div>
        <div className="text-4xl" onClick={handleNext}> &rarr; </div>
        </div>
            
            </div>
              */}
    </div>
  );
}

export default ImageSlider;
