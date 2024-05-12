import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';  // Asegúrate de crear este archivo CSS para estilos

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div className="modal-backdrop">
            <div className="modal-content">
                {children}
                <button onClick={onClose} className="cerrar-button">Cerrar</button>
            </div>
        </div>,
        document.body
    );
};
export default Modal;
