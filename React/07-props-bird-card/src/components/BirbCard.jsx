import React from "react"
import "./BirbCard.css"

function BirbCard(props){ 
    
    return(
            <div className="contact-card">
                <img src={props.image} alt="Tucan" />
                <h3 className="name">{props.name}</h3>
                <p className="region"><span className="bold">Region:</span>{props.region}</p>
                <p className="food"><span className="bold">Diet:</span>{props.food}</p>
            </div>
    )
}

export default BirbCard