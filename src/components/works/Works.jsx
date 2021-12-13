import React, { useState, useEffect } from 'react'
import "./works.scss"
import MediaButton from "./mediabutton/MediaButton"
import ReactPlayer from 'react-player'
import { musicVideos, concerts } from "../../data"

export default function Works() {
    
    const [selected, setSelected] = useState("koncerter");
    const [content, setContent] = useState(null);

    useEffect(() => {
        switch(selected){
            case "koncerter":
                setContent(concerts);
                break;
            case "musikvideor":
                setContent(musicVideos);
                break;
            default:
                setContent(musicVideos);
        }
    }, [selected])

    const titleList = [
        {
            id: "koncerter",
            title: "KONCERTER",
        },
        {
            id: "musikvideor",
            title: "MUSIK VIDEOR",
        },
        {
            id: "galleri",
            title: "GALLERI",
        },
        {
            id: "stream",
            title: "STREAM",
        },
    ];

    return (
        <div className='works gradient2' id="works">
            <div className="content-container">
                <ul>
                    {titleList.map((item)=>{
                        return <MediaButton title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                    })}
                </ul>
                <div className="media-container">
                    {content && content.map((item)=>{
                        return <div key={item.id}>
                                    <ReactPlayer width="22.5rem" height="15.5rem" url={item.url} />
                                    <h3>{item.title}</h3>
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}
