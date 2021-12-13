import React from 'react'
import "./bandmember.scss"
export default function Bandmember({id, img, click, clicked}) {

    

    const handleClick = () => {
        click(id);
    }

    return (
        <div className='band-member'>
            <button onClick={handleClick} className={'bandbutton ' + (clicked && "img_clicked")}><img src={`${img}`} alt="" className='band-member__img'/></button>
        </div>
    )
}
