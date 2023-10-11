import React from "react";
import c from './PartnersItem.module.css';

const PartnersItem = (props) => {
    return(
        <div className={c.partnersItem}>
            <img src={props.img} alt="" className={c.partnersImg}/>
        </div>
    );
}

export default PartnersItem;