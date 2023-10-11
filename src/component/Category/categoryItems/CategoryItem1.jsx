import React from "react";
import c from './CategoryItem1.module.css';
import img from '../../../assets/img/Category/categoty_offer1.png';

const CategoryItem1 = (props) => {
    return(
        <div className={c.CaregoryItemBlock}>
            <img className={c.categoryItemImg}src={img} alt="" />
            <p className={c.categoryItemName}>{props.name}</p>
            <p className={c.categoryItemText}>{props.text}</p>
        </div>
          
    );
}

export default CategoryItem1;