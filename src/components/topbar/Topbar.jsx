import React from 'react'
import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from "@fortawesome/free-solid-svg-icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'><img src='assets/loggaprel.png' alt=""></img></a>
                    <div className="itemContainer">
                        <i className='icon'>hi</i>
                        <span>+46 700 31 39 46</span>
                    </div>
                    <div className="itemContainer">
                        <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>
                        <span>gustavhf73@c-mail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
