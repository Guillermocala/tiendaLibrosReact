import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";

export default function ProductItem(props) {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };
    return (
        <div className="card text-center p-2">
            <div classname="card-img-top">
                <img
                    className="rounded"
                    src={props.product.img}
                    alt="img libro"
                    width="80%"
                    height="300px"

                />
            </div>
            <div className="card-body">
                <div className="small"> {props.product.code} </div>
                <h4> {props.product.name} </h4>
                <div className="fs-5">
                    <span> $ {props.product.price} </span>
                </div>
            </div>
            <div className="card-footer btn-toolbar " role="toolbar" aria-label="toolbar with button groups">
                <div className="btn-group mx-2" role="group" aria-label="second group">
                    {isInCart(props.product) && (
                        <button
                            onClick={() => increase(props.product)}
                            className="btn btn-outline-dark"
                        >
                            Agregar mas
                        </button>
                    )}
                    {!isInCart(props.product) && (
                        <button
                            onClick={() => addProduct(props.product)}
                            className="btn btn-outline-dark"
                        >
                            Agregar
                        </button>
                    )}
                </div>
                <div className="btn-group " role="group" aria-label="first group">
                    <button
                        onClick={() => { alert("detalles"); }}
                        className="btn btn-outline-dark"
                    >
                        Detalles
                    </button>
                </div> 
            </div>
        </div>
    );
}