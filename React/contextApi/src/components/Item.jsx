import React, { useContext } from "react";

import { CartContext } from "../context/Cart";

const Item = ({ name, price }) => {
    
  const cart = useContext(CartContext);
//   console.log(cart.items);
  

  return (
    <div className="item-card">
      <h4>Item {name}</h4>
      <p>price ${price}</p>
      <button
        onClick={() =>
          cart.setItems([...cart.items, { name: name, price: price }])
        }
      >

        Add to cart
      </button>
    </div>
  );
};

export default Item;
