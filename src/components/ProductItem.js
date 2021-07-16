import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";

export default function ProductItem(props) {
    const { addProduct, cartItems, increase } = useContext(CartContext); 
    
    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };
    return (
        <div className="row cardItem">
            <div className="card-md-6">
                <img
                    classname="card-img-top"
                    src={props.product.img}
                    alt="img libro"
                    width="150px"
                    height="300px"
                />
            </div>
            <div className="card-md-6">
                <div className="small"> {props.product.code} </div>
                <h4> {props.product.name} </h4>
                <div className="fs-5 mb-3">
                    <span> $ {props.product.price} </span>
                </div>
                <p className="fs-5"> {props.product.description} </p>
                <div className="d-flex">
                    {isInCart(props.product) && (
                        <button
                            onClick={() => increase(props.product)}
                            className="btn btn-outline-dark flex-shrink-0"
                        >
                            agregar mas
                        </button>
                    )}
                    {!isInCart(props.product) && (
                        <button
                            onClick={() => addProduct(props.product)}
                            className="btn btn-outline-dark flex-shrink-0"
                        >
                            agregar al carrito
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}