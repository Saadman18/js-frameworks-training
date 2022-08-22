import React from "react";
import logo from '../src/assets/logo192.png'

function Header(){
    return(
        <div className="header-container">
            <img src={logo} className="react-logo" alt="react logo" />
            <h2 className="logo-text">ReactFacts</h2>
            <h3 className="header-text">React - Project 1</h3>
        </div>
    )
}

export default Header

