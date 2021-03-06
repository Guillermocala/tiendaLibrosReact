import React, { useContext } from "react";
import CartContextProvider, { CartContext } from "../contexts/CartContex";
import { Link } from "react-router-dom";

const Header = () => {
    const { itemCount } = useContext(CartContext);
    return (
        <div className="container-fluid py-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div className="" aria-label="logo">
                    <h3>
                        <Link to="/" className="px-3 py-2 text-dark text-decoration-none">
                            Tienda Libros
                        </Link>
                    </h3>
                </div>
                <ul className="navbar-nav m-2">
                    <li className="nav-item">
                        <Link to="/" className="px-3 py-2 text-dark text-decoration-none">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/catalog" className="px-3 py-2 text-dark text-decoration-none">
                            Catalogo
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/cart" className="px-3 py-2 text-dark text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                            ({itemCount})
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="px-3 py-2 text-dark text-decoration-none">
                            Admin
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;