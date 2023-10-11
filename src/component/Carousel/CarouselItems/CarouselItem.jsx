import React from "react";
import c from './CarouselItem.module.css'
import ChooseBlock from "./ChooseBlock/chooseblock";
import BookedPeople from "./bookedPeople/bookedPeople";

const CarouselItem = (props) => {
    return(
        <div className={c.CarouselItemImg}>
           <div className={c.container}>
            <div className={c.homeMainBlock}>
                    <div className={c.mainText}>
                        <div className="svgHome">
                            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="18" viewBox="0 0 84 18" fill="none"><path d="M3 16.6711L8.96668 4.73778C9.7367 3.19773 11.9344 3.19773 12.7045 4.73778L16.8022 12.9334C17.5723 14.4734 19.77 14.4734 20.54 12.9334L24.6378 4.73778C25.4078 3.19773 27.6056 3.19773 28.3756 4.73778L32.4734 12.9334C33.2434 14.4734 35.4411 14.4734 36.2112 12.9334L40.3089 4.73778C41.079 3.19773 43.2767 3.19773 44.0467 4.73778L48.1445 12.9334C48.9145 14.4734 51.1123 14.4734 51.8823 12.9334L55.9801 4.73778C56.7501 3.19773 58.9478 3.19773 59.7179 4.73778L63.8156 12.9334C64.5857 14.4734 66.7834 14.4734 67.5534 12.9334L71.6512 4.73778C72.4212 3.19773 74.619 3.19773 75.389 4.73778L81.3557 16.6711" stroke="#DF6951" stroke-width="5.22371"/></svg>
                        </div>
                        <h1>No matter where you’re going to, we’ll take you there</h1>
                    </div>
                    <ChooseBlock></ChooseBlock>
                    <BookedPeople></BookedPeople>
                </div>
           </div>
        </div>
    );
}

export default CarouselItem;