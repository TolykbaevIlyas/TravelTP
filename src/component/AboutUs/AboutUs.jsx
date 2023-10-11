import React from "react";
import c from './AboutUs.module.css';
import AboutUsImgfirst from './../../assets/img/AboutUs/AboutUsImg_1.png';


const AboutUs = (props) => {
    return(
        <div className={c.AboutUs}>
            <h4>PROMOTION</h4>
            <h2>See What Our Clients Say About Us</h2>
            <div className={c.AboutUsInner}>
                <img className={c.AboutUsImg} src={AboutUsImgfirst} alt="" />
                <div className={c.AboutUsDecrip}>
                    <p className={c.AboutUsDecripInner}>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</p>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;