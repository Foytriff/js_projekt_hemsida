import React from 'react'
import "./intro.scss"

export default function Intro() {
    return (
        <div className='intro' id="intro">

            <div className="introContent">
                <div className="hometext">
                    <h1>Välkommen</h1>
                    <p>Hedda Hatar presenterar</p>
                </div>
                <div className="imgContainer">
                    <img src="assets/Press_HH_3.jpg" alt="" />
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}
