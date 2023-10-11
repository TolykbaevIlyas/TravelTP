import React, { useState } from "react";
import c from './Specials.module.css';
import mainImg from './../../assets/img/Specials/SpecialMainImg.png';
import BigCircleImg from './../../assets/img/Specials/SpecialBigCirsleImg.jpg';
import MiddleCircleImg from './../../assets/img/Specials/SpecialMiddleCircleImg.png';
import littleCircleImg from './../../assets/img/Specials/SpecialLIttleCircleImg.png';

const Specials = (props) => {
    return(
        <div className={c.specialBlock}>
            <div className={c.container}>
                <div className={c.specialBLockInner}>
                    <div className={c.imgBlock}>
                        <div className={c.mainImg}>
                            <img className={c.mainImgItem} src={mainImg} alt="" />
                            <img className={c.bigCircleImgItem} src={BigCircleImg} alt="" />
                            <img  className={c.middleCircleImgItem} src={MiddleCircleImg} alt="" />
                            <img className={c.littleCircleImgItem} src={littleCircleImg} alt="" />
                                

                        </div>

                    </div>
                    <div className={c.textBlock}>
                        <h4>Honeymoon Specials</h4>
                        <h2>Our Romantic Tropical Destinations</h2>
                        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                        <button className={c.SpecialBtn}>View Packages</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Specials;