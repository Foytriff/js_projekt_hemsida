import React from 'react'
import "./mediabutton.scss";

export default function MediaButton({title, active, setSelected, id}) {
    return (
        <li className={active ? 'mediaList active' : 'mediaList'} onClick={()=>setSelected(id)}>  
            {title}
        </li>
    )
}
