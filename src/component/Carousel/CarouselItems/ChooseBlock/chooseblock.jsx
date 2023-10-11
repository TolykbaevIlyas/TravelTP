import React from "react";
import c from './chooseBlock.module.css'

const ChooseBlock = (props) => {
    return(
        <div className={c.chooseBlock}>
            <div className={`${c.textArea} ${c.chooseItem}`}>
                <p>Where to?</p>
            </div>
            <div className={c.line}></div>
            <div className={`${c.travelType} ${c.chooseItem}`}>
                <p>Travel Type
                    <svg xmlns="http://www.w3.org/2000/svg"  className={c.chooseBlockSvg }width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
            </div>
            <div className={c.line}></div>
            <div className={`${c.duration} ${c.chooseItem}`}>
                <p>Duration
                <svg xmlns="http://www.w3.org/2000/svg" className={c.chooseBlockSvg} width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </p>
            </div>
            <button className={`${c.btn} ${c.chooseItem}`}>Submit</button>
        </div>
    );
}

export default ChooseBlock;