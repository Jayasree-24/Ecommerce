import React from "react";
import "./Product.css";

export const Product = ({ product, cart, setCart }) => {
    const addCart = () => {
      setCart([...cart, product]);
    };
  
    const removeCart = () => {
      setCart(cart.filter((c) => c.id !== product.id));
    };
  
    return (
      <div className="product">
        <div className="img">
          <img src={product.pic} alt={product.name} />
        </div>
        <div className="details">
          <h3>{product.name}</h3>
          <p>Price Rs: {product.amt}</p>
          {cart.some((c) => c.id === product.id) ? (
            <button className="btnRemove" onClick={removeCart}>
              Remove from cart
            </button>
          ) : (
            <button onClick={addCart}>Add to cart</button>
          )}
        </div>
      </div>
    );
  };
  