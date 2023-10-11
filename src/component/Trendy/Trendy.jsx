import React from "react";
import c from './Trendy.module.css';
import trendyItemImgFirst from './../../assets/img/Trendy/TrendyItemsImg_1.png';


const Trendy = (props) => {
    return(
        <div className={c.TrendyBlock}>
           <h4>Trendy</h4>
           <h2>Our Trending Tour Packages</h2>
            <div className={c.container}>
                <div className={c.TrendyItems}>
                    <div className={c.Item}>
                        <img className={c.TrendyImg} src={trendyItemImgFirst} alt="" />
                        <div className={c.TrendyCount}>
                            <p className={c.trendyDays}>8 days</p> 
                            <p className={c.TrendyPeopleCount}>25 People going</p>
                        </div>
                        <h3 className={c.TrendyCountry}>Switzerland</h3>
                        <p className={c.TrendyLocation}>Europe</p>
                        <p className={c.TrendyCost}>1,000 $</p>
                        <p className={c.TrendyDescrip}>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                        <button className={c.TrendyBtn}>Explore Now</button>
                    </div>
                    <div className={c.Item}>
                        <img className={c.TrendyImg} src={trendyItemImgFirst} alt="" />
                        <div className={c.TrendyCount}>
                            <p className={c.trendyDays}>8 days</p> 
                            <p className={c.TrendyPeopleCount}>25 People going</p>
                        </div>
                        <h3 className={c.TrendyCountry}>Switzerland</h3>
                        <p className={c.TrendyLocation}>Europe</p>
                        <p className={c.TrendyCost}>1,000 $</p>
                        <p className={c.TrendyDescrip}>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                        <button className={c.TrendyBtn}>Explore Now</button>
                    </div>
                    <div className={c.Item}>
                        <img className={c.TrendyImg} src={trendyItemImgFirst} alt="" />
                        <div className={c.TrendyCount}>
                            <p className={c.trendyDays}>8 days</p> 
                            <p className={c.TrendyPeopleCount}>25 People going</p>
                        </div>
                        <h3 className={c.TrendyCountry}>Switzerland</h3>
                        <p className={c.TrendyLocation}>Europe</p>
                        <p className={c.TrendyCost}>1,000 $</p>
                        <p className={c.TrendyDescrip}>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                        <button className={c.TrendyBtn}>Explore Now</button>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Trendy;