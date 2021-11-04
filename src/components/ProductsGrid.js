import React, { useState } from "react";
import ProductItem from "../components/ProductItem";

import img1 from "./../images/tbate.jpg";
import img2 from "./../images/harry_potter.jpg";
import img3 from "./../images/trono_cristal.jpg";
import img4 from "./../images/juegos_hambre.jpg";
import img5 from "./../images/principito.jpg";
import img6 from "./../images/gran_juego.jpg";
import img7 from "./../images/origin.jpg";
import img8 from "./../images/corona_medianoche.jpg";
import img9 from "./../images/corredor_laberinto.jpg";

const ProductsGrid = () => {
    const initialStateProducts = [
        {
            id: 1,
            name: "The beginning after the end",
            price: 120.0,
            code: "xlasxr1",
            description: "Ex elit voluptate incididunt est do non exercitation labore aliquip sit.",
            img: img1
        },
        {
            id: 2,
            name: "Harry potter y la camara secreta",
            price: 240.0,
            code: "xlasxr2",
            description: "Voluptate proident Lorem Lorem sunt velit ea cillum pariatur veniam officia.",
            img: img2
        },
        {
            id: 3,
            name: "Trono de cristal",
            price: 315.0,
            code: "xlasxr3",
            description: "Officia duis deserunt culpa in cupidatat excepteur laboris irure.",
            img: img3
        },
        {
            id: 4,
            name: "Los juegos del hambre",
            price: 142.0,
            code: "xxlasxr4",
            description: "Excepteur velit elit sit reprehenderit laboris magna.",
            img: img4
        },
        {
            id: 5,
            name: "El principito",
            price: 510.0,
            code: "xlasxr5",
            description: "Commodo nisi ad nisi et incididunt laboris nostrud.",
            img: img5
        },
        {
            id: 6,
            name: "El gran juego",
            price: 56.0,
            code: "xlasxr6",
            description: "Culpa incididunt et fugiat Lorem qui.",
            img: img6
        }, 
        {
            id: 7,
            name: "Origin",
            price: 127.0,
            code: "xlasxr7",
            description: "Nostrud velit duis eu enim.",
            img: img7
        },
        {
            id: 8,
            name: "Corona de medianoche",
            price: 87.0,
            code: "xlasxr8",
            description: "Nostrud velit duis eu enim.",
            img: img8
        },
        {
            id: 9,
            name: "El corredor del laberinto",
            price: 115.0,
            code: "xlasxr9",
            description: "Nostrud velit duis eu enim.",
            img: img9
        }
    ];
    const [products, setProducts] = useState(initialStateProducts);
    return (
        <section className="py-2">
            <div className="row">
                {products.map((productItem, index) => {
                    return (
                        <div className="col-md-3 p-2">
                            <ProductItem key={productItem.id} product={productItem} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default ProductsGrid;