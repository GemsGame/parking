import React from 'react';
import './Modal.scss';

const Modal = (props) => {
    const { isOpen } = props;
    let style;
    if (!isOpen) {
        style = 'display-none';
    }
    return (
        <div className={`modal-window-wrapper ${style}`}>
            <div className="modal-window">
                <div className="modal-window__body">
                    {props.children}
                </div>

            </div>
        </div>);
};
export default Modal;