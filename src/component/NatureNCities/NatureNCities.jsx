import React from "react";
import c from './NatureNCities.module.css';
import NatureNCitiesImgFirst from './../../assets/img/NatureNCities/NatureNCitiesImg_1.png';
import NatureNCitiesImgSecond from './../../assets/img/NatureNCities/NatureNCitiesImg_2.png';

const NatureNCities = (props) => {
    return(
        <div className={c.NatureNCitiesBlock}>
            <div className={c.NatureNCitiesItems}>
                <img src={NatureNCitiesImgFirst} alt="" />
                <div className={c.NatureNCitiesText}>
                    <h4>Promotion</h4>
                    <h2>Explore Nature</h2>
                    <button>View Packages</button>
                </div>
            </div>
            <div className={c.NatureNCitiesItems}>
                <img src={NatureNCitiesImgSecond} alt="" />
                <div className={c.NatureNCitiesText}>
                    <h4>Promotion</h4>
                    <h2>Explore Nature</h2>
                    <button>View Packages</button>
                </div>
            </div>
        </div>
    );
}

export default NatureNCities;