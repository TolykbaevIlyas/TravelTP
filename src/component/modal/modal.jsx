import React from "react";
import c from './modal.module.css'

const Modal = (active,setActive) => {
    return(
        <div className={!active.modalActive ? `${c.modal} ${c.active}` : `${c.modal}`} onClick={() => active.setModalActive(!active.modalActive)}>
            <div className={c.modalInner} onClick={e => e.stopPropagation()}>
                <h2>Build Your Own Package</h2>
                <input type="text" />
                <input type="text" />
                <p>+ Add destination</p>
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
                <button>Build Package</button>
            </div>
        </div>
    );
}

export default Modal;