import { Modal } from "react-bootstrap";
const ModalCentral = (props) => {
    return (
        <div>
            <Modal
                show={props.isOpen}
                onHide={props.closeModal}
                centered
            >
                <div className="Modal-container">
                    {props.children}
                    <button
                        onClick={props.closeModal}
                        className="btn btn-primary m-2"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};
export default ModalCentral;