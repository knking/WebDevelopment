import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import '../../App.css'

function StarRating({ numberOfStar = 10 }) {

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)

  function handleClick(currentIndex) {
    setRating(currentIndex)
  }

  function handleMouseMove(currentIndex) {
   setHover(currentIndex)

  }

  function handleMouseLeave(currentIndex) {
    setHover(rating)
    
    
  }

  return (
    <div className="w-full h-screen flex justify-center mt-20">
      {[...Array(numberOfStar)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active': 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
