import React from "react";
import c from './Partners.module.css';
import partnerLogo_1 from '../../assets/img/partners/FlyEmiLogo.png';
import partnerLogo_2 from '../../assets/img/partners/SwissLogo.png';
import PartnersItem from "./PartnersItem/PartnersItem";


const PartnersItemDb= [
    {id:1, img:partnerLogo_1},
    {id:2, img:partnerLogo_1},
    {id:3, img:partnerLogo_2},
    {id:4, img:partnerLogo_1},
];

const Partners = (props) => {

    let PartnersData = PartnersItemDb.map(partnersElement => <PartnersItem key={partnersElement.id} img={partnersElement.img}/>)

    return(
        <div className={c.partnersBlock}>
            {PartnersData}
        </div>
          
    );
}

export default Partners;