import React from "react";
import "./Hero.css"

export default function Hero(){
    return(
        <div className="hero-container">
            <img src="/public/images/photo-grid.png" alt="Hero Grid" className="hero-grid" />
            <div className="hero-info">
                <h2 className="hero-title">Online Experience</h2>
                <p className="hero-details">
                    Join unique interactive activities led by one-of-a-kind 
                    hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}