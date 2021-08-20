import React from "react";
import "./Modal.css";

const Modal = ({ onClose, show, restart }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="content">You are almost as good as three-years olds in memo games. Sincere congratulations!</div>
            <div className="actions">
                <button class="close" onClick={() => {
                    onClose(); restart()
                }}>
                    Start new game
                </button>
            </div>
        </div>
    );
};

export default Modal;