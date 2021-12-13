import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Hem</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Om Oss</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#works">Media</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#contact">Kontakt</a>
                </li>
            </ul>
        </div>
    )
}
