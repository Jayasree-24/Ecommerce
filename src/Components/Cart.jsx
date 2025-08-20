import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Product } from "./Product";

export const Cart = ({cart, setCart}) =>{
    const[total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc+parseInt(curr.amt),0))
    }, [cart])
    return(
        <>
        <h2 className="Cart-heading">Cart Products</h2>
        <div className="cart-container">
        {cart.map((product) => (
            <div className="cart-products" key={product.id}>
            <div className="img">
                <img src={product.pic} alt="image" />
            </div>
            <div className="cart-prod-details">
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amt}</p>
            </div>

        </div>
        ))}
            
            
        </div>
        <h2 className="Cart-amt">Total Amount Rs: {total}</h2>
        </>
        
    )
};