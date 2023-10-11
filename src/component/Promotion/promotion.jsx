import React from "react";
import c from './promotion.module.css';
import promotionMainImg from './../../assets/img/Promotion/PromotionMainImg.png';
import promotionItemImgFirst from './../../assets/img/Promotion/PromotionItemImg_1.png';

const Promotion = (props) => {
    return(
        <div className={c.PromotionBlock}>
            <div className={c.container}>
                <div className={c.promotionBlockInner}>
                    <div className={c.PromotionText}>
                        <h4>Promotion</h4>
                        <h2>We Provide You Best Europe Sightseeing Tours</h2>
                        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                        <button className={c.PromotionBtn}>View Packages</button>

                        <div className={c.PromotionItems}>
                            <div className={c.item}>
                                <img className={c.itemImg} src={promotionItemImgFirst} alt="" />
                                <div className={c.itemText}>800$</div>
                            </div>
                            <div className={c.item}>
                                <img className={c.itemImg} src={promotionItemImgFirst} alt="" />
                                <div className={c.itemText}>800$</div>
                            </div>
                            <div className={c.item}>
                                <img className={c.itemImg} src={promotionItemImgFirst} alt="" />
                                <div className={c.itemText}>800$</div>
                            </div>
                            <div className={c.item}>
                                <img className={c.itemImg} src={promotionItemImgFirst} alt="" />
                                <div className={c.itemText}>800$</div>
                            </div>
                        </div>
                    </div>
                    <div className={c.PromotionImg}>
                        <img src={promotionMainImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;