import React from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <img className="card-img-product" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 class="card-title">{props.productName}</h5>
        <p class="card-text">Rs. {props.price}/-</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
          className="product-btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
