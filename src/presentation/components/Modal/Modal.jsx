import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';  // Asegúrate de que el archivo CSS se llama Modal.css

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div className="modal-backdrop">
            <div className="modal-content">
                {children}
                <button onClick={onClose} className="close-button">Cerrar</button>
            </div>
        </div>,
        document.body
    );  
};

export default Modal;
