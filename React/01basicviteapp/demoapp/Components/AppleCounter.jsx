import Button from "./Button";

import rightArrow from "../src/assets/right-arrow.png";
import leftArrow from "../src/assets/arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")) 
    let appleCount =10
    let rightAppleCount=0
    let leftAppleCount = appleCount-rightAppleCount
const AppleCounter = () => {

  const leftClickHandler = () => {
    root.render(<AppleCounter/>)
    leftAppleCount++
    rightAppleCount--
    console.log(rightAppleCount);
    
  };

  const rightClickHandler = () => {
    root.render(<AppleCounter/>)
    leftAppleCount--
    rightAppleCount++
    console.log(leftAppleCount);
    
  };
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
