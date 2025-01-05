import Button from "./Button";

import rightArrow from "../src/assets/right-arrow.png";
import leftArrow from "../src/assets/arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { createRoot } from "react-dom/client";
import { useState } from "react";

// const root = createRoot(document.getElementById("root"))

const AppleCounter = () => {
  let appleCount = 10;

  //let leftAppleCount = appleCount-rightAppleCount

  const [rightAppleCount, setrightAppleCount] = useState(0);

  const [leftAppleCount, setLeftAppleCount] = useState(
    appleCount - rightAppleCount
  );

  function leftClickHandler() {
    if (rightAppleCount > 0) {
      setrightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  }

  function rightClickHandler() {
    if(leftAppleCount > 0){
      setLeftAppleCount(leftAppleCount - 1);
      setrightAppleCount(rightAppleCount + 1);
      
    }
  }
  // const leftClickHandler = () => {
  //   // root.render(<AppleCounter/>)
  //   leftAppleCount++
  //     rightAppleCount--
  //   console.log(rightAppleCount);
  // };

  // const rightClickHandler = () => {
  //   // root.render(<AppleCounter/>)
  //   leftAppleCount--
  //   rightAppleCount++
  //   console.log(leftAppleCount);
  // };
  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          imageUrl={leftArrow}
          myTitle="Left Arrow"
          clickHandler={leftClickHandler}
        />
        <Button
          imageUrl={rightArrow}
          myTitle="Right Arrow"
          clickHandler={rightClickHandler}
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 1" />
      </section>
    </>
  );
};

export default AppleCounter;
