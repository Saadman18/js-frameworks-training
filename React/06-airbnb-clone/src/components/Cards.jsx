import React from "react";
import "./Cards.css"

export default function Cards(props){
    console.log(props);
    return(
        <div className="card">
            <img src={`/src/assets/images/${props.image}`} alt="Katie Zaferes" className="card-img" />
            <div className="card-details">
                <div className="rating-flex">
                    <img className="star-logo" src="/src/assets/images/star.png" alt="star icon" />
                    <p className="rating">{`${props.rating}`}<span className="text-light"> ({props.numberOfRatings}) ‧ {props.location}</span></p>
                </div>
                <p className="description">{props.description}</p>
                <p className="price">From ${props.price} / person</p>
            </div>
        </div>
    )

}