import React from "react";
import photo from "../assets/photo.jpg"

export default function Header(){
    return(
        <div>
            <img className="header-photo" src={photo} alt="profile photo"/>
            <h4 className="name white">Unknown Developer</h4>
            <p className="title accent">Frontend Developer</p>
            <p className="portfolio-link white">www.unknown.com</p>
        </div>
    )
}