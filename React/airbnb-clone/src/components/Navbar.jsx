import React from "react";
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
            <a href="#">
              <img className="logo" src="/src/assets/images/airbnb-logo.png" alt="airbnb logo"/>
            </a>
        </nav>
    )
}