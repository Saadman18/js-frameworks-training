import React from "react";
import "./Cards.css"

export default function Cards(props){
    let badgeText
    if(props.open === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={`/public/images/${props.image}`} alt="img" className="card-img" />
            <div className="card-details">
                <div className="rating-flex">
                    <img className="star-logo" src="/public/images/star.png" alt="star icon" />
                    <p className="rating">{`${props.rating}`}<span className="text-light"> ({props.numberOfRatings}) ‧ {props.location}</span></p>
                </div>
                <p className="description">{props.title}</p>
                <p className="price">From ${props.price} / person</p>
            </div>
        </div>
    )

}