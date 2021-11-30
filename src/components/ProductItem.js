import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";
import Modals from "./Modals";
import { useModal } from "../hooks/useModal";
export default function ProductItem(props) {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };
    const [isOpenModalDetalles, openModalDetalles, closeModalDetalles] = useModal(false);
    return (
        <div className="card text-center p-2">
            <Modals 
                opcion={"detallesProducto"}
                producto={props.product}
                statusModal={isOpenModalDetalles}
                close={closeModalDetalles}
            />
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
            <div className="card-footer btn-toolbar justify-content-center" role="toolbar" aria-label="toolbar with button groups">
                <div className="btn-group " role="group" aria-label="first group">
                    <button
                        onClick={openModalDetalles}
                        className="btn btn-outline-dark mx-1"
                    >
                        Detalles
                    </button>
                </div>
                <div className="btn-group" role="group" aria-label="second group">
                    {isInCart(props.product) && (
                        <button
                            onClick={() => increase(props.product)}
                            className="btn btn-outline-dark mx-1"
                        >
                            Agregar mas
                        </button>
                    )}
                    {!isInCart(props.product) && (
                        <button
                            onClick={() => addProduct(props.product)}
                            className="btn btn-outline-dark mx-1"
                        >
                            Agregar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}