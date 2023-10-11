import React from "react";
import c from './bookedPeople.module.css'
import bookedPeople1img from '../../../../assets/img/bookedPeople_1.png'
import BookedPeopleItem from "./bookedPeoplelItem/bookedPeopleItem";

const BookedPeopleItemDb= [
    {id:1, img:bookedPeople1img},
    {id:2, img:bookedPeople1img},
    {id:3, img:bookedPeople1img},
    {id:4, img:bookedPeople1img},
];


const BookedPeople = (props) => {

    let BookedPeopleData = BookedPeopleItemDb.map(bookedPeopleElement => <BookedPeopleItem key={bookedPeopleElement.id} img={bookedPeopleElement.img}/>)

    return(
        <div className={c.bookedPeopleBlock}>
            <div className={c.circles}>
                {BookedPeopleData}
            </div>
            <div className={c.bookedPText}>
                2,500 people booked Tommorowland Event in last 24 hours
            </div>
        </div>
    );
}

export default BookedPeople;