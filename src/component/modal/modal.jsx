import React from "react";
import c from './modal.module.css'

const Modal = (active,setActive) => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={( ) => setActive(false)}>
            <div className={c.modalInner} onClick={e => e.stopPropagation()}></div>
        </div>
    );
}

export default Modal;