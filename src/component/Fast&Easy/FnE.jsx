import React, { useState } from "react";
import c from './FnE.module.css';
import FnEmainImg from '../../assets/img/FnE/FneImg.png';
import FneItemImgFirst from './../../assets/img/FnE/FneItemsImg_1.png';
import FneItemImgSecond from './../../assets/img/FnE/FneItemsImg_2.png';
import FneItemImgThird from './../../assets/img/FnE/FneItemsImg_3.png';

const FnE = (props) => {
    return(
        <div className={c.FnEBlock}>
            <div className={c.container}>
                <div className={c.FnEBlockInner}>
                    <div className={c.textBlock}>
                        <h4>Fast & Easy</h4>
                        <h2>Get Your Favourite Resort Bookings</h2>
                        <div className={c.FneItems}>
                            <div className={c.FneItem}>
                                <img  className={c.FneItemImg} src={FneItemImgFirst} alt="" />
                                <div className={c.FneItemText}>
                                   <h5>Choose Destination</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p> 
                                </div>
                            </div>
                            <div className={c.FneItem}>
                                <img  className={c.FneItemImg} src={FneItemImgSecond} alt="" />
                                <div className={c.FneItemText}>
                                   <h5>Check Availability</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p> 
                                </div>
                            </div>
                            <div className={c.FneItem}>
                                <img  className={c.FneItemImg} src={FneItemImgThird} alt="" />
                                <div className={c.FneItemText}>
                                   <h5>Let’s Go</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={c.imgBlock}>
                        <img className={c.imgBlockImg} src={FnEmainImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default FnE;