import React, { useContext } from "react";
import CartProducts from "../components/CartProducts";
import { CartContext } from "../contexts/CartContex";
import { Link } from "react-router-dom";

const Cart = () => {
    const {
        total,
        cartItems,
        itemCount,
        clearCart,
        checkout,
        handleCheckout
    } = useContext(CartContext);

    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-sn-9 p-3">
                    {cartItems.length > 0 ? (
                        <CartProducts />
                        ) : (
                        <div className="p-3 text-center text-muted">
                            El carro de compra está vacío
                        </div>
                    )}
                    {checkout && cartItems.length === 0 && (
                        <div className="p-3 text-center text-success">
                            <p>Compra realizada</p>
                            <Link to="/catalog" className="btn btn-outline-success btn-sm" >
                                Comprar más...
                            </Link>
                        </div>
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className="col-sm-3 p-3">  
                        <div className="card card-body">
                            <p className="mb-1">Total items</p>
                            <h4 className="mb-3 txt-right"> {itemCount} </h4>
                            <p className="mb-1">Total a pagar</p>
                            <h3 className="m-0 txt-right"> $ {total} </h3>
                            <hr className="my-4"/>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-primary mb-2"
                                    onClick={handleCheckout}
                                >
                                    Comprar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outlineprimary btn-sm"
                                    onClick={clearCart}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Cart;