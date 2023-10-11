import React from "react";
import c from './bookedPeopleItem.module.css'

const BookedPeopleItem = (props) => {
    return(
        <div className={c.circleItem}>
            <img  className={c.circleItemImg} src={props.img} alt="" />
        </div>
    );
}

export default BookedPeopleItem;