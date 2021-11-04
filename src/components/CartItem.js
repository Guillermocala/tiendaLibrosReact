import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";

const CartItem = ({ product }) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);
    return (
        <div className="row py-2">
            <div className="col-sm-2 p-2">
                <img
                    alt={product.name}
                    style={{margin: "0 auto", maxHeight: "50px"}}
                    src={product.img}
                    className="img-fluid d-block"
                />
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1"> {product.name} </h5>
                <p className="mb-1">Price: $ {product.price} </p>
            </div>
            <div className="col-sm-2 p-2">
                <p className="mb-1">Cant: {product.quantity} </p>
                <p className="mb-1">Precio: $ {product.quantity * product.price} </p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                <button
                    onClick={() => increase(product)}
                    className="btn btn-primary mx-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                    </svg>
                </button>
                {product.quantity > 1 && (
                    <button
                        onClick={() => decrease(product)}
                        className="btn btn-danger"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                        </svg>
                    </button>
                )}
                {product.quantity === 1 && (
                    <button
                        onClick={() => removeProduct(product)}
                        className="btn btn-danger"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartItem;