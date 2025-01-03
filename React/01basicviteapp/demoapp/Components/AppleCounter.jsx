import Button from "./Button";

import rightArrow from "../src/assets/right-arrow.png";
import leftArrow from "../src/assets/arrow.png";
import AppleBasket from "./AppleBasket";
import './AppleCounter.css'

const AppleCounter = () => {
  return (
    <>
      <section>
        <AppleBasket appleCount={10} basketName="Basket 1"/>
        <Button imageUrl={leftArrow } myTitle ="Left Arrow" />
        <Button imageUrl={rightArrow} myTitle ="Right Arrow"/>
        <AppleBasket appleCount={10} basketName="Basket 1"/>
      </section>
    </>
  );
};

export default AppleCounter;
