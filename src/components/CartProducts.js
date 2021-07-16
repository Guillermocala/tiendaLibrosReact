import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";
import CartItem from "./CartItem";

const CartProducts = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="products">
            <div className="card card-body border-0">
                {cartItems.map((product) => (
                    <CartItem key={product.key} product={product} />
                ))}
            </div>
        </div>
    );
};
export default CartProducts;