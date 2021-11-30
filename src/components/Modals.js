import { useModal } from "../hooks/useModal";
import ModalCentral from "./Modal"

const Modals = (props) => {
    switch (props.opcion) {
        case "detallesProducto":
            return (
                <div>
                    <ModalCentral isOpen={props.statusModal} closeModal={props.close}>
                        <div className="p-3">
                            <h2>detalles producto</h2>
                            <p>id: {props.producto.id} </p>
                            <p>nombre: {props.producto.name} </p>
                            <p>codigo: {props.producto.code} </p>
                            <p>precio: {props.producto.price} </p>
                            <p>descripcion: {props.producto.description} </p>
                        </div>
                    </ModalCentral>
                </div>
            );
            break;

        default:
            return (
                <div>
                    <h2>error con el modal</h2>
                </div>
            )
            break;
    }
};
export default Modals;