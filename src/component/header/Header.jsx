import React, { useState } from "react";
import c from './Header.module.css'
import logo from '../../assets/img/logo.png'
import Modal from "../modal/modal";

const Header = (props) => {
    const[isOpen, setOpen]= useState(false);
    const[modalActive, setModalActive] = useState(true);
    return(
        <div className={c.headerApp}>
            <div className={c.container}>
                <div className={c.header}>
                    <div className={c.Logo}>
                        <img src={logo} alt="" />
                    </div>

                    <div className={c.menu}>
                        <li className={` ${c.menuItem}`}>
                            <a href="/">Home</a>
                        </li>
                        <li className={` ${c.menuItem}`}>
                            <a href="/">About</a>
                        </li>
                        <li className={` ${c.menuItem}`} onClick={() => setOpen(!isOpen)}>
                            Sevices<svg className={c.svgHeader} xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.67706e-07 1.00235 3.67706e-07H10.5944C10.7866 -0.000164459 10.9748 0.0550878 11.1365 0.159141C11.2981 0.263194 11.4263 0.411637 11.5058 0.586693C11.5853 0.761749 11.6126 0.955998 11.5845 1.14618C11.5564 1.33636 11.474 1.51441 11.3474 1.659L6.55135 7.139C6.45749 7.24641 6.34174 7.3325 6.21186 7.39148C6.08198 7.45046 5.94099 7.48098 5.79835 7.48098C5.65571 7.48098 5.51472 7.45046 5.38484 7.39148C5.25497 7.3325 5.13921 7.24641 5.04535 7.139V7.14Z" fill="white"/></svg>
                        </li>
                        <li className={` ${c.menuItem}`}>
                            <a href="/">Upcoming Package</a>
                        </li>
                    </div>
                    <button className={c.headerButtonGet} onClick={() => setModalActive(!modalActive) }>Get in Touch</button> 

                    <ul className={`${c.serviceDown} ${isOpen ? `${c.active}` : ""}`}>
                        <div className={c.serviceDecor}> </div>
                        <div className={c.serviceFeatures}>
                            <li className={c.serviceDownItem}>
                                <a href="/">Honeymoon Package</a>
                            </li>
                            <li className={c.serviceDownItem}>
                                <a href="/">Tours Package</a>
                            </li>
                            <li className={c.serviceDownItem}>
                                <a href="/">Musical Events</a>
                            </li>
                            <li className={c.serviceDownItem}>
                                <a href="/">Build Package</a>
                            </li>
                        </div>
                        
                    </ul>
                </div>
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive}></Modal>
        </div>
        
    );
}

export default Header;