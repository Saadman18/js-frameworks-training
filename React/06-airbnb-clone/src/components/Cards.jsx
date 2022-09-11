import React from "react";
import "./Cards.css"

export default function Cards(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={`/public/images/${props.item.coverImg}`} alt="img" className="card-img" />
            <div className="card-details">
                <div className="rating-flex">
                    <img className="star-logo" src="/public/images/star.png" alt="star icon" />
                    <p className="rating">{`${props.item.stats.rating}`}<span className="text-light"> ({props.item.stats.reviewCount}) ‧ {props.item.location}</span></p>
                </div>
                <p className="description">{props.item.title}</p>
                <p className="price">From ${props.item.price} / person</p>
            </div>
        </div>
    )

}